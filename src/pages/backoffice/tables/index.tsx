import Layout from "@/components/Layout";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { getselectedLocationId } from "@/utils";
import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import ItemCard from "@/components/ItemCard";
import TableBarIcon from "@mui/icons-material/TableBar";
import { useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";

const Tables = () => {
    const { tables } = useAppSelector(appData);
    const [open, setOpen] = useState(false);
    const selectedBranchId = getselectedLocationId();
    const [newTable, setNewTable] = useState({
        name: "",
        branchId: selectedBranchId,
    });

    const tablesForCurrentBranch = tables.filter(
        (table) => table.branch_id === Number(selectedBranchId)
    );

    const createNewTable = async () => {
        const isValid = newTable.name;
        if (!isValid) return alert("Please enter table name");
        await fetch(`${config.apiBaseUrl}/tables`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTable),
        });

        setOpen(false);
    };
    return (
        <Layout>
            <Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        onClick={() => setOpen(true)}
                        variant="contained"
                        startIcon={<AddIcon />}
                        sx={{
                            backgroundColor: "#606C5D",
                            width: "fit-content",
                            color: "#E8F6EF",
                            mb: 2,

                            ":hover": {
                                bgcolor: "#7C9070", // theme.palette.primary.main
                                color: "white",
                            },
                        }}
                    >
                        New table
                    </Button>
                </Box>
                <Box sx={{ display: "flex" }}>
                    {tablesForCurrentBranch.map((table) => (
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                mr: 2,
                            }}
                            key={table.id}
                        >
                            <ItemCard
                                key={table.id}
                                icon={<TableBarIcon />}
                                href={`/backoffice/tables/${table.id}`}
                                title={table.name}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Create new table</DialogTitle>
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 300,
                    }}
                >
                    <TextField
                        label="Name"
                        variant="outlined"
                        sx={{ mt: 1 }}
                        onChange={(evt) =>
                            setNewTable({
                                ...newTable,
                                name: evt.target.value,
                            })
                        }
                    />
                    <Button
                        variant="contained"
                        onClick={createNewTable}
                        sx={{
                            width: "fit-content",
                            alignSelf: "flex-end",
                            mt: 2,
                        }}
                    >
                        Create
                    </Button>
                </DialogContent>
            </Dialog>
        </Layout>
    );
};

export default Tables;
