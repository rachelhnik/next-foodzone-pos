import Layout from "@/components/Layout";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CreateAddonCategory from "./create";
import ItemCard from "@/components/ItemCard";

const AddonCategories = () => {
    const { addonCategories, addons } = useContext(BackofficeContext);

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
                        New addon category
                    </Button>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
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
                    <CreateAddonCategory />
                </DialogContent>
            </Dialog>
        </Layout>
    );
};

export default AddonCategories;
