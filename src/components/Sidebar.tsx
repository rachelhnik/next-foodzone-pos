import SettingsIcon from "@mui/icons-material/Settings";
import ClassIcon from "@mui/icons-material/Class";
import CategoryIcon from "@mui/icons-material/Category";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TapasIcon from "@mui/icons-material/Tapas";
import PinDropIcon from "@mui/icons-material/PinDrop";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import Link from "next/link";

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
        icon: <PinDropIcon />,
        label: "Branches",
        link: "/backoffice/branches",
    },

    {
        id: 7,
        icon: <SettingsIcon />,
        label: "Settings",
        link: "/backoffice/settings",
    },
];

export const Sidebar = () => {
    return (
        <Box
            sx={{
                minWidth: 250,
                backgroundColor: "#7C9070",
            }}
        >
            <List sx={{ width: 250, mt: 2 }}>
                {sidebarMenuItems.slice(0, 6).map((item) => (
                    <Link
                        key={item.id}
                        href={item.link}
                        style={{
                            textDecoration: "none",
                            color: "#313131",
                        }}
                    >
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: "#FEE8B0" }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.label}
                                    sx={{ color: "#FEE8B0" }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {sidebarMenuItems.slice(-1).map((item) => (
                    <Link
                        key={item.id}
                        href={item.link}
                        style={{
                            textDecoration: "none",
                            color: "#313131",
                        }}
                    >
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: "#FEE8B0" }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.label}
                                    sx={{ color: "#FEE8B0" }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );
};