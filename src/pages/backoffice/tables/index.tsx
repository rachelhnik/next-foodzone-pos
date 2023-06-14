import Layout from "@/components/Layout";
import {
    Box,
    Button,
    Card,
    CardMedia,
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

const Tables = () => {
    const { fetchData } = useContext(BackofficeContext);
    const [open, setOpen] = useState(false);
    const selectedBranchId = getselectedLocationId();
    const [newTable, setNewTable] = useState({
        name: "",
        branchId: selectedBranchId,
    });

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
                <Card>
                    <CardMedia
                        sx={{ height: 100 }}
                        image="https://msquarefdc.sgp1.cdn.digitaloceanspaces.com/happy-pos/qrcode/sho/locationId-1-tableId-5.png"
                        title="green iguana"
                    />
                </Card>
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
