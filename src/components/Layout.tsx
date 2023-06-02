import React from "react";

import AppProvider, { AppContextType } from "../contexts/BackofficeContext";
import NavBar, { sidebarMenuItems } from "./Navbar";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
} from "@mui/material";
import Link from "next/link";

interface Props {
    title?: string;
    children: string | JSX.Element | JSX.Element[];
}

export default function Layout(props: Props) {
    return (
        <Box>
            <NavBar />
            <Box sx={{ display: "flex", height: "100vh" }}>
                <Box
                    sx={{
                        minWidth: 250,
                        backgroundColor: "#7C9070",
                    }}
                >
                    <List sx={{ width: 250, mt: 2 }}>
                        {sidebarMenuItems.slice(0, 5).map((item) => (
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
                <Box sx={{ p: 3, margin: "0 auto" }}>{props.children}</Box>
            </Box>
        </Box>
    );
}
