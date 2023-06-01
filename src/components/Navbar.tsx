import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import ClassIcon from "@mui/icons-material/Class";
import CategoryIcon from "@mui/icons-material/Category";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TapasIcon from "@mui/icons-material/Tapas";
import Link from "next/link";
import { BackofficeContext } from "../contexts/BackofficeContext";
import { useContext } from "react";
import { getAccessToken, getselectedLocationId } from "@/utils";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const drawerList = [
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
    const [state, setState] = React.useState({ open: false });
    const router = useRouter();
    const { data } = useSession();
    const { branches, townships } = useContext(BackofficeContext);
    const selectedLocationId = getselectedLocationId();
    const selectedBranch = branches.find(
        (branch) => String(branch.id) === selectedLocationId
    );

    const handleToggle = () => {
        setState({ open: !state.open });
    };

    const drawerContent = () => {
        return (
            <>
                <List sx={{ width: 250, mt: 2 }}>
                    {drawerList.slice(0, 5).map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            style={{
                                textDecoration: "none",
                                color: "transparent",
                            }}
                        >
                            <ListItem
                                disablePadding
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "#f8f9fa",
                                        borderRadius: "50px",
                                        boxShadow: "0 0 11px #dee2e6",
                                    },
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "#f8f9fa",
                                            borderRadius: "50px",
                                            boxShadow: "0 0 11px #f8f9fa",
                                        },
                                    }}
                                >
                                    <ListItemIcon sx={{ color: "#0077B6" }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        sx={{ color: "black" }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    {drawerList.slice(-1).map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            style={{ textDecoration: "none", color: "#313131" }}
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: "#0077B6" }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        sx={{ color: "black" }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </>
        );
    };
    const pageTitle = drawerList.find(
        (item) => item.link === router.pathname
    )?.label;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#0077B6" }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => {
                                setState({ open: true });
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            {selectedBranch
                                ? townships.find(
                                      (township) =>
                                          township.id ===
                                          selectedBranch.township_id
                                  )?.name
                                : ""}{" "}
                            / {selectedBranch ? selectedBranch.address : ""}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            {pageTitle}
                        </Typography>
                    </Box>
                    {data ? (
                        <Typography
                            onClick={() => signOut()}
                            sx={{ cursor: "pointer" }}
                        >
                            Sign out
                        </Typography>
                    ) : (
                        <span></span>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                open={state.open}
                onClose={handleToggle}
                PaperProps={{
                    elevation: 8,
                    sx: {
                        width: 240,

                        color: "black",
                    },
                }}
            >
                {drawerContent()}
            </Drawer>
        </Box>
    );
}
