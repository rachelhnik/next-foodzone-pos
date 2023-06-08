import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import Layout from "../../../components/Layout";
import { useState } from "react";
import { menus as MenusData } from "@prisma/client";
import { config } from "../../../config/Config";
import FileDropZone from "../../../components/FileDropZone";
import { BackofficeContext } from "../../../contexts/BackofficeContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import { getselectedLocationId } from "@/utils";

const CreateMenu = () => {
    const [menuImage, setMenuImage] = useState<File>();

    const [menuCategoryIds, setMenuCategoryIds] = useState<number[]>([]);
    const router = useRouter();
    const currentBranchId = getselectedLocationId();

    const { fetchData, menuCategories, branchesMenucategoriesMenus } =
        useContext(BackofficeContext);

    const validMenuCategoryIds = branchesMenucategoriesMenus
        .filter(
            (item) =>
                item.menucategory_id &&
                item.branch_id === parseInt(currentBranchId as string, 10)
        )
        .map((item) => item.menucategory_id);
    const validMenuCategories = menuCategories.filter(
        (item) => item.id && validMenuCategoryIds.includes(item.id)
    );

    const [menu, setMenu] = useState({
        name: "",
        price: 0,
        isAvailable: true,
        description: "",
        menucategoryIds: [],
        asset_url: "",
    });

    const isDisabled =
        !menu.name || !menu.price || !menu.description || !menu.menucategoryIds;

    const onFileSelected = (files: File[]) => {
        setMenuImage(files[0]);
    };

    const createMenu = async () => {
        try {
            if (menuImage) {
                const formData = new FormData();

                formData.append("files", menuImage as Blob);
                const response = await fetch(
                    `${config.backofficeApiBaseUrl}/assets`,
                    {
                        method: "POST",

                        body: formData,
                    }
                );
                const responseJSON = await response.json();
                const assetUrl = responseJSON.assetUrl;

                menu.asset_url = assetUrl;
                const menuResponse = await fetch(
                    `${config.backofficeApiBaseUrl}/menus`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            menu: menu,
                            currentBranchId: currentBranchId,
                        }),
                    }
                );
                fetchData();
                if (menuResponse.ok) router.push("/backoffice/menus");
            }
        } catch (error) {
            return null;
        }
    };

    const deleteMenu = async (menuId?: number) => {
        if (!menuId) return;
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/${menuId}`,
            {
                method: "DELETE",
            }
        );
    };

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 350,
                    margin: "0 auto",
                }}
            >
                <h1 style={{ textAlign: "center" }}>Create a new menu</h1>
                <TextField
                    label="Name"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    onChange={(evt) =>
                        setMenu({ ...menu, name: evt.target.value })
                    }
                />
                <TextField
                    label="Price"
                    variant="outlined"
                    type="number"
                    sx={{ mb: 2 }}
                    onChange={(evt) =>
                        setMenu({
                            ...menu,
                            price: parseInt(evt.target.value, 10),
                        })
                    }
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    onChange={(evt) =>
                        setMenu({ ...menu, description: evt.target.value })
                    }
                />
                <FormControl>
                    <InputLabel id="demo-multiple-name-label">
                        Select menu categories
                    </InputLabel>
                    <Select
                        multiple
                        sx={{ mb: 2 }}
                        value={menuCategoryIds}
                        onChange={(evt) => {
                            const values = evt.target.value as [];
                            setMenuCategoryIds(values);
                            setMenu({ ...menu, menucategoryIds: values });
                        }}
                    >
                        {validMenuCategories.map((menucat) => (
                            <MenuItem key={menucat.id} value={menucat.id}>
                                {menucat.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FileDropZone onFileSelected={onFileSelected} />

                <Button
                    variant="contained"
                    onClick={createMenu}
                    disabled={isDisabled}
                    sx={{
                        backgroundColor: "#4C4C6D",
                        mt: 2,
                        color: "#E8F6EF",
                        mb: 2,

                        ":hover": {
                            bgcolor: "#1B9C85", // theme.palette.primary.main
                            color: "white",
                        },
                    }}
                >
                    Create
                </Button>
            </Box>
        </Box>
    );
};

export default CreateMenu;
