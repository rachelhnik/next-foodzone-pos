import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "@/components/Layout";
import { useState } from "react";
import { getMenusByOrderId, getselectedLocationId } from "@/utils";
import {
    orders as Order,
    OrderStatus,
    orderlines as Orderline,
} from "@prisma/client";
import {
    Box,
    Collapse,
    FormControl,
    IconButton,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { config } from "@/config/Config";
import { useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";

interface Props {
    order: Order;
    orderlines: Orderline[];
}

const Row = ({ order, orderlines }: Props) => {
    const [open, setOpen] = useState(false);
    const { menus } = useAppSelector(appData);
    const orderId = order.id;

    const menusRelatedToOrder = getMenusByOrderId(orderId, orderlines, menus);

    const handleStatusChange = async (
        e: SelectChangeEvent<"PENDING" | "PREPARING" | "COMPLETE" | "REJECTED">,
        menuId: number | undefined
    ) => {
        const response = await fetch(`${config.apiBaseUrl}/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: e.target.value, menuId: menuId }),
        });
    };

    const renderMenusForOrders = (id: number) => {
        return (
            <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="purchases">
                    <TableHead>
                        <TableRow>
                            <TableCell>Menu Name</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Order Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {menusRelatedToOrder.map((menu) => (
                            <TableRow key={menu.id}>
                                <TableCell>{menu.name}</TableCell>
                                <TableCell>
                                    {
                                        orderlines.find(
                                            (item: Orderline) =>
                                                item.menus_id === menu.id
                                        )?.quantity
                                    }
                                </TableCell>
                                <TableCell>
                                    <FormControl
                                        sx={{ width: "50%" }}
                                        variant="standard"
                                    >
                                        <Select
                                            value={
                                                orderlines.find(
                                                    (item: Orderline) =>
                                                        item.menus_id ===
                                                        menu.id
                                                )?.order_status
                                            }
                                            label="Status"
                                            onChange={(e) => {
                                                const menuId = orderlines.find(
                                                    (item: Orderline) =>
                                                        item.menus_id ===
                                                        menu.id
                                                )?.menus_id;
                                                handleStatusChange(e, menuId);
                                            }}
                                        >
                                            <MenuItem
                                                value={OrderStatus.PENDING}
                                            >
                                                Pending
                                            </MenuItem>
                                            <MenuItem
                                                value={OrderStatus.PREPARING}
                                            >
                                                Preparing
                                            </MenuItem>
                                            <MenuItem
                                                value={OrderStatus.COMPLETE}
                                            >
                                                Complete
                                            </MenuItem>
                                            <MenuItem
                                                value={OrderStatus.REJECTED}
                                            >
                                                Reject
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        );
    };
    return (
        <>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {order.id}
                </TableCell>
                <TableCell align="right">
                    {menusRelatedToOrder.length}
                </TableCell>

                <TableCell align="right">{order.table_id}</TableCell>
                <TableCell align="right">
                    {order.is_paid ? "Yes" : "No"}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {renderMenusForOrders(order.id)}
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

const Orders = () => {
    const { orders, orderlines } = useAppSelector(appData);
    const currentBranchId = getselectedLocationId();
    const currentBranchOrders = orders.filter(
        (item) => item.branch_id === Number(currentBranchId)
    );
    return (
        <Layout title="Orders">
            <TableContainer
                component={Paper}
                sx={{ maxWidth: 1000, margin: "0 auto" }}
            >
                <Table sx={{ minWidth: 900 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Order Id</TableCell>
                            <TableCell align="right">Number of Menus</TableCell>
                            <TableCell align="right">Table Id</TableCell>
                            <TableCell align="right">Paid</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentBranchOrders.map((order) => (
                            <Row
                                key={order.id}
                                order={order}
                                orderlines={orderlines}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
};

export default Orders;
