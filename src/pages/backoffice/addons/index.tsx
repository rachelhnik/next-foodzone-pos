import Layout from "@/components/Layout";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";
import { Box, Button, Dialog, DialogContent } from "@mui/material";
import { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TapasIcon from "@mui/icons-material/Tapas";
import NewAddons from "./create";
import ItemCard from "@/components/ItemCard";

const Addon = () => {
    const [open, setOpen] = useState(false);
    const {
        addons,

        menus,
        menuAddonCategories,
        branchesMenucategoriesMenus,
    } = useContext(BackofficeContext);
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
                    <Button
                        onClick={() => setOpen(true)}
                        variant="contained"
                        startIcon={<AddIcon />}
                        sx={{
                            backgroundColor: "#606C5D",
                            width: "fit-content",
                            color: "#E8F6EF",
                            mb: 2,

                            ":hover": {
                                bgcolor: "#7C9070", // theme.palette.primary.main
                                color: "white",
                            },
                        }}
                    >
                        New addon
                    </Button>
                </Box>
                <Box sx={{ display: "flex" }}>
                    {validAddons.map((addon) => (
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
                    <NewAddons />
                </DialogContent>
            </Dialog>
        </Layout>
    );
};
export default Addon;
