import { Box, Button, Dialog, DialogContent } from "@mui/material";
import Layout from "../../../components/Layout";
import { useContext, useState } from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { BackofficeContext } from "../../../contexts/BackofficeContext";
import AddIcon from "@mui/icons-material/Add";
import { getselectedLocationId } from "@/utils";
import CreateMenu from "./create";
import ItemCard from "@/components/ItemCard";
import { useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";

const Menus = () => {
    const [open, setOpen] = useState(false);
    const branchId = getselectedLocationId();

    const { menus, branchesMenucategoriesMenus } = useAppSelector(appData);
    const validMenusIds = branchesMenucategoriesMenus
        .filter((data) => String(data.branch_id) === branchId)
        .map((data) => data.menu_id);

    const filteredMenus = menus
        .filter((menu) => menu.id && validMenusIds.includes(menu.id))
        .flatMap((data) => data);

    return (
        <Layout title="Menus">
            <Box
                sx={{
                    width: "900px",
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 auto",
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
                        New menu
                    </Button>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {filteredMenus.map((menu) => (
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                mr: 2,
                            }}
                            key={menu.id}
                        >
                            <ItemCard
                                key={menu.id}
                                icon={<RestaurantMenuIcon />}
                                href={`/backoffice/menus/${menu.id}`}
                                title={menu.name}
                            />
                        </Box>
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

                        m: "0 auto",
                    }}
                >
                    <CreateMenu />
                </DialogContent>
            </Dialog>
        </Layout>
    );
};

export default Menus;
