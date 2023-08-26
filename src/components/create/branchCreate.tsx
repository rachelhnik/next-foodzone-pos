import { config } from "@/config/Config";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import { addBranch } from "@/store/slices/branchSlice";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { townships as Township } from "@prisma/client";
import { useState } from "react";
import CreateButton from "../buttons/createButton";
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
                <FormControl>
                    <InputLabel id="demo-simple-select-filled-label">
                        Townships
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectedTownshipId ? selectedTownshipId : ""}
                        sx={{ mb: 2 }}
                        label="township"
                        placeholder="Please select township"
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
                </FormControl>

                <TextField
                    id="outlined-size-small"
                    value={newAddress}
                    sx={{ mb: 2 }}
                    label="Enter address"
                    onChange={(evt) => setNewAddress(evt.target.value)}
                />
                <CreateButton
                    isDisabled={disable}
                    createItem={createNewBranch}
                />
            </Box>
        </Box>
    );
};

export default BranchCreateDialog;
