import Layout from "@/components/Layout";
import { Box, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState } from "react";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";
import { config } from "@/config/Config";
import { addons } from "@prisma/client";
import DeleteDialog from "@/components/DeleteDialog";

const AddonDetail = () => {
    const router = useRouter();
    const currentAddonId = parseInt(router.query.id as string, 10);
    const selectedLocationId = getselectedLocationId() as string;
    const { addons, fetchData } = useContext(BackofficeContext);
    const currentAddon = addons.find(
        (addon) => addon.id === Number(currentAddonId)
    );
    const [open, setOpen] = useState(false);
    const [newAddon, setNewAddon] = useState({ name: "" });
    const [addonToRemove, setAddonToRemove] = useState<addons>();

    if (!currentAddon) return;

    const updateAddon = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/addons/${currentAddonId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newAddon),
            }
        );
        fetchData();
        router.push("/backoffice/addons");
    };

    const handleRemoveAddon = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/addons/${currentAddonId}`,
            { method: "DELETE" }
        );
        fetchData();
        router.push("/backoffice/addons");
    };

    return (
        <Layout title="Edit Addon">
            <Box sx={{ width: "900px" }}>
                <Box
                    sx={{
                        right: 10,
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        onClick={() => {
                            setOpen(true), setAddonToRemove(currentAddon);
                        }}
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        sx={{
                            backgroundColor: "#AFAFAF",
                            width: "fit-content",
                            color: "#000000",
                            mb: 2,

                            ":hover": {
                                bgcolor: "#000000",
                                color: "white",
                            },
                        }}
                    >
                        Delete Addon
                    </Button>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                        defaultValue={currentAddon.name}
                        sx={{ mb: 2, width: 200 }}
                        onChange={(evt) =>
                            setNewAddon({ name: evt.target.value })
                        }
                    />

                    <Button
                        variant="contained"
                        onClick={updateAddon}
                        sx={{
                            backgroundColor: "#606C5D",
                            width: 200,
                            color: "#E8F6EF",
                            mt: 2,

                            ":hover": {
                                bgcolor: "#7C9070",
                                color: "white",
                            },
                        }}
                    >
                        Update
                    </Button>
                </Box>
                <DeleteDialog
                    title="Are you sure you want to delete this addon?"
                    open={open}
                    setOpen={setOpen}
                    callback={handleRemoveAddon}
                />
            </Box>
        </Layout>
    );
};

export default AddonDetail;
