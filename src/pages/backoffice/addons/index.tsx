import Layout from "@/components/Layout";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Link,
    Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CreateAddonCategory from "../addon-categories/create";
import NewAddons from "./create";

const Addon = () => {
    const [open, setOpen] = useState(false);
    const {
        addons,
        addonCategories,
        fetchData,
        menus,
        menuAddonCategories,
        branchesMenucategoriesMenus,
    } = useContext(BackofficeContext);
    const selectedBranchId = parseInt(getselectedLocationId() as string, 10);
    const validMenuIds = branchesMenucategoriesMenus
        .filter((item) => item.branch_id === selectedBranchId)
        .map((item) => item.menu_id);
    const validMenus = menus.filter((menu) => validMenuIds.includes(menu.id));

    const validAddonCategoriesIds = menuAddonCategories
        .filter((item) => validMenuIds.includes(item.menu_id))
        .map((item) => item.addoncategory_id) as number[];
    console.log(validAddonCategoriesIds);
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
                        <Link
                            key={addon.id}
                            href={`/backoffice/addons/${addon.id}`}
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <Box sx={{ textAlign: "center", mr: 4 }}>
                                <Box
                                    sx={{
                                        width: "120px",
                                        height: "120px",
                                        borderRadius: 2,
                                        border: "2px solid #EBEBEB",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography sx={{ mt: 1 }}>
                                        {addon.name}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
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
