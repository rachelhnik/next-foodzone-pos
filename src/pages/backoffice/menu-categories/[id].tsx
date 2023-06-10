import Layout from "@/components/Layout";
import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { Autocomplete, Box, Button, Checkbox, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { getselectedLocationId } from "@/utils";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const MenucategoryDetail = () => {
    const router = useRouter();
    const {
        branches,
        branchesMenucategoriesMenus,
        menuCategories,
        fetchData,
        menus,
    } = useContext(BackofficeContext);

    const menuCategoryId = parseInt(router.query.id as string, 10);

    const menuCategory = menuCategories.find(
        (data) => data.id === menuCategoryId
    );

    const menuIds = branchesMenucategoriesMenus
        .filter((item) => item.menucategory_id === menuCategoryId)
        .map((item) => item.menu_id);

    const selectedBranchId = parseInt(getselectedLocationId() as string, 10);

    const selectedMenus = menus.filter((menu) => menuIds.includes(menu.id));

    const [newMenuCategory, setNewMenuCategory] = useState({
        name: menuCategory?.name,
        branchId: selectedBranchId,
        menus: selectedMenus,
    });
    console.log(newMenuCategory);
    if (!menuCategory) return;

    const updateMenuCategory = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menu-categories/${menuCategoryId}`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newMenuCategory),
            }
        );

        fetchData();
    };

    return (
        <Layout>
            <Box
                sx={{
                    width: 300,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
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
                    sx={{ width: 300, mt: 2 }}
                    multiple
                    options={menus}
                    defaultValue={selectedMenus}
                    disableCloseOnSelect
                    isOptionEqualToValue={(option, value) =>
                        option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    onChange={(evt, values) => {
                        setNewMenuCategory({
                            ...newMenuCategory,
                            menus: values,
                        });
                    }}
                    renderOption={(props, option) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={
                                    newMenuCategory.menus.find(
                                        (menu) => menu.id === option.id
                                    )
                                        ? true
                                        : false
                                }
                            />
                            {option.name}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField {...params} label="menus" />
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
        </Layout>
    );
};

export default MenucategoryDetail;
