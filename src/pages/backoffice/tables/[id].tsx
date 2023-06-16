import Layout from "@/components/Layout";
import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";
import { Box, TextField, Button } from "@mui/material";
import { fetchData } from "next-auth/client/_utils";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const TableDetail = () => {
    const router = useRouter();
    const tableId = router.query.id as string;
    const selectedLocationId = getselectedLocationId() as string;
    const { tables, fetchData } = useContext(BackofficeContext);
    const table = tables.find((table) => table.id === Number(tableId));
    const [tableName, setTableName] = useState(table?.name);

    const updateTable = async () => {
        await fetch(`${config.backofficeApiBaseUrl}/tables`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ tableId, name: tableName }),
        });
        fetchData();
    };

    return (
        <Layout>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                    defaultValue={tableName}
                    sx={{ mb: 2 }}
                    onChange={(evt) => setTableName(evt.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={updateTable}
                    sx={{ width: "fit-content", mt: 3 }}
                >
                    Update
                </Button>
            </Box>
        </Layout>
    );
};

export default TableDetail;
