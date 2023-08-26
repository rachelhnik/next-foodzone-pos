import Layout from "@/components/Layout";
import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    TextField,
    Typography,
} from "@mui/material";
import {
    menus as Menu,
    branches,
    menu_categories as MenuCategory,
} from "@prisma/client";
import { useRouter } from "next/router";
import { use, useContext, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
    getBranchesByMenucategoryId,
    getMenusByMenucategoryId,
    getselectedLocationId,
} from "@/utils";
import MenuCard from "@/components/MenuCard";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveMenuFromMenuCategory from "./RemoveMenuFromCategory";
import DeleteDialog from "@/components/DeleteDialog";
import { appData } from "@/store/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "@/store/hooks";
import { fetchBranchesMenucategoriesMenus } from "@/store/slices/branchesMenucategoriesMenuSlice";
import {
    removeMenuCategory,
    updateMenuCategories,
} from "@/store/slices/menuCategorySlice";
import DeleteButton from "@/components/buttons/DeleteButton";
import UpdateButton from "@/components/buttons/UpdateButton";
import TextFieldComponent from "@/components/textfields/TextFieldComponent";
import AutocompleteComponent from "@/components/autocomplete/AutoCompleteCompenet";
import MenucatAutoComplete from "@/components/autocomplete/MenucatAutocomplete";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface AutocompleteProps {
    id: number;
    label: string;
}

const MenucategoryDetail = () => {
    const router = useRouter();
    const {
        branches,
        branchesMenucategoriesMenus,
        menuCategories,

        menus,
    } = useSelector(appData);

    const [open, setOpen] = useState(false);
    const [openMenucat, setOpenMenucat] = useState(false);
    const [selectedMenuToRemove, setSelectedMenuToRemove] = useState<Menu>();
    const selectedBranchId = parseInt(getselectedLocationId() as string, 10);
    const dispatch = useAppDispatch();
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

    const menuIds = validMenus.map((item) => item.id);

    const selectedBranches = getBranchesByMenucategoryId(
        branchesMenucategoriesMenus,
        menuCategoryId,
        branches
    );
    //
    const [newMenuCategory, setNewMenuCategory] = useState({
        name: menuCategory?.name || "",
        branches: selectedBranches,
    });
    const [menuCategoryToRemove, setMenucategoryToRemove] =
        useState<MenuCategory>();

    const [selectedMenu, setSelectedMenu] = useState<AutocompleteProps | null>(
        null
    );
    if (!menuCategory) return;

    const updateMenuCategory = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/menu-categories/${menuCategoryId}`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    newMenuCategory: newMenuCategory,
                    menuCategoryId: menuCategoryId,
                }),
            }
        );

        if (response.ok) {
            const updatedMenucategory = await response.json();
            dispatch(updateMenuCategories(updatedMenucategory));
            dispatch(
                fetchBranchesMenucategoriesMenus(String(selectedBranchId))
            );
            router.push("/backoffice/menu-categories");
        }
    };
    const addMenuToMenuCategory = async () => {
        await fetch(`${config.apiBaseUrl}/menu-categories/addMenu`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                addedMenu: selectedMenu,
                menuCategoryId: menuCategoryId,
                branchId: selectedBranchId,
            }),
        });

        setSelectedMenu(null);
    };

    const handleRemoveMenu = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/menu-categories/deleteMenu`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    menuToRemove: selectedMenuToRemove,
                    menuCategoryId: menuCategoryId,
                    selectedBranchId: selectedBranchId,
                }),
            }
        );

        setOpen(false);
    };

    const handleRemoveMenuCategory = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/menu-categories/${menuCategoryId}`,
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

    return (
        <Layout>
            <Box
                sx={{
                    width: 900,
                    display: "flex",
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
                    <DeleteButton
                        handleDelete={() => {
                            setOpenMenucat(true),
                                setMenucategoryToRemove(menuCategory);
                        }}
                        title="menu category"
                    />
                </Box>
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
                    <MenucatAutoComplete
                        options={branches}
                        defaultValue={selectedBranches}
                        handleOnChange={(evt, values) => {
                            setNewMenuCategory({
                                ...newMenuCategory,
                                branches: values,
                            });
                        }}
                        label="locations"
                        checkedData={newMenuCategory}
                    />

                    <UpdateButton updateItem={updateMenuCategory} />
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Menus
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",

                            mb: 3,
                        }}
                    >
                        <Autocomplete
                            sx={{ minWidth: 300, mr: 3 }}
                            value={selectedMenu}
                            isOptionEqualToValue={(option, value) =>
                                option.id === value.id
                            }
                            onChange={(evt, value) => {
                                setSelectedMenu(value);
                            }}
                            clearOnBlur
                            options={menus
                                .filter((item) => !menuIds.includes(item.id))
                                .map((item) => ({
                                    id: item.id,
                                    label: item.name,
                                }))}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Add menu to this category"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: "search",
                                    }}
                                />
                            )}
                        />
                        <Button
                            variant="contained"
                            onClick={addMenuToMenuCategory}
                            sx={{
                                backgroundColor: "#606C5D",
                                color: "#E8F6EF",
                                mt: 2,
                                ":hover": {
                                    bgcolor: "#7C9070",
                                    color: "white",
                                },
                            }}
                        >
                            Add
                        </Button>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        {validMenus.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    mr: 2,

                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <MenuCard menu={item} href={""} />

                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    startIcon={<DeleteIcon />}
                                    sx={{
                                        width: "fit-content",
                                        color: "#7C9070",
                                    }}
                                    onClick={() => {
                                        setSelectedMenuToRemove(item);
                                        setOpen(true);
                                    }}
                                >
                                    Remove
                                </Button>
                            </Box>
                        ))}
                    </Box>
                    <RemoveMenuFromMenuCategory
                        menu={selectedMenuToRemove}
                        open={open}
                        setOpen={setOpen}
                        handleRemoveMenu={handleRemoveMenu}
                    />
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
