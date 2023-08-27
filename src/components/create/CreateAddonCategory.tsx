import {
    Box,
    TextField,
    Checkbox,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    FormControlLabel,
    Switch,
} from "@mui/material";
import { useContext, useState } from "react";

import type { addon_categories as AddonCategory } from "@prisma/client";
import { config } from "../../config/Config";
import { BackofficeContext } from "../../contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import { addAddonCategory } from "@/store/slices/addonCategorySlice";
import { fetchMenuAddoncategories } from "@/store/slices/menuAddoncategorySlice";
import CreateButton from "../buttons/CreateButton";

interface Props {
    setOpen: (data: boolean) => void;
}

const CreateAddonCategoryDialog = ({ setOpen }: Props) => {
    const [addonCategory, setAddonCategory] = useState<AddonCategory>({
        name: "",
        is_required: false,
    } as AddonCategory);
    const [selectedMenuIds, setSelectedMenuIds] = useState<number[]>([]);
    const isDisabled = !addonCategory.name || !selectedMenuIds.length;
    const { menus } = useAppSelector(appData);
    const dispatch = useAppDispatch();

    const createAddonCategory = async () => {
        if (!addonCategory?.name) return;

        const response = await fetch(`${config.apiBaseUrl}/addon-categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                addonCategory: addonCategory,
                selectedMenuIds: selectedMenuIds,
            }),
        });
        if (response.ok) {
            const newAddonCategoryData = await response.json();
            dispatch(addAddonCategory(newAddonCategoryData));
            dispatch(fetchMenuAddoncategories(selectedMenuIds));
            setOpen(false);
        }
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

            <FormControlLabel
                sx={{ mt: 2 }}
                control={
                    <Switch
                        checked={addonCategory.is_required}
                        onChange={(evt) =>
                            setAddonCategory({
                                ...addonCategory,
                                is_required: evt.target.checked,
                            })
                        }
                    />
                }
                label="required"
            />
            <CreateButton
                isDisabled={isDisabled}
                createItem={createAddonCategory}
            />
        </Box>
    );
};

export default CreateAddonCategoryDialog;
