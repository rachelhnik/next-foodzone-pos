import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";
import { Box, Chip, Typography, Select, MenuItem, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const MenuDetailPageTwo = (menuId: any) => {
    const { branchesMenucategoriesMenus, menuCategories, fetchData } =
        useContext(BackofficeContext);
    const [selectedMenuCategoryIds, setSelectedMenuCategoryIds] = useState<
        number[]
    >([]);
    const router = useRouter();
    const currentMenuId = menuId.menuId;
    const branchId = getselectedLocationId();
    const currentenuCategoriesIds = branchesMenucategoriesMenus
        .filter(
            (data) =>
                String(data.menu_id) === menuId &&
                String(data.branch_id) === branchId
        )
        .map((data) => data.menucategory_id);
    const newMenuCategories = menuCategories.filter(
        (data) => !currentenuCategoriesIds.includes(data.id as number)
    );
    const currentMenuCategories = menuCategories.filter((data) =>
        currentenuCategoriesIds.includes(data.id as number)
    );

    const addMenuCategory = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/menus-menucats/${menuId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    menuCatIds: selectedMenuCategoryIds,
                    branchId: branchId,
                }),
            }
        );
        fetchData();
        setSelectedMenuCategoryIds([]);
    };
    const deleteMenuCategory = async (menucatId: number) => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/menus-menucats?menuId=${menuId}`,
            {
                method: "DELETE",
            }
        );
        fetchData();
    };

    return (
        <>
            {
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 300,
                        margin: "0 auto",
                    }}
                >
                    {currentMenuCategories.map((data) => (
                        <Chip
                            label={data.name}
                            sx={{ mb: 1, width: 200 }}
                            key={data.id}
                            onDelete={(id) =>
                                deleteMenuCategory(data.id as number)
                            }
                        />
                    ))}
                    <Typography variant="caption">
                        Select menu categories
                    </Typography>

                    <Select
                        multiple
                        value={selectedMenuCategoryIds}
                        label="select categoty"
                        onChange={(evt) => {
                            const values = evt.target.value as number[];
                            setSelectedMenuCategoryIds(values);
                        }}
                    >
                        {newMenuCategories.map((menucat) => (
                            <MenuItem key={menucat.id} value={menucat.id}>
                                {menucat.name}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button
                        variant="contained"
                        sx={{ margin: "auto", mt: 2, width: 150 }}
                        onClick={addMenuCategory}
                    >
                        Add
                    </Button>
                </Box>
            }
        </>
    );
};

export default MenuDetailPageTwo;
