import Layout from "@/components/Layout";

import {
    Autocomplete,
    Box,
    FormControlLabel,
    Switch,
    TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import { config } from "@/config/Config";
import { addons as Addon } from "@prisma/client";
import { getselectedLocationId } from "@/utils";
import DeleteDialog from "@/components/DeleteDialog";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import {
    deleteAddonCategory,
    updateAddonCategories,
} from "@/store/slices/addonCategorySlice";
import { fetchMenuAddoncategories } from "@/store/slices/menuAddoncategorySlice";
import DeleteButton from "@/components/buttons/DeleteButton";
import UpdateButton from "@/components/buttons/UpdateButton";
import TextFieldComponent from "@/components/textfields/TextFieldComponent";

const AddonCategoryDetail = () => {
    const { addonCategories, addons, menuAddonCategories } =
        useAppSelector(appData);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const addonCategoryId = parseInt(router.query.id as string, 10);
    const selectedBranchId = parseInt(getselectedLocationId() as string, 10);
    const currentAddonCategory = addonCategories.find(
        (addoncat) => addoncat.id === addonCategoryId
    );
    const selectedAddons = addons.filter(
        (addon) => addon.addon_categories_id === currentAddonCategory?.id
    );
    const [newSelectedAddons, setNewSelectedAddons] =
        useState<Addon[]>(selectedAddons);
    const menuIds = menuAddonCategories
        .filter((data) => data.addoncategory_id === addonCategoryId)
        .map((data) => data.menu_id);

    const [open, setOpen] = useState(false);

    const [newAddonCategory, setNewAddonCategory] = useState({
        name: currentAddonCategory?.name,
        is_required: currentAddonCategory?.is_required,
        selectedAddons: newSelectedAddons,
    });

    const updateAddonCategory = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/addon-categories/${addonCategoryId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newAddonCategory),
            }
        );
        const updatedAddonCategory = await response.json();
        dispatch(updateAddonCategories(updatedAddonCategory));
        router.push("/backoffice/addon-categories");
    };

    const handleRemoveAddonCategory = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/addon-categories/${addonCategoryId}`,
            {
                method: "DELETE",
            }
        );
        const deletedAddoncategory = await response.json();
        dispatch(deleteAddonCategory(deletedAddoncategory));
        dispatch(fetchMenuAddoncategories(menuIds));
        router.push("/backoffice/addon-categories");
    };

    const handleDelete = () => {
        setOpen(true);
    };
    return (
        <Layout>
            <Box sx={{ width: 900 }}>
                <Box
                    sx={{
                        mt: 7,
                        width: 300,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <TextFieldComponent
                        label="Name"
                        defaultValue={newAddonCategory.name}
                        handleOnChange={(evt) =>
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
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                defaultChecked={
                                    currentAddonCategory?.is_required
                                }
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
                    <UpdateButton updateItem={updateAddonCategory} />
                    <DeleteButton
                        handleDelete={handleDelete}
                        title="Addon Category"
                    />
                    <DeleteDialog
                        title="Are you sure you want to delete this addon?"
                        open={open}
                        setOpen={setOpen}
                        callback={handleRemoveAddonCategory}
                    />
                </Box>
            </Box>
        </Layout>
    );
};

export default AddonCategoryDetail;
