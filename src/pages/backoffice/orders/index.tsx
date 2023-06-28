import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "@/components/Layout";
import BackofficeProvider, {
    BackofficeContext,
} from "@/contexts/BackofficeContext";
import { useContext } from "react";

const Orders = () => {
    const { orders, orderlines } = useContext(BackofficeContext);
    return (
        <Layout title="Orders">
            <TableContainer
                component={Paper}
                sx={{ maxWidth: 800, margin: "0 auto" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order Id</TableCell>
                            <TableCell align="right">Table Id</TableCell>
                            <TableCell align="right">Paid</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.id}
                                </TableCell>
                                <TableCell align="right">
                                    {item.table_id}
                                </TableCell>
                                <TableCell align="right">
                                    {item.is_paid ? "Yes" : "No"}
                                </TableCell>
                                <TableCell align="right">
                                    {item.order_status}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
};

export default Orders;
