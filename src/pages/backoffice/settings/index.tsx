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
import { BackofficeContext } from "../../../contexts/BackofficeContext";
import type {
    branches as BranchesData,
    companies as Company,
} from "@prisma/client";

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
    } as Company);

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
                    <Typography>name</Typography>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexFlow: "column",
                            alignItems: "center",
                            marginBottom: "2rem",
                        }}
                    >
                        <TextField
                            id="outlined-size-small"
                            value={companyName.name}
                            size="small"
                            onChange={(evt) =>
                                setCompanyName({
                                    ...companyName,
                                    name: evt.target.value,
                                })
                            }
                        />
                        <Button
                            variant="contained"
                            sx={{ mt: 2 }}
                            size="small"
                            onClick={updateCompany}
                            fullWidth
                        >
                            update
                        </Button>
                    </div>
                </div>
                <Typography>Select current location</Typography>
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
