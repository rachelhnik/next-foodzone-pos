import { OrderAppContext } from "@/contexts/OrderAppContext";
import { Box, Typography } from "@mui/material";
import { orders as Order } from "@prisma/client";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const ActiveOrder = () => {
    const router = useRouter();
    const query = router.query;
    const orderId = router.query.id as string;
    const { clientOrders } = useContext(OrderAppContext);
    const order = clientOrders.find((item) => item.id === Number(orderId));

    useEffect(() => {
        if (!order) {
            router.push({ pathname: "/order", query });
        }
    }, [order, query, router]);
    if (!order) return null;

    return (
        <Box>
            <Typography variant="h3">orderId: {order.id}</Typography>
        </Box>
    );
};

export default ActiveOrder;
