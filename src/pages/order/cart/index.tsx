import { OrderAppContext } from "@/contexts/OrderAppContext";
import {
    Avatar,
    Box,
    IconButton,
    Typography,
    Button,
    Divider,
} from "@mui/material";
import { useContext } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CartItem } from "@/typings/Types";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useRouter } from "next/router";
import { config } from "@/config/Config";
import { getTotalPrice } from "@/utils";

const Cart = () => {
    const { cart, setOrderData, fetchData } = useContext(OrderAppContext);
    const { ...orderdata } = useContext(OrderAppContext);
    const router = useRouter();
    const query = router.query;

    const removeFromCart = (cartItem: CartItem) => {
        const cartAfterRemoval = cart.filter((item) => item.id !== cartItem.id);
        setOrderData({ ...orderdata, cart: cartAfterRemoval });
    };
    const editCart = (cartItem: CartItem) => {
        const cartItemToEdit = cart.find((item) => item.id === cartItem.id);

        localStorage.setItem("cartItemtoedit", cartItem.id);

        router.push({
            pathname: `/order/updateCartMenus/${cartItemToEdit?.menu.id}`,
            query,
        });
    };

    const confirmOrder = async () => {
        const { branchId, tableId } = query;
        if (!branchId || !tableId || !cart.length) alert("Please order menus");
        const response = await fetch(
            `${config.apiBaseUrl}/confirm?branchId=${branchId}&tableId=${tableId}`,
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ cart }),
            }
        );
        const responseJSON = await response.json();
        const order = responseJSON.order;
        fetchData();
        router.push({ pathname: `/order/activeOrder/${order.id}`, query });
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                Cart
            </Typography>
            {cart.map((cartitem, i) => (
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
                                {cartitem.quantity}
                            </Avatar>
                            <Typography variant="h5">
                                {cartitem.menu.name}
                            </Typography>
                        </Box>
                        <Typography variant="h5">
                            {cartitem.menu.price}
                        </Typography>
                    </Box>
                    {cartitem.addons.map((addon) => (
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

                    <Box sx={{ display: "flex", alignSelf: "flex-end" }}>
                        <IconButton onClick={() => removeFromCart(cartitem)}>
                            {" "}
                            <DeleteForeverIcon sx={{ color: "red" }} />
                        </IconButton>
                        <IconButton onClick={() => editCart(cartitem)}>
                            {" "}
                            <ModeEditIcon sx={{ color: "#1565C0" }} />
                        </IconButton>
                    </Box>
                </Box>
            ))}
            <Divider sx={{ width: "40%", my: 2 }} />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 300,
                }}
            >
                <Typography>Total Price</Typography>
                <Typography>{getTotalPrice(cart)}</Typography>
            </Box>
            <Button variant="contained" sx={{ mt: 2 }} onClick={confirmOrder}>
                Confirm Order
            </Button>
        </Box>
    );
};
export default Cart;
