import Layout from "@/components/Layout";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Link,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useEffect, useState } from "react";

import { BackofficeContext } from "@/contexts/BackofficeContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getselectedLocationId } from "@/utils";
import NewMenuCategory from "./create";

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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 auto",
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
        </Layout>
    );
};

export default MenuCategories;
