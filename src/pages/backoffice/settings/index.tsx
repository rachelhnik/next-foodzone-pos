import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import {
    Box,
    Button,
    Chip,
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
import type {
    branches as BranchesData,
    companies as Company,
} from "@prisma/client";
import { config } from "../../../config/Config";
import { useRouter } from "next/router";
import { getselectedLocationId } from "@/utils";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import { updateCompany } from "@/store/slices/companySlice";

export default function Settings() {
    const { company, branches, townships } = useAppSelector(appData);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { data: session } = useSession();
    const currentBranchId = getselectedLocationId();
    const [companyName, setCompanyName] = useState<Company>(company as Company);
    const [selectedBranch, setSelectedBranch] = useState<
        BranchesData | undefined
    >(branches[0]);

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
    }, [session, branches, router, selectedBranch?.id]);

    const handleOnchange = (evt: SelectChangeEvent<number>) => {
        localStorage.setItem("selectedLocation", String(evt.target.value));
        const currentBranch = branches.find(
            (branch) => String(branch.id) === evt.target.value
        );
        setSelectedBranch(currentBranch);
    };

    const updateCompanyData = async () => {
        if (companyName.name === company?.name) alert("please update new name");
        const response = await fetch(
            `${config.apiBaseUrl}/settings/companies/${company?.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(companyName),
            }
        );
        if (response.ok) {
            const newCompany = await response.json();
            dispatch(updateCompany(newCompany));
            alert("succefully updated");
        }
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
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "2rem",
                    }}
                >
                    <Typography variant="h5">Company Name</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexFlow: "column",
                            alignItems: "center",
                            mt: 2,
                        }}
                    >
                        <TextField
                            id="outlined-size-small"
                            value={companyName?.name}
                            size="small"
                            onChange={(evt) =>
                                setCompanyName({
                                    ...companyName,
                                    name: evt.target.value,
                                })
                            }
                        />
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#606C5D",
                            color: "#E8F6EF",
                            mt: 3,
                            ":hover": {
                                bgcolor: "#7C9070", // theme.palette.primary.main
                                color: "white",
                            },
                        }}
                        onClick={updateCompanyData}
                        fullWidth
                    >
                        update
                    </Button>
                </div>
                <Typography variant="h5">Select current location</Typography>
                {branches.map((branch) => (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            mt: 2,
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
                                        sx={{ mr: -2 }}
                                    />
                                }
                                label=""
                            />
                            <Chip
                                label={
                                    townships.find((township) =>
                                        township.id === branch.township_id
                                            ? township.name
                                            : ""
                                    )?.name
                                }
                                sx={{ mr: 1 }}
                            />

                            <Chip label={branch.address} />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Layout>
    );
}
