import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import SettingsIcon from "@mui/icons-material/Settings";
import ClassIcon from "@mui/icons-material/Class";
import CategoryIcon from "@mui/icons-material/Category";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TapasIcon from "@mui/icons-material/Tapas";
import { BackofficeContext } from "../contexts/BackofficeContext";
import { useContext } from "react";
import { getselectedLocationId } from "@/utils";
import { signOut, useSession } from "next-auth/react";

export const sidebarMenuItems = [
    {
        id: 1,
        icon: <LocalMallIcon />,
        label: "Orders",
        link: "/backoffice/orders",
    },
    {
        id: 2,
        icon: <RestaurantMenuIcon />,
        label: "Menu",
        link: "/backoffice/menus",
    },
    {
        id: 3,
        icon: <CategoryIcon />,
        label: "Menu Category",
        link: "/backoffice/menu-categories",
    },
    {
        id: 4,
        icon: <TapasIcon />,
        label: "Add on",
        link: "/backoffice/addons",
    },
    {
        id: 5,
        icon: <ClassIcon />,
        label: "Add on Category",
        link: "/backoffice/addon-categories",
    },

    {
        id: 6,
        icon: <SettingsIcon />,
        label: "Settings",
        link: "/backoffice/settings",
    },
];
interface Props {
    title?: string;
}
export default function NavBar({ title }: Props) {
    const { data } = useSession();
    const { branches, townships } = useContext(BackofficeContext);
    const selectedLocationId = getselectedLocationId();
    const selectedBranch = branches.find(
        (branch) => String(branch.id) === selectedLocationId
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ bgcolor: "#7C9070", borderBottom: "1px solid #FEE8B0" }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {data ? (
                        <>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography
                                    component="div"
                                    sx={{ flexGrow: 1, color: "#FEE8B0" }}
                                >
                                    {selectedBranch
                                        ? townships.find(
                                              (township) =>
                                                  township.id ===
                                                  selectedBranch.township_id
                                          )?.name
                                        : ""}{" "}
                                    <br></br>{" "}
                                    {selectedBranch
                                        ? selectedBranch.address
                                        : ""}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    component="div"
                                    sx={{ flexGrow: 1, color: "#FEE8B0" }}
                                >
                                    FOODZONE POS
                                </Typography>
                            </Box>

                            <Typography
                                onClick={() => signOut()}
                                sx={{ cursor: "pointer", color: "#FEE8B0" }}
                            >
                                Sign out
                            </Typography>
                        </>
                    ) : (
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, textAlign: "center" }}
                        >
                            Happy POS
                        </Typography>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
