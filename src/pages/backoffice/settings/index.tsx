import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import {
    Box,
    Button,
    MenuItem,
    Radio,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { BackofficeContext } from "../../../contexts/BackofficeContext";
import { BranchesData, Company } from "../../../typings/Types";

import { config } from "../../../config/Config";

import { useRouter } from "next/router";
import { getselectedLocationId } from "@/utils";
import { useSession } from "next-auth/react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Settings() {
    const { company, branches, townships, fetchData } =
        useContext(BackofficeContext);
    const router = useRouter();
    const { data: session } = useSession();
    const currentBranchId = getselectedLocationId();
    const [companyName, setCompanyName] = useState<Company>({
        name: company?.name || "",
    });

    const [branchesData, setBranchesData] = useState<BranchesData[]>(branches);

    const [selectedTownshipId, setSelectdTownshipId] = useState("");

    const [newAddress, setNewAddress] = useState("");

    const [selectedBranch, setSelectedBranch] = useState<
        BranchesData | undefined
    >();

    useEffect(() => {
        if (!session) {
            router.push("/auth/signin");
        }
        if (branches.length) {
            const selectedBranchId = localStorage.getItem("selectedLocation");

            if (!selectedBranchId) {
                localStorage.setItem(
                    "selectedLocation",
                    String(selectedBranch?.id)
                );
                const currentBranch = branches.find(
                    (branch) => String(branch.id) === selectedBranchId
                );
            } else {
                const currentBranch = branches.find(
                    (branch) => String(branch.id) === selectedBranchId
                );

                setSelectedBranch(currentBranch);
            }
        }
        setBranchesData(branches);
    }, [session, branches, router, selectedBranch?.id]);

    const handleOnchange = (evt: SelectChangeEvent<number>) => {
        localStorage.setItem("selectedLocation", String(evt.target.value));
        const currentBranch = branches.find(
            (branch) => String(branch.id) === evt.target.value
        );

        setSelectedBranch(currentBranch);
    };

    const updateCompany = async () => {
        if (companyName.name === company?.name) alert("please update new name");
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/settings/companies/${company?.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(companyName),
            }
        );
        const newCompany = await response.json();

        fetchData();
        setCompanyName(newCompany.name);
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

    const updateLocation = async (branch: BranchesData) => {
        const branchId = branch.id;
        const oldBranch = branches.find((branch) => branch.id === branchId);
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

    return (
        <Layout>
            <Box
                component="form"
                sx={{
                    maxWidth: 350,
                    margin: "auto",
                    mt: 4,
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>name</label>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "2rem",
                        }}
                    >
                        <TextField
                            id="outlined-size-small"
                            value={companyName.name}
                            size="small"
                            onChange={(evt) =>
                                setCompanyName({ name: evt.target.value })
                            }
                        />
                        <Button
                            variant="contained"
                            sx={{ width: 100 }}
                            size="small"
                            onClick={updateCompany}
                        >
                            update
                        </Button>
                    </div>
                </div>
                <Typography>Select current location</Typography>
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
                                    <FormControlLabel
                                        value={branch.id}
                                        control={
                                            <Radio
                                                onChange={handleOnchange}
                                                checked={
                                                    currentBranchId ===
                                                    String(branch.id)
                                                        ? true
                                                        : false
                                                }
                                            />
                                        }
                                        label=""
                                    />
                                    <TextField
                                        id="outlined-select-currency"
                                        defaultValue={
                                            townships.find((data) => {
                                                if (
                                                    data.id ===
                                                    branch.township_id
                                                )
                                                    return data;
                                            })?.name
                                        }
                                        size="small"
                                        sx={{ mt: 1, width: 100 }}
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
                                                        branchData.id ===
                                                        branch.id
                                                    ) {
                                                        return {
                                                            ...branchData,
                                                            address:
                                                                evt.target
                                                                    .value,
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
                                value={
                                    selectedTownshipId ? selectedTownshipId : ""
                                }
                                label="township"
                                sx={{ width: 100 }}
                                size="small"
                                onChange={(evt) =>
                                    setSelectdTownshipId(
                                        String(evt.target.value)
                                    )
                                }
                            >
                                {townships.map((township) => (
                                    <MenuItem
                                        key={township.id}
                                        value={township.id}
                                    >
                                        {township.name}
                                    </MenuItem>
                                ))}
                            </Select>

                            <TextField
                                id="outlined-size-small"
                                value={newAddress}
                                placeholder="enter address"
                                size="small"
                                onChange={(evt) =>
                                    setNewAddress(evt.target.value)
                                }
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
            </Box>
        </Layout>
    );
}
