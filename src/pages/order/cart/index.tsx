import { OrderAppContext } from "@/contexts/OrderAppContext";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Order, Orderline } from "@/typings/Types";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useRouter } from "next/router";

const Cart = () => {
    const { orderlines, setOrderData } = useContext(OrderAppContext);
    const { ...orderdata } = useContext(OrderAppContext);
    const router = useRouter();
    const query = router.query;

    const removeFromCart = (orderline: Orderline) => {
        const orderlineToRemove = orderlines.filter(
            (item) => item.id !== orderline.id
        );
        setOrderData({ ...orderdata, orderlines: orderlineToRemove });
    };
    const editCart = (orderline: Orderline) => {
        const orderlineToEdit = orderlines.find(
            (item) => item.id === orderline.id
        );

        localStorage.setItem("orderlinetoedit", String(orderline.id));

        router.push({
            pathname: `/order/menus/${orderlineToEdit?.menu.id}`,
            query,
        });
    };
    return (
        <Box>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                Cart
            </Typography>
            {orderlines.map((orderline, i) => (
                <Box
                    key={i}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "auto",
                        mt: 4,
                        width: 300,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2,
                            width: "100%",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Avatar
                                sx={{
                                    width: 25,
                                    height: 25,
                                    mr: 1,
                                    bgcolor: "green",
                                }}
                            >
                                {orderline.quantity}
                            </Avatar>
                            <Typography variant="h5">
                                {orderline.menu.name}
                            </Typography>
                        </Box>
                        <Typography variant="h5">
                            {orderline.menu.price}
                        </Typography>
                    </Box>
                    {orderline.addons.map((addon) => (
                        <Box
                            key={addon.id}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",

                                width: "100%",
                            }}
                        >
                            <Typography>{addon.name}</Typography>
                            <Typography>{addon.price}</Typography>
                        </Box>
                    ))}
                    <Box sx={{ display: "flex" }}>
                        <IconButton onClick={() => removeFromCart(orderline)}>
                            {" "}
                            <DeleteForeverIcon />
                        </IconButton>
                        <IconButton onClick={() => editCart(orderline)}>
                            {" "}
                            <ModeEditIcon />
                        </IconButton>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};
export default Cart;
