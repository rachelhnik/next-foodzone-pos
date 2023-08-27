import DeleteDialog from "@/components/DeleteDialog";
import Layout from "@/components/Layout";
import DeleteButton from "@/components/buttons/DeleteButton";
import UpdateButton from "@/components/buttons/UpdateButton";
import { config } from "@/config/Config";
import { appData } from "@/store/slices/appSlice";
import { deleteBranch, updateBranches } from "@/store/slices/branchSlice";
import { Box, Button, TextField, Typography } from "@mui/material";
import { branches as Branch } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SingleBranch = () => {
    const router = useRouter();
    const currentBranchId = parseInt(router.query.id as string, 10);
    const { branches, townships } = useSelector(appData);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const currentBranch = branches.find(
        (branch) => branch.id === currentBranchId
    );

    const currentTownship = townships.find(
        (township) => township.id === currentBranch?.township_id
    );

    const [branchToUpdate, setBranchToUpdate] = useState({
        name: currentBranch?.address,
    });

    const updateLocation = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/branches/${currentBranchId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(branchToUpdate),
            }
        );
        if (response.ok) {
            const updatedBranch = await response.json();
            dispatch(updateBranches(updatedBranch));
            router.push("/backoffice/branches");
        }
    };

    const deleteLocation = async (branch: Branch) => {
        const response = await fetch(
            `${config.apiBaseUrl}/branches/${branch.id}`,
            {
                method: "DELETE",
            }
        );
        if (response.ok) {
            const deletedBranch = await response.json();
            dispatch(deleteBranch(deletedBranch));
            router.push("/backoffice/branches");
        } else {
            alert(
                "Cannot delete this branch. Please delete relations associated with it first."
            );
        }
    };

    if (!currentBranch) return;
    return (
        <Layout>
            <Box
                sx={{
                    display: "flex",

                    alignItems: "center",
                }}
            >
                <TextField
                    id="outlined-select-currency"
                    defaultValue={currentTownship?.name}
                    sx={{ mt: 1, width: 100 }}
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    label="address"
                    id="outlined-size-small"
                    value={branchToUpdate?.name}
                    sx={{ mt: 1, ml: 1 }}
                    onChange={(evt) => {
                        setBranchToUpdate({ name: evt.target.value });
                    }}
                />
            </Box>
            <Box
                sx={{
                    marginTop: "0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "1rem",
                }}
            >
                <UpdateButton updateItem={updateLocation} />
                <DeleteButton
                    handleDelete={() => setOpen(true)}
                    title="branch"
                />
            </Box>
            <DeleteDialog
                title="Are you sure you want to delete this table?"
                open={open}
                setOpen={setOpen}
                callback={() => deleteLocation(currentBranch)}
            />
        </Layout>
    );
};

export default SingleBranch;
