import Layout from "@/components/Layout";
import {
    Box,
    Button,
    Card,
    CardMedia,
    Dialog,
    DialogContent,
    DialogTitle,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { getselectedLocationId } from "@/utils";
import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";

const Tables = () => {
    const { fetchData, tables } = useContext(BackofficeContext);
    const [open, setOpen] = useState(false);
    const selectedBranchId = getselectedLocationId();
    const [newTable, setNewTable] = useState({
        name: "",
        branchId: selectedBranchId,
    });

    const tablesForCurrentBranch = tables.filter(
        (table) => table.branch_id === Number(selectedBranchId)
    );
    console.log(tablesForCurrentBranch);

    const createNewTable = async () => {
        const isValid = newTable.name;
        if (!isValid) return alert("Please enter table name");
        await fetch(`${config.backofficeApiBaseUrl}/tables`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTable),
        });
        fetchData();
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
                        <Box sx={{ textAlign: "center", mr: 4 }} key={table.id}>
                            <Link
                                href={`/backoffice/tables/${table.id}`}
                                style={{
                                    textDecoration: "none",
                                    color: "#000000",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "120px",
                                        height: "120px",
                                        borderRadius: 2,
                                        border: "2px solid #EBEBEB",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        textAlign: "center",
                                    }}
                                ></Box>
                            </Link>
                            <Typography sx={{ mt: 1 }}>{table.name}</Typography>
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
