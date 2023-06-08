import {
    Box,
    TextField,
    Checkbox,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { useContext, useState } from "react";

import type { addon_categories as AddonCategory } from "@prisma/client";
import { config } from "../../../config/Config";
import { BackofficeContext } from "../../../contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";

export default function CreateAddonCategory() {
    const [addonCategory, setAddonCategory] = useState<AddonCategory>({
        name: "",
        is_required: false,
    } as AddonCategory);
    const [selectedMenuIds, setSelectedMenuIds] = useState<number[]>([]);

    const isDisabled =
        !addonCategory.name || !addonCategory.is_required || !selectedMenuIds;
    const currentBranchId = getselectedLocationId();

    const { fetchData, addonCategories, menus } = useContext(BackofficeContext);

    console.log(addonCategories);

    const updateAddonCategory = async () => {
        if (!addonCategory?.name) return;

        const response = await fetch(
            `${config.backofficeApiBaseUrl}/addon-categories`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(addonCategory),
            }
        );
        fetchData();
    };

    const deleteAddonCategory = async (addonCategoryId: number | undefined) => {
        if (!addonCategoryId) return;
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/addon-categories/${addonCategoryId}`,
            {
                method: "DELETE",
            }
        );

        fetchData();
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 300,
                m: "0 auto",
            }}
        >
            <h1 style={{ textAlign: "center" }}>
                Create a new add on Category
            </h1>
            <TextField
                label="Name"
                variant="outlined"
                sx={{ mb: 2 }}
                onChange={(e) => {
                    setAddonCategory({
                        ...addonCategory,
                        name: e.target.value,
                    });
                }}
            />
            <FormControl>
                <InputLabel id="demo-multiple-name-label">
                    Select menus
                </InputLabel>
                <Select
                    multiple
                    sx={{ mb: 2 }}
                    value={selectedMenuIds}
                    onChange={(evt) => {
                        const values = evt.target.value as [];
                        setSelectedMenuIds(values);
                    }}
                    renderValue={(values) => {
                        const selectedMenus = selectedMenuIds.map(
                            (selectedMenuId) => {
                                return menus.find(
                                    (menu) => menu.id === selectedMenuId
                                );
                            }
                        );
                        return selectedMenus
                            .map(
                                (selectedMenu) =>
                                    selectedMenu && selectedMenu.name
                            )
                            .join(", ");
                    }}
                >
                    {menus.map((menu) => (
                        <MenuItem key={menu.id} value={menu.id}>
                            <Checkbox
                                checked={
                                    menu.id && selectedMenuIds.includes(menu.id)
                                        ? true
                                        : false
                                }
                            />
                            {menu.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Box sx={{ display: "flex", mb: 2 }}>
                <Checkbox
                    disableRipple
                    color="success"
                    onChange={() => {
                        setAddonCategory({
                            ...addonCategory,
                            is_required: !addonCategory?.is_required,
                        });
                    }}
                />
                <p>is required</p>
            </Box>
            <Button
                variant="contained"
                onClick={updateAddonCategory}
                disabled={isDisabled ? true : false}
                sx={{
                    backgroundColor: "#4C4C6D",

                    color: "#E8F6EF",
                    mb: 2,

                    ":hover": {
                        bgcolor: "#1B9C85", // theme.palette.primary.main
                        color: "white",
                    },
                }}
            >
                Create
            </Button>
        </Box>
    );
}
