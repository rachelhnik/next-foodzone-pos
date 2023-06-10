import Layout from "@/components/Layout";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Switch,
    TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { config } from "@/config/Config";
import { addons, menus } from "@prisma/client";
import { getselectedLocationId } from "@/utils";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AddonCategoryDetail = () => {
    const {
        addonCategories,
        addons,
        menuAddonCategories,
        branchesMenucategoriesMenus,
        menus,
        fetchData,
    } = useContext(BackofficeContext);
    const router = useRouter();
    const addonCategoryId = parseInt(router.query.id as string, 10);
    const selectedBranchId = parseInt(getselectedLocationId() as string, 10);
    const currentAddonCategory = addonCategories.find(
        (addoncat) => addoncat.id === addonCategoryId
    );
    const selectedAddons = addons.filter(
        (addon) => addon.addon_categories_id === currentAddonCategory?.id
    );
    const [newSelectedAddons, setNewSelectedAddons] =
        useState<addons[]>(selectedAddons);

    const [newAddonCategory, setNewAddonCategory] = useState({
        name: currentAddonCategory?.name,
        is_required: currentAddonCategory?.is_required,
        selectedAddons: newSelectedAddons,
    });

    const updateAddonCategory = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/addon-categories/${addonCategoryId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newAddonCategory),
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
                }}
            >
                <TextField
                    defaultValue={newAddonCategory.name}
                    fullWidth
                    sx={{ mb: 2 }}
                    onChange={(evt) =>
                        setNewAddonCategory({
                            ...newAddonCategory,
                            name: evt.target.value,
                        })
                    }
                />
                <Autocomplete
                    readOnly
                    sx={{ width: 300, mb: 2 }}
                    multiple
                    options={addons}
                    defaultValue={selectedAddons}
                    disableCloseOnSelect
                    isOptionEqualToValue={(option, value) =>
                        option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => (
                        <TextField {...params} label="selected addons" />
                    )}
                    onChange={(evt, values) => {
                        setNewSelectedAddons(values),
                            setNewAddonCategory({
                                ...newAddonCategory,
                                selectedAddons: values,
                            });
                    }}
                    renderOption={(props, option) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={
                                    addons.find((menu) => menu.id === option.id)
                                        ? true
                                        : false
                                }
                            />
                            {option.name}
                        </li>
                    )}
                />

                <FormControlLabel
                    control={
                        <Switch
                            defaultChecked={currentAddonCategory?.is_required}
                            onChange={(evt) =>
                                setNewAddonCategory({
                                    ...newAddonCategory,
                                    is_required: evt.target.checked,
                                })
                            }
                        />
                    }
                    label="required"
                />
                <Button
                    variant="contained"
                    onClick={updateAddonCategory}
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

export default AddonCategoryDetail;
