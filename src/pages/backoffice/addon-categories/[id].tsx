import Layout from "@/components/Layout";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AddonCategoryDetail = () => {
    const { addonCategories, addons, menuAddonCategories, menus } =
        useContext(BackofficeContext);
    const router = useRouter();
    const addonCategoryId = parseInt(router.query.id as string, 10);
    const currentAddonCategory = addonCategories.find(
        (addoncat) => addoncat.id === addonCategoryId
    );
    const selectedAddons = addons.filter(
        (addon) => addon.addon_categories_id === currentAddonCategory?.id
    );

    const selectedMenusIds = menuAddonCategories
        .filter((item) => item.addoncategory_id === addonCategoryId)
        .map((data) => data.menu_id);
    const selectedMenus = menus.filter((menu) =>
        selectedMenusIds.includes(menu?.id)
    );

    const [newAddonCategory, setNewAddonCategory] = useState({
        name: currentAddonCategory?.name,
        is_required: currentAddonCategory?.is_required,
    });

    const updateAddonCategory = () => {
        console.log(newAddonCategory);
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
                    sx={{ width: 300, mb: 2 }}
                    multiple
                    options={addons}
                    defaultValue={selectedAddons}
                    disableCloseOnSelect
                    isOptionEqualToValue={(option, value) =>
                        option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={
                                    addons.find(
                                        (addon) => addon.id === option.id
                                    )
                                        ? true
                                        : false
                                }
                            />
                            {option.name}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField {...params} label="selected addons" />
                    )}
                />
                <Autocomplete
                    sx={{ width: 300 }}
                    multiple
                    options={menus}
                    defaultValue={selectedMenus}
                    disableCloseOnSelect
                    isOptionEqualToValue={(option, value) =>
                        option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={
                                    menus.find((menu) => menu.id === option.id)
                                        ? true
                                        : false
                                }
                            />
                            {option.name}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField {...params} label="selected menus" />
                    )}
                />
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{ ml: 2 }}
                                disableRipple
                                defaultChecked={
                                    currentAddonCategory?.is_required
                                }
                                onChange={(e) => {
                                    setNewAddonCategory({
                                        ...newAddonCategory,
                                        is_required: e.target.checked,
                                    });
                                }}
                            />
                        }
                        label="is required"
                    />
                </FormGroup>
                <Button
                    variant="contained"
                    onClick={updateAddonCategory}
                    sx={{ mt: 2, width: 200, alignSelf: "center" }}
                >
                    Update
                </Button>
            </Box>
        </Layout>
    );
};

export default AddonCategoryDetail;
