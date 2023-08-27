import React, { useContext } from "react";

import NavBar from "./Navbar";
import { Box } from "@mui/material";

import { Sidebar } from "./Sidebar";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { useAppSelector } from "@/store/hooks";

interface Props {
    title?: string;
    children: string | JSX.Element | JSX.Element[];
}

export default function Layout(props: Props) {
    const { isLoading } = useAppSelector((state) => state.app);
    if (isLoading) return null;
    return (
        <Box>
            <NavBar />
            <Box sx={{ display: "flex", height: "100vh" }}>
                <Sidebar />
                <Box
                    sx={{
                        p: 3,
                        ml: 8,
                        overflow: "hidden",
                        overflowY: "scroll",
                        "&::-webkit-scrollbar": {
                            display: "none", // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
                        },
                        "&-ms-overflow-style:": {
                            display: "none", // Hide the scrollbar for IE
                        },
                    }}
                >
                    {props.children}
                </Box>
            </Box>
        </Box>
    );
}
