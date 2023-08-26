import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
    icon?: ReactNode;
    title?: string;
    href?: string;
    subtitle?: string;
    imageUrl?: string | null;
}
//
const ItemCard = ({ icon, title, href, subtitle, imageUrl }: Props) => {
    if (href) {
        return (
            <Link
                passHref
                href={href}
                style={{ textDecoration: "none", color: "#000000" }}
            >
                <Paper
                    elevation={2}
                    sx={{
                        width: 170,
                        height: 170,
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        m: 2,
                    }}
                >
                    {imageUrl ? (
                        <>
                            <Image
                                src={imageUrl}
                                height={150}
                                width={150}
                                alt=""
                            />

                            <Box sx={{ display: "flex", mt: 1 }}>
                                {icon}
                                <Typography
                                    sx={{ color: "#4C4C6D", fontWeight: "700" }}
                                >
                                    {title}
                                </Typography>
                            </Box>
                        </>
                    ) : (
                        <>
                            {icon}

                            <Typography
                                sx={{ color: "#4C4C6D", fontWeight: "700" }}
                            >
                                {title}
                            </Typography>
                        </>
                    )}

                    {subtitle && (
                        <Typography sx={{ color: "#4C4C6D", fontSize: 14 }}>
                            {subtitle}
                        </Typography>
                    )}
                </Paper>
            </Link>
        );
    }

    return (
        <Paper
            elevation={2}
            sx={{
                width: 170,
                height: 170,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                m: 2,
            }}
        >
            {icon}
            {imageUrl ? (
                <Image src={imageUrl} width={200} height={200} alt="tabel" />
            ) : (
                <></>
            )}
            <Typography sx={{ color: "#4C4C6D", fontWeight: "700" }}>
                {title}
            </Typography>
            {subtitle && (
                <Typography sx={{ color: "#4C4C6D", fontSize: 14 }}>
                    {subtitle}
                </Typography>
            )}
        </Paper>
    );
};

export default ItemCard;
