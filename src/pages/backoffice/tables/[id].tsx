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
import { useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";

const TableDetail = () => {
    const router = useRouter();
    const tableId = router.query.id as string;
    const [open, setOpen] = useState(false);
    const selectedLocationId = getselectedLocationId() as string;
    const { tables } = useAppSelector(appData);
    const currentTable = tables.find((table) => table.id === Number(tableId));
    const [tableName, setTableName] = useState(currentTable?.name);
    const [tableToRemove, setTableToRemove] = useState<tables>();
    const updateTable = async () => {
        await fetch(`${config.apiBaseUrl}/tables`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ tableId, name: tableName }),
        });
    };
    const handleRemoveTable = async () => {
        const response = await fetch(`${config.apiBaseUrl}/tables/${tableId}`, {
            method: "DELETE",
        });

        router.push("/backoffice/tables");
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
                    <Button
                        onClick={() => {
                            setOpen(true), setTableToRemove(currentTable);
                        }}
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        sx={{
                            backgroundColor: "#AFAFAF",
                            width: "fit-content",
                            color: "#000000",
                            mb: 2,

                            ":hover": {
                                bgcolor: "#000000",
                                color: "white",
                            },
                        }}
                    >
                        Delete Table
                    </Button>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                        defaultValue={tableName}
                        sx={{ mb: 2, width: 300 }}
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
