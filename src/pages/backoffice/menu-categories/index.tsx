import Layout from "@/components/Layout";
import { Box, Dialog, DialogContent } from "@mui/material";
import { useEffect, useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getselectedLocationId } from "@/utils";
import ItemCard from "@/components/ItemCard";
import { useSelector } from "react-redux";
import { appData } from "@/store/slices/appSlice";
import OpenCreateButton from "@/components/buttons/OpenCreateButton";
import MenuCategoryCreateDialog from "@/components/create/CreateMenuCategory";

const MenuCategories = () => {
    const [open, setOpen] = useState(false);

    const currentBranchId = parseInt(getselectedLocationId() as string, 10);

    const { menuCategories, branchesMenucategoriesMenus } =
        useSelector(appData);

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
        console.log(
            branchesMenucategoriesMenus.filter(
                (item) =>
                    item.menucategory_id === menuCategoryId &&
                    item.branch_id === currentBranchId &&
                    item.menu_id !== null
            )
        );
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
                    <OpenCreateButton
                        setOpen={setOpen}
                        label="New menu category"
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                    }}
                >
                    {filteredMenuCategories.map((menuCategory) => (
                        <ItemCard
                            key={menuCategory.id}
                            icon={<CategoryIcon />}
                            href={`/backoffice/menu-categories/${menuCategory.id}`}
                            title={menuCategory.name}
                            subtitle={`${String(
                                getMenusCount(menuCategory.id)
                            )} menus `}
                        />
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
                        <MenuCategoryCreateDialog setOpen={setOpen} />
                    </DialogContent>
                </Dialog>
            </Box>
        </Layout>
    );
};

export default MenuCategories;
