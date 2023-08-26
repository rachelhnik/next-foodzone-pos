import Layout from "@/components/Layout";
import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";
import { Box, TextField, Button } from "@mui/material";
import { fetchData } from "next-auth/client/_utils";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { tables } from "@prisma/client";
import DeleteDialog from "@/components/DeleteDialog";
import { table } from "console";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import { deleteTable, updateTables } from "@/store/slices/tableSlice";
import DeleteButton from "@/components/buttons/DeleteButton";
import UpdateButton from "@/components/buttons/UpdateButton";

const TableDetail = () => {
    const router = useRouter();
    const tableId = router.query.id as string;
    const [open, setOpen] = useState(false);
    const selectedLocationId = getselectedLocationId() as string;
    const { tables } = useAppSelector(appData);
    const dispatch = useAppDispatch();
    const currentTable = tables.find((table) => table.id === Number(tableId));
    const [tableName, setTableName] = useState(currentTable?.name);
    const [tableToRemove, setTableToRemove] = useState<tables>();
    const updateTable = async () => {
        const response = await fetch(`${config.apiBaseUrl}/tables/${tableId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: tableName }),
        });
        if (response.ok) {
            const updatedTableData = await response.json();
            dispatch(updateTables(updatedTableData));
            router.push("/backoffice/tables");
        }
    };
    const handleRemoveTable = async () => {
        const response = await fetch(`${config.apiBaseUrl}/tables/${tableId}`, {
            method: "DELETE",
        });
        if (response.ok) {
            const deletedTableData = await response.json();
            dispatch(deleteTable(deletedTableData));
            router.push("/backoffice/tables");
        }
    };

    const handleDelete = () => {
        setOpen(true);
        setTableToRemove(currentTable);
    };
    return (
        <Layout>
            <Box sx={{ width: 900 }}>
                <Box
                    sx={{
                        right: 10,
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <DeleteButton handleDelete={handleDelete} title="Table" />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                        defaultValue={tableName}
                        sx={{ mb: 2, width: 300 }}
                        onChange={(evt) => setTableName(evt.target.value)}
                    />
                    <UpdateButton updateItem={updateTable} />
                </Box>
                <DeleteDialog
                    title="Are you sure you want to delete this table?"
                    open={open}
                    setOpen={setOpen}
                    callback={handleRemoveTable}
                />
            </Box>
        </Layout>
    );
};

export default TableDetail;
