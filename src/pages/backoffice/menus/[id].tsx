import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { menus as MenusData } from "@prisma/client";
import { useContext, useState } from "react";
import FileDropZone from "@/components/FileDropZone";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import {
    Typography,
    TextField,
    Button,
    Autocomplete,
    Checkbox,
} from "@mui/material";
import { config } from "@/config/Config";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteDialog from "@/components/DeleteDialog";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CenteredTabs() {
    const { menus, addonCategories, menuAddonCategories, fetchData } =
        useContext(BackofficeContext);
    const router = useRouter();
    const menuId = parseInt(router.query.id as string, 10);
    let menu: MenusData | undefined;
    menu = menus.find((menu) => menu.id === menuId);

    const [menuImage, setMenuImage] = React.useState<File>();
    const onFileSelected = (files: File[]) => {
        setMenuImage(files[0]);
    };

    const selectedAddonCategoriesIds = menuAddonCategories
        .filter((item) => item.menu_id === menuId)
        .map((item) => item.addoncategory_id);
    const selectedAddonCategories = addonCategories.filter((addoncat) =>
        selectedAddonCategoriesIds.includes(addoncat.id)
    );

    const [updatedMenu, setUpdatedMenu] = React.useState({
        name: menu?.name,
        price: menu?.price,
        asset_url: "",
        description: menu?.description,
        addonCategories: selectedAddonCategories,
    });

    const [menuToRemove, setMenuToRemove] = useState<MenusData>();

    const [open, setOpen] = useState(false);

    const updateMenu = async () => {
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
                updatedMenu.asset_url = responseJSON.assetUrl;
                const responseUpdateMenu = await fetch(
                    `${config.backofficeApiBaseUrl}/menus/${menu?.id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(updatedMenu),
                    }
                );
                fetchData();
                router.push("/backoffice/menus");
            }
            const responseUpdateMenu = await fetch(
                `${config.backofficeApiBaseUrl}/menus/${menu?.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedMenu),
                }
            );
            fetchData();
            router.push("/backoffice/menus");
        } catch (error) {
            return null;
        }
    };

    const handleRemoveMenu = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/${menu?.id}`,
            {
                method: "DELETE",
            }
        );
        fetchData();
        router.push("/backoffice/menus");
    };

    return (
        <Layout>
            {menu ? (
                <Box
                    sx={{
                        display: "flex",
                        width: 900,
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            right: 10,
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            onClick={() => {
                                setOpen(true), setMenuToRemove(menu);
                            }}
                            variant="contained"
                            startIcon={<DeleteIcon />}
                            sx={{
                                backgroundColor: "#AFAFAF",
                                width: "fit-content",
                                color: "#000000",
                                mb: 2,

                                ":hover": {
                                    bgcolor: "#000000",
                                    color: "white",
                                },
                            }}
                        >
                            Delete menu
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            mr: 2,
                            mt: -5,
                        }}
                    >
                        <Typography variant="caption">Name</Typography>
                        <TextField
                            variant="outlined"
                            defaultValue={updatedMenu.name}
                            sx={{ mb: 2, maxWidth: 300 }}
                            onChange={(evt) => {
                                setUpdatedMenu({
                                    ...updatedMenu,
                                    name: evt.target.value,
                                });
                            }}
                        />
                        <Typography variant="caption">Price</Typography>
                        <TextField
                            variant="outlined"
                            type="number"
                            defaultValue={updatedMenu.price}
                            sx={{ mb: 2, maxWidth: 300 }}
                            onChange={(evt) => {
                                setUpdatedMenu({
                                    ...updatedMenu,
                                    price: parseInt(evt.target.value, 10),
                                });
                            }}
                        />
                        <Typography variant="caption">description</Typography>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            defaultValue={updatedMenu.description}
                            sx={{ mb: 2, maxWidth: 300 }}
                            onChange={(evt) => {
                                setUpdatedMenu({
                                    ...updatedMenu,
                                    description: evt.target.value,
                                });
                            }}
                        />

                        <Typography>change Image ?</Typography>
                        <FileDropZone onFileSelected={onFileSelected} />
                        <Autocomplete
                            sx={{ width: 300, mt: 2 }}
                            multiple
                            options={addonCategories}
                            defaultValue={selectedAddonCategories}
                            disableCloseOnSelect
                            isOptionEqualToValue={(option, value) =>
                                option.id === value.id
                            }
                            getOptionLabel={(option) => option.name}
                            onChange={(evt, values) => {
                                setUpdatedMenu({
                                    ...updatedMenu,
                                    addonCategories: values,
                                });
                            }}
                            renderOption={(props, option) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={
                                            updatedMenu.addonCategories.find(
                                                (addoncat) =>
                                                    addoncat.id === option.id
                                            )
                                                ? true
                                                : false
                                        }
                                    />
                                    {option.name}
                                </li>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="addon categories"
                                />
                            )}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#606C5D",
                                width: 300,
                                color: "#E8F6EF",
                                mt: 2,

                                ":hover": {
                                    bgcolor: "#7C9070",
                                    color: "white",
                                },
                            }}
                            onClick={updateMenu}
                        >
                            Update
                        </Button>
                    </Box>
                    <DeleteDialog
                        title="Are you sure you want to delete this menu category?"
                        open={open}
                        setOpen={setOpen}
                        callback={handleRemoveMenu}
                    />
                </Box>
            ) : (
                <Typography>Menu not found</Typography>
            )}
        </Layout>
    );
}
