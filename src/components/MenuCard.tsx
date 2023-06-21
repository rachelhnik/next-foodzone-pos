import { BackofficeContext } from "@/contexts/BackofficeContext";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { menus as Menu } from "@prisma/client";
import Link from "next/link";
import { useContext } from "react";
interface Props {
    menu: Menu;
    href: string | object;
}

const MenuCard = ({ menu, href }: Props) => {
    return (
        <Box>
            <Link
                href={href}
                style={{
                    textDecoration: "none",
                    marginRight: "15px",
                    marginBottom: "20px",
                }}
            >
                <Card sx={{ width: 200, height: 250, mt: 2 }}>
                    <CardMedia
                        sx={{ height: 100 }}
                        image={
                            menu.asset_url !== null
                                ? menu.asset_url
                                : "undefined"
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {menu.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {menu.price}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Box>
    );
};

export default MenuCard;
