import React, { useContext } from "react";

import NavBar from "./Navbar";
import { Box } from "@mui/material";

import { Sidebar } from "./Sidebar";
import { BackofficeContext } from "@/contexts/BackofficeContext";

interface Props {
    title?: string;
    children: string | JSX.Element | JSX.Element[];
}

export default function Layout(props: Props) {
    const { isLoading } = useContext(BackofficeContext);

    if (isLoading) return null;
    return (
        <Box>
            <NavBar />
            <Box sx={{ display: "flex", height: "100vh" }}>
                <Sidebar />
                <Box sx={{ p: 3, ml: 8 }}>{props.children}</Box>
            </Box>
        </Box>
    );
}
