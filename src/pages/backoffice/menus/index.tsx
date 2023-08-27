import { Box, Dialog, DialogContent } from "@mui/material";
import Layout from "../../../components/Layout";
import { useState } from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { getselectedLocationId } from "@/utils";
import ItemCard from "@/components/ItemCard";
import { useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import CreateMenuDialog from "@/components/create/CreateMenu";
import OpenCreateButton from "@/components/buttons/OpenCreateButton";

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
                    <OpenCreateButton setOpen={setOpen} label="New menu" />
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
                                imageUrl={menu.asset_url}
                                href={`/backoffice/menus/${menu.id}`}
                                title={menu.name}
                                subtitle={menu.description || ""}
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
                    <CreateMenuDialog setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </Layout>
    );
};

export default Menus;
