import Layout from "@/components/Layout";
import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { Autocomplete, Box, Button, Checkbox, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { fetchData } from "next-auth/client/_utils";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const MenucategoryDetail = () => {
    const router = useRouter();
    const { branches, branchesMenucategoriesMenus, menuCategories, fetchData } =
        useContext(BackofficeContext);

    const menuCategoryId = parseInt(router.query.id as string, 10);

    const menuCategory = menuCategories.find(
        (data) => data.id === menuCategoryId
    );

    const branchIds = [
        ...new Set(
            branchesMenucategoriesMenus
                .filter((item) => item.menucategory_id === menuCategory?.id)
                .map((item) => item.branch_id)
        ),
    ];

    const selectedBranches = branches.filter((branch) =>
        branchIds.includes(branch.id)
    );
    console.log(selectedBranches);

    const [newMenuCategory, setNewMenuCategory] = useState({
        name: menuCategory?.name,
        branches: selectedBranches,
    });

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
        console.log(await response.json());
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
                    sx={{ mt: 2, width: 200 }}
                >
                    Update
                </Button>
            </Box>
        </Layout>
    );
};

export default MenucategoryDetail;
