import { BackofficeContext } from "../../../contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";
import {
    Typography,
    FormControl,
    RadioGroup,
    Box,
    TextField,
    Button,
    MenuItem,
    Select,
} from "@mui/material";

import { useContext, useState, useEffect } from "react";
import type {
    branches as BranchesData,
    townships as Townships,
} from "@prisma/client";
import { config } from "@/config/Config";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Branches = () => {
    const { company, fetchData, branches, townships } =
        useContext(BackofficeContext);

    const { data: session } = useSession();
    const router = useRouter();

    const [branchesData, setBranchesData] = useState<BranchesData[]>(branches);

    const [selectedTownshipId, setSelectdTownshipId] = useState("");

    const [newAddress, setNewAddress] = useState("");

    useEffect(() => {
        if (!session) {
            router.push("/auth/signin");
        }

        setBranchesData(branches);
    }, [session, branches, router]);

    const updateLocation = async (branch: BranchesData) => {
        const branchId = branch.id;
        const oldBranch = branches.find(
            (branch: BranchesData) => branch.id === branchId
        );
        const newBranch = branchesData.find(
            (updateBranch) => updateBranch.id === branchId
        );

        if (oldBranch?.address !== newBranch?.address) {
            await fetch(`${config.backofficeApiBaseUrl}/branches/${branchId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBranch),
            });
            fetchData();
        }
    };

    const deleteLocation = async (branch: BranchesData) => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/branches/${branch.id}`,
            {
                method: "DELETE",
            }
        );
        if (response.ok) {
            return fetchData();
        }
        alert(
            "Cannot delete this branch. Please delete relations associated with it first."
        );
    };

    const createNewBranch = async () => {
        if (!selectedTownshipId || !newAddress) return;
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/branches/create/${company?.id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    townshipId: selectedTownshipId,
                    address: newAddress,
                }),
            }
        );
        fetchData();
        setSelectdTownshipId("");
        setNewAddress("");
    };

    return (
        <Layout>
            <Typography variant="h6">Branches </Typography>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                >
                    {branchesData.map((branch, index) => (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                            key={branch.id}
                        >
                            <Box
                                sx={{
                                    display: "flex",

                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="h6" sx={{ mr: 2 }}>
                                    {index + 1}
                                </Typography>
                                <TextField
                                    id="outlined-select-currency"
                                    defaultValue={
                                        townships.find((data: Townships) => {
                                            if (data.id === branch.township_id)
                                                return data;
                                        })?.name
                                    }
                                    size="small"
                                    sx={{ mt: 1, width: 100 }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />

                                <TextField
                                    label="address"
                                    id="outlined-size-small"
                                    value={branch.address}
                                    size="small"
                                    sx={{ mt: 1, ml: 1 }}
                                    onChange={(evt) => {
                                        const newAddress = branchesData.map(
                                            (branchData) => {
                                                if (
                                                    branchData.id === branch.id
                                                ) {
                                                    return {
                                                        ...branchData,
                                                        address:
                                                            evt.target.value,
                                                    };
                                                }
                                                return branchData;
                                            }
                                        );
                                        setBranchesData(newAddress);
                                    }}
                                />
                            </Box>
                            <div
                                style={{
                                    marginTop: "0.5rem",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginBottom: "1rem",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{ mr: 2 }}
                                    onClick={() => updateLocation(branch)}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => deleteLocation(branch)}
                                >
                                    delete
                                </Button>
                            </div>
                        </Box>
                    ))}
                </RadioGroup>
            </FormControl>

            <Typography>Add new location</Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormControl>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 2,
                        }}
                    >
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={selectedTownshipId ? selectedTownshipId : ""}
                            label="township"
                            sx={{ width: 100 }}
                            size="small"
                            onChange={(evt) =>
                                setSelectdTownshipId(String(evt.target.value))
                            }
                        >
                            {townships.map((township) => (
                                <MenuItem key={township.id} value={township.id}>
                                    {township.name}
                                </MenuItem>
                            ))}
                        </Select>

                        <TextField
                            id="outlined-size-small"
                            value={newAddress}
                            placeholder="enter address"
                            size="small"
                            onChange={(evt) => setNewAddress(evt.target.value)}
                        />
                    </Box>
                </FormControl>

                <Button
                    variant="contained"
                    color="success"
                    onClick={createNewBranch}
                >
                    create
                </Button>
            </Box>
        </Layout>
    );
};

export default Branches;
