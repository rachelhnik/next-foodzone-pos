import Layout from "@/components/Layout";
import { config } from "@/config/Config";
import { Box, Typography } from "@mui/material";
import { menus as Menu, menu_categories as MenuCategory } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
    getBranchesByMenucategoryId,
    getMenusByMenucategoryId,
    getselectedLocationId,
} from "@/utils";

import DeleteDialog from "@/components/DeleteDialog";
import { appData } from "@/store/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "@/store/hooks";
import { fetchBranchesMenucategoriesMenus } from "@/store/slices/branchesMenucategoriesMenuSlice";
import {
    removeMenuCategory,
    setMenuCategory,
    updateMenuCategories,
} from "@/store/slices/menuCategorySlice";
import DeleteButton from "@/components/buttons/DeleteButton";
import UpdateButton from "@/components/buttons/UpdateButton";
import TextFieldComponent from "@/components/textfields/TextFieldComponent";
import MenuAutocomplete from "@/components/autocomplete/MenuAuocomplete";

const MenucategoryDetail = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { branches, branchesMenucategoriesMenus, menuCategories, menus } =
        useSelector(appData);
    const [open, setOpen] = useState(false);
    const [openMenucat, setOpenMenucat] = useState(false);

    const [menuCategoryToRemove, setMenucategoryToRemove] =
        useState<MenuCategory>();

    const selectedBranchId = parseInt(getselectedLocationId() as string, 10);
    const menuCategoryId = parseInt(router.query.id as string, 10);

    const menuCategory = menuCategories.find(
        (data) => data.id === menuCategoryId
    );

    const validMenus = getMenusByMenucategoryId(
        menuCategoryId,
        branchesMenucategoriesMenus,
        menus,
        selectedBranchId
    );

    const selectedBranches = getBranchesByMenucategoryId(
        branchesMenucategoriesMenus,
        menuCategoryId,
        branches
    );
    const selectedMenuIds = branchesMenucategoriesMenus
        .filter(
            (item) =>
                item.branch_id === selectedBranchId &&
                item.menucategory_id === menuCategoryId
        )
        .map((item) => item.menu_id);
    const selectedMenuData = validMenus.filter((item) =>
        selectedMenuIds.includes(item.id)
    );

    const [newMenuCategory, setNewMenuCategory] = useState({
        name: menuCategory?.name || "",
    });

    const [selectedMenus, setSelectedMenus] =
        useState<Menu[]>(selectedMenuData);

    if (!menuCategory) return;
    console.log("selectedMenus", selectedMenus);
    const handleRemoveMenuCategory = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/menu-categories/${menuCategoryId}?branchId=${selectedBranchId}`,
            {
                method: "DELETE",
            }
        );
        if (response.ok) {
            const deletedMenuCategoryData = await response.json();
            dispatch(removeMenuCategory(deletedMenuCategoryData));
            dispatch(
                fetchBranchesMenucategoriesMenus(String(selectedBranchId))
            );
            router.push("/backoffice/menu-categories");
        }
    };

    const updateMenuCategory = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/menu-categories/${menuCategoryId}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: newMenuCategory.name,
                    selectedMenus: selectedMenus,
                    menuCategoryId: menuCategoryId,
                    branchId: selectedBranchId,
                }),
            }
        );
        if (response.ok) {
            const updatedMenuCategory = await response.json();
            dispatch(updateMenuCategories(updatedMenuCategory));
            dispatch(
                fetchBranchesMenucategoriesMenus(String(selectedBranchId))
            );
            router.push("/backoffice/menu-categories");
        }
    };

    return (
        <Layout>
            <Box
                sx={{
                    width: 900,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box sx={{ my: 3, display: "flex", flexDirection: "column" }}>
                    <TextFieldComponent
                        label="Name"
                        defaultValue={menuCategory.name}
                        handleOnChange={(evt) =>
                            setNewMenuCategory({
                                ...newMenuCategory,
                                name: evt.target.value,
                            })
                        }
                    />

                    <Typography variant="caption" sx={{ my: 1 }}>
                        Select menus for current branch and category
                    </Typography>
                    <MenuAutocomplete
                        options={menus}
                        defaultValue={selectedMenus}
                        handleOnChange={(evt, values) =>
                            setSelectedMenus(values)
                        }
                        label="menus"
                        checkedData={selectedMenus}
                    />
                    <UpdateButton updateItem={updateMenuCategory} />
                    <DeleteButton
                        handleDelete={() => {
                            setOpenMenucat(true),
                                setMenucategoryToRemove(menuCategory);
                        }}
                        title="menu category"
                    />
                </Box>
                <Box>
                    <DeleteDialog
                        title="Are you sure you want to delete this menu category?"
                        open={openMenucat}
                        setOpen={setOpenMenucat}
                        callback={handleRemoveMenuCategory}
                    />
                </Box>
            </Box>
        </Layout>
    );
};

export default MenucategoryDetail;
