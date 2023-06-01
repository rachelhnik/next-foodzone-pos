import React from "react";

import AppProvider, { AppContextType } from "../contexts/BackofficeContext";
import NavBar from "./Navbar";

interface Props {
    title?: string;
    children: string | JSX.Element | JSX.Element[];
}

export default function Layout(props: Props) {
    return (
        <div>
            <NavBar title={props.title} />

            <main>{props.children}</main>
        </div>
    );
}
