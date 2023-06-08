import Layout from "@/components/Layout";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Link,
    ListItemText,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useEffect, useState } from "react";

import {
    menu_categories as MenuCategory,
    branches,
    townships,
} from "@prisma/client";

import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getselectedLocationId } from "@/utils";

const MenuCategories = () => {
    const [open, setOpen] = useState(false);
    const [menuCategory, setMenuCategory] = useState({
        name: "",
    } as MenuCategory);

    const currentBranchId = parseInt(getselectedLocationId() as string, 10);

    const [selectedBranchIds, setSelectedBranchIds] = useState<number[]>();

    const {
        fetchData,
        menuCategories,
        branches,
        townships,
        branchesMenucategoriesMenus,
    } = useContext(BackofficeContext);
    const { data: session } = useSession();

    const menuCatIds = branchesMenucategoriesMenus
        .filter((data) => data.branch_id === currentBranchId)
        .map((data) => data.menucategory_id);

    const filteredMenuCategories = menuCategories.filter(
        (data) => data.id && menuCatIds.includes(data.id)
    );

    const router = useRouter();
    useEffect(() => {
        if (!session) {
            router.push("/login");
        }
    }, [session]);

    const getMenusCount = (menuCategoryId?: number) => {
        if (!menuCategoryId) return 0;
        return branchesMenucategoriesMenus.filter(
            (item) =>
                item.menucategory_id === menuCategoryId &&
                item.branch_id === currentBranchId &&
                item.menu_id !== null
        ).length;
    };

    const addNewMenucategory = async () => {
        if (!menuCategory?.name || !selectedBranchIds?.length) return;

        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menu-categories`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    menuCategory: menuCategory,
                    selectedBranchIds: selectedBranchIds,
                }),
            }
        );

        fetchData();
        setMenuCategory({ ...menuCategory, name: "" });
        setSelectedBranchIds([]);
        setOpen(false);
    };

    return (
        <Layout>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ textAlign: "center", mr: 4 }}>
                    <Box
                        onClick={() => setOpen(true)}
                        sx={{
                            width: "170px",
                            height: "170px",
                            borderRadius: 2,
                            border: "2px solid #EBEBEB",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            textAlign: "center",
                        }}
                    >
                        <AddIcon fontSize="large" />
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        Add new menu category
                    </Typography>
                </Box>

                {filteredMenuCategories.map((menuCategory) => (
                    <Link
                        key={menuCategory.id}
                        href={`/backoffice/menu-categories/${menuCategory.id}`}
                        style={{ textDecoration: "none", color: "#000000" }}
                    >
                        <Box sx={{ textAlign: "center", mr: 4 }}>
                            <Box
                                sx={{
                                    width: "170px",
                                    height: "170px",
                                    borderRadius: 2,
                                    border: "2px solid #EBEBEB",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    textAlign: "center",
                                }}
                            >
                                <Typography>
                                    {getMenusCount(menuCategory.id)} menus
                                </Typography>
                            </Box>
                            <Typography sx={{ mt: 1 }}>
                                {menuCategory.name}
                            </Typography>
                        </Box>
                    </Link>
                ))}
            </Box>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 250,
                        m: "0 auto",
                    }}
                >
                    <h1 style={{ textAlign: "center" }}>
                        Create a new menu category
                    </h1>
                    <Typography>enter new menucategory name</Typography>
                    <TextField
                        variant="outlined"
                        sx={{ mb: 2 }}
                        onChange={(e) =>
                            setMenuCategory({
                                ...menuCategory,
                                name: e.target.value,
                            })
                        }
                    />
                    <Typography>select branches</Typography>
                    <Select
                        value={selectedBranchIds ? selectedBranchIds : []}
                        fullWidth
                        sx={{ mb: 2 }}
                        multiple
                        onChange={(evt: any) => {
                            const values = evt.target.value as number[];
                            setSelectedBranchIds(values);
                        }}
                    >
                        {branches.map((branch: branches) => (
                            <MenuItem key={branch.id} value={branch.id}>
                                {townships &&
                                    townships.map((ts: townships) =>
                                        ts.id === branch.township_id
                                            ? ts.name
                                            : ""
                                    )}
                                /{branch.address}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button variant="contained" onClick={addNewMenucategory}>
                        Create
                    </Button>
                </DialogContent>
            </Dialog>
        </Layout>
    );
};

export default MenuCategories;
