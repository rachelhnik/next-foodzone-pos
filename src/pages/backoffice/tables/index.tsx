import Layout from "@/components/Layout";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { useState } from "react";

import { getselectedLocationId } from "@/utils";

import ItemCard from "@/components/ItemCard";
import TableBarIcon from "@mui/icons-material/TableBar";
import { useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";

import CreateTableDialog from "@/components/create/CreateTable";
import OpenCreateButton from "@/components/buttons/OpenCreateButton";

const Tables = () => {
    const { tables } = useAppSelector(appData);
    const [open, setOpen] = useState(false);
    const selectedBranchId = getselectedLocationId();

    const tablesForCurrentBranch = tables.filter(
        (table) => table.branch_id === Number(selectedBranchId)
    );

    return (
        <Layout>
            <Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <OpenCreateButton setOpen={setOpen} label="New table" />
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
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
                                imageUrl={table.asset_url}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Create new table</DialogTitle>
                <DialogContent
                    sx={{
                        minWidth: 300,
                    }}
                >
                    <CreateTableDialog setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </Layout>
    );
};

export default Tables;
