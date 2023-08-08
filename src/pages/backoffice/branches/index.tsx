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
    Dialog,
    DialogContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AssistantIcon from "@mui/icons-material/Assistant";
import { useContext, useState, useEffect } from "react";
import type {
    branches as BranchesData,
    townships as Townships,
} from "@prisma/client";
import { config } from "@/config/Config";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import {
    addBranch,
    deleteBranch,
    updateBranches,
} from "@/store/slices/branchSlice";
import ItemCard from "@/components/ItemCard";
import NewAddons from "../addons/create";
import BranchCreateDialog from "@/components/create/branchCreate";

const Branches = () => {
    const { company, branches, townships } = useAppSelector(appData);
    const [open, setOpen] = useState(false);

    const { data: session } = useSession();
    const router = useRouter();

    const dispatch = useAppDispatch();

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
            const response = await fetch(
                `${config.apiBaseUrl}/branches/${branchId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newBranch),
                }
            );
            const updatedBranch = await response.json();
            dispatch(updateBranches(updatedBranch));
        }
    };

    const deleteLocation = async (branch: BranchesData) => {
        const response = await fetch(
            `${config.apiBaseUrl}/branches/${branch.id}`,
            {
                method: "DELETE",
            }
        );
        if (response.ok) {
            const deletedBranch = await response.json();
            dispatch(deleteBranch(deletedBranch));
        } else {
            alert(
                "Cannot delete this branch. Please delete relations associated with it first."
            );
        }
    };

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
        setSelectdTownshipId("");
        setNewAddress("");
    };

    return (
        <Layout>
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
                    New Branch
                </Button>
            </Box>
            <>
                {branchesData.map((branch, index) => (
                    <ItemCard
                        key={branch.id}
                        icon={<AssistantIcon />}
                        href={`/backoffice/branches/${branch.id}`}
                        title={
                            townships.find(
                                (township: Townships) =>
                                    township.id === branch.township_id
                            )?.name
                        }
                        subtitle={branch.address}
                    />
                ))}
            </>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 280,
                        m: "0 auto",
                    }}
                >
                    <BranchCreateDialog setOpen={setOpen} />
                </DialogContent>
            </Dialog>
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
        </Layout>
    );
};

export default Branches;
