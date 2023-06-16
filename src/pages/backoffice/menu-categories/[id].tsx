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
import { menus as Menu, branches } from "@prisma/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
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
        fetchData,
        menus,
    } = useContext(BackofficeContext);
    const [open, setOpen] = useState(false);
    const [selectedMenuToRemove, setSelectedMenuToRemove] = useState<Menu>();

    const menuCategoryId = parseInt(router.query.id as string, 10);

    const menuCategory = menuCategories.find(
        (data) => data.id === menuCategoryId
    );
    const validMenus = getMenusByMenucategoryId(
        menuCategoryId,
        branchesMenucategoriesMenus,
        menus
    );

    const menuIds = validMenus.map((item) => item.id);

    const selectedBranches = getBranchesByMenucategoryId(
        branchesMenucategoriesMenus,
        menuCategoryId,
        branches
    );

    const selectedBranchId = parseInt(getselectedLocationId() as string, 10);

    const [newMenuCategory, setNewMenuCategory] = useState({
        name: menuCategory?.name,
        branches: selectedBranches,
    });

    const [selectedMenu, setSelectedMenu] = useState<AutocompleteProps | null>(
        null
    );
    if (!menuCategory) return;

    const updateMenuCategory = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menu-categories/${menuCategoryId}`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    newMenuCategory: newMenuCategory,
                    menuCategoryId: menuCategoryId,
                }),
            }
        );
        if (response.ok) router.push("/backoffice/menu-categories");
        fetchData();
    };
    const addMenuToMenuCategory = async () => {
        await fetch(`${config.backofficeApiBaseUrl}/menu-categories/addMenu`, {
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
        fetchData();
        setSelectedMenu(null);
    };

    const handleRemoveMenu = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menu-categories/deleteMenu`,
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

        fetchData();
        setOpen(false);
    };

    return (
        <Layout>
            <Box
                sx={{
                    width: 300,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box sx={{ my: 3 }}>
                    <TextField
                        defaultValue={menuCategory.name}
                        fullWidth
                        sx={{ mb: 2 }}
                        onChange={(evt) =>
                            setNewMenuCategory({
                                ...newMenuCategory,
                                name: evt.target.value,
                            })
                        }
                    />
                    <Autocomplete
                        sx={{ width: 300 }}
                        multiple
                        options={branches}
                        defaultValue={selectedBranches}
                        disableCloseOnSelect
                        isOptionEqualToValue={(option, value) =>
                            option.id === value.id
                        }
                        getOptionLabel={(option) => option.address}
                        onChange={(evt, values) => {
                            setNewMenuCategory({
                                ...newMenuCategory,
                                branches: values,
                            });
                        }}
                        renderOption={(props, option) => (
                            <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={
                                        newMenuCategory.branches.find(
                                            (branch) => branch.id === option.id
                                        )
                                            ? true
                                            : false
                                    }
                                />
                                {option.address}
                            </li>
                        )}
                        renderInput={(params) => (
                            <TextField {...params} label="Locations" />
                        )}
                    />
                    <Button
                        variant="contained"
                        onClick={updateMenuCategory}
                        fullWidth
                        sx={{
                            backgroundColor: "#606C5D",

                            color: "#E8F6EF",
                            mt: 2,

                            ":hover": {
                                bgcolor: "#7C9070", // theme.palette.primary.main
                                color: "white",
                            },
                        }}
                    >
                        Update
                    </Button>
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
                                <MenuCard menu={item} />
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
                </Box>
            </Box>
        </Layout>
    );
};

export default MenucategoryDetail;
