import React from "react";

import NavBar from "./Navbar";
import { Box } from "@mui/material";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

interface Props {
    title?: string;
    children: string | JSX.Element | JSX.Element[];
}

export default function Layout(props: Props) {
    return (
        <Box>
            <NavBar />
            <Box sx={{ display: "flex", height: "100vh" }}>
                <Sidebar />
                <Box sx={{ p: 3, margin: "0 auto" }}>{props.children}</Box>
            </Box>
        </Box>
    );
}
