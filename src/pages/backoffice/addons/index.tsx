import Layout from "@/components/Layout";
import { getselectedLocationId } from "@/utils";
import { Box, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import TapasIcon from "@mui/icons-material/Tapas";
import ItemCard from "@/components/ItemCard";
import { useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";

import OpenCreateButton from "@/components/buttons/OpenCreateButton";
import AddonCreateDialog from "@/components/create/CraeteAddon";

const Addon = () => {
    const [open, setOpen] = useState(false);
    const { addons, menuAddonCategories, branchesMenucategoriesMenus } =
        useAppSelector(appData);
    const selectedBranchId = parseInt(getselectedLocationId() as string, 10);
    const validMenuIds = branchesMenucategoriesMenus
        .filter((item) => item.branch_id === selectedBranchId)
        .map((item) => item.menu_id);

    const validAddonCategoriesIds = menuAddonCategories
        .filter((item) => validMenuIds.includes(item.menu_id))
        .map((item) => item.addoncategory_id) as number[];
    const validAddons = addons.filter((addon) =>
        validAddonCategoriesIds.includes(addon.addon_categories_id as number)
    );

    return (
        <Layout>
            <Box sx={{ width: "900px" }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <OpenCreateButton setOpen={setOpen} label="New addon" />
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {addons.map((addon) => (
                        <ItemCard
                            key={addon.id}
                            icon={<TapasIcon />}
                            href={`/backoffice/addons/${addon.id}`}
                            title={addon.name}
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
                        maxWidth: 280,
                        m: "0 auto",
                    }}
                >
                    <AddonCreateDialog setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </Layout>
    );
};
export default Addon;
