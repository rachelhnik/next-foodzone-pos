import Layout from "@/components/Layout";
import { Box, Dialog, DialogContent } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import { useState } from "react";

import ItemCard from "@/components/ItemCard";
import { useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";

import OpenCreateButton from "@/components/buttons/OpenCreateButton";
import CreateAddonCategoryDialog from "@/components/create/createAddonCategory";

const AddonCategories = () => {
    const { addonCategories, addons } = useAppSelector(appData);

    const [open, setOpen] = useState(false);

    const getAddonsCount = (addonCategoryId?: number) => {
        if (!addonCategoryId) return 0;
        return addons.filter(
            (addon) => addon.addon_categories_id === addonCategoryId
        ).length;
    };

    return (
        <Layout>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "900px",
                }}
            >
                <Box
                    sx={{
                        right: 10,
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <OpenCreateButton
                        setOpen={setOpen}
                        label="New addon category"
                    />
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {addonCategories.map((addoncat) => (
                        <ItemCard
                            key={addoncat.id}
                            icon={<ClassIcon />}
                            href={`/backoffice/addon-categories/${addoncat.id}`}
                            title={addoncat.name}
                            subtitle={`${String(
                                getAddonsCount(addoncat.id)
                            )} addons `}
                        />
                    ))}
                </Box>
            </Box>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 250,
                        m: "0 auto",
                    }}
                >
                    <CreateAddonCategoryDialog setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </Layout>
    );
};

export default AddonCategories;
