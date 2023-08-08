import { config } from "@/config/Config";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import { addBranch } from "@/store/slices/branchSlice";
import {
    Box,
    Button,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { townships as Township } from "@prisma/client";
import { useState } from "react";
interface Props {
    setOpen: (data: boolean) => void;
}
const BranchCreateDialog = ({ setOpen }: Props) => {
    const { company, townships } = useAppSelector(appData);
    const dispatch = useAppDispatch();

    const [selectedTownshipId, setSelectdTownshipId] = useState("");

    const [newAddress, setNewAddress] = useState("");

    const disable = !selectedTownshipId || !newAddress;

    const createNewBranch = async () => {
        if (!selectedTownshipId || !newAddress) return;
        const response = await fetch(`${config.apiBaseUrl}/branches/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                townshipId: selectedTownshipId,
                address: newAddress,
                companyId: company?.id,
            }),
        });
        const newBranch = await response.json();
        dispatch(addBranch(newBranch));
        setOpen(false);
        setSelectdTownshipId("");
        setNewAddress("");
    };

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 300,
                    m: "0 auto",
                }}
            >
                <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
                    Create a new branch
                </Typography>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedTownshipId ? selectedTownshipId : ""}
                    sx={{ mb: 2 }}
                    label="township"
                    onChange={(evt) =>
                        setSelectdTownshipId(String(evt.target.value))
                    }
                >
                    {townships.map((township: Township) => (
                        <MenuItem key={township.id} value={township.id}>
                            {township.name}
                        </MenuItem>
                    ))}
                </Select>

                <TextField
                    id="outlined-size-small"
                    value={newAddress}
                    sx={{ mb: 2 }}
                    placeholder="enter address"
                    onChange={(evt) => setNewAddress(evt.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={createNewBranch}
                    sx={{
                        backgroundColor: "#606C5D",
                        color: "#E8F6EF",
                        mb: 2,
                        ":hover": {
                            bgcolor: "#7C9070", // theme.palette.primary.main
                            color: "white",
                        },
                    }}
                    disabled={disable ? true : false}
                >
                    Create
                </Button>
            </Box>
        </Box>
    );
};

export default BranchCreateDialog;
