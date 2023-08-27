import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../asset/logo.png";

import { BackofficeContext } from "../contexts/BackofficeContext";
import { useContext } from "react";
import { getselectedLocationId } from "@/utils";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

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
                position="fixed"
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
                            <Box>
                                <Image
                                    alt="logo"
                                    width={200}
                                    height={30}
                                    src={logo}
                                />
                            </Box>
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
                            <Typography
                                onClick={() => signOut()}
                                sx={{ cursor: "pointer", color: "#FEE8B0" }}
                            >
                                Sign out
                            </Typography>
                        </>
                    ) : (
                        <Image alt="logo" width={100} height={100} src={logo} />
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
