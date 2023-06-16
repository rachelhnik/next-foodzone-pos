import Layout from "@/components/Layout";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Grid,
    Link,
    Paper,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useEffect, useState } from "react";

import { BackofficeContext } from "@/contexts/BackofficeContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getselectedLocationId } from "@/utils";
import NewMenuCategory from "./create";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const MenuCategories = () => {
    const [open, setOpen] = useState(false);

    const currentBranchId = parseInt(getselectedLocationId() as string, 10);

    const {
        menuCategories,

        branchesMenucategoriesMenus,
    } = useContext(BackofficeContext);
    console.log(menuCategories, branchesMenucategoriesMenus);
    const { data: session } = useSession();

    const menuCatIds = branchesMenucategoriesMenus
        .filter((data) => data.branch_id === currentBranchId)
        .map((data) => data.menucategory_id);
    console.log(menuCatIds);

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

    return (
        <Layout>
            <Box sx={{ width: "900px" }}>
                <Box
                    sx={{
                        right: 10,
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        onClick={() => setOpen(true)}
                        variant="contained"
                        startIcon={<AddIcon />}
                        sx={{
                            backgroundColor: "#606C5D",
                            width: "fit-content",
                            color: "#E8F6EF",
                            mb: 2,

                            ":hover": {
                                bgcolor: "#7C9070", // theme.palette.primary.main
                                color: "white",
                            },
                        }}
                    >
                        New menu category
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                    }}
                >
                    {filteredMenuCategories.map((menuCategory) => (
                        <Link
                            key={menuCategory.id}
                            href={`/backoffice/menu-categories/${menuCategory.id}`}
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <Box sx={{ textAlign: "center", mr: 4 }}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        width: 170,
                                        height: 170,
                                        mr: 4,
                                        mb: 5,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                        pl: 2,
                                        pb: 2,
                                    }}
                                >
                                    <Typography>
                                        {getMenusCount(menuCategory.id)} menus
                                    </Typography>

                                    <Typography sx={{ mt: 1 }}>
                                        {menuCategory.name}
                                    </Typography>
                                </Paper>
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
                            width: 280,
                            m: "0 auto",
                        }}
                    >
                        <NewMenuCategory />
                    </DialogContent>
                </Dialog>
            </Box>
        </Layout>
    );
};

export default MenuCategories;
