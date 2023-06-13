import { BackofficeContext } from "@/contexts/BackofficeContext";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { menus as Menu } from "@prisma/client";
import { useContext } from "react";
interface Props {
    menu: Menu;
}

const MenuCard = ({ menu }: Props) => {
    return (
        <Box>
            <Card sx={{ width: 200, height: 200 }}>
                <CardMedia
                    sx={{ height: 100 }}
                    image={
                        menu.asset_url !== null ? menu.asset_url : "undefined"
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {menu.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {menu.description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MenuCard;
