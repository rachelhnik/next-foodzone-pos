import Layout from "@/components/Layout";
import { Box, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { getselectedLocationId } from "@/utils";
import { config } from "@/config/Config";
import { addons } from "@prisma/client";
import DeleteDialog from "@/components/DeleteDialog";
import { useSelector } from "react-redux";
import { appData } from "@/store/slices/appSlice";
import { useAppDispatch } from "@/store/hooks";
import { deleteAddon, updateAddons } from "@/store/slices/addonSlice";
import DeleteButton from "@/components/buttons/DeleteButton";
import UpdateButton from "@/components/buttons/UpdateButton";

const AddonDetail = () => {
    const router = useRouter();
    const currentAddonId = parseInt(router.query.id as string, 10);
    const selectedLocationId = getselectedLocationId() as string;
    const { addons } = useSelector(appData);
    const dispatch = useAppDispatch();
    const currentAddon = addons.find(
        (addon) => addon.id === Number(currentAddonId)
    );
    const [open, setOpen] = useState(false);
    const [newAddon, setNewAddon] = useState({
        name: currentAddon?.name,
        price: currentAddon?.price,
    });

    if (!currentAddon) return;

    const updateAddon = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/addons/${currentAddonId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newAddon),
            }
        );
        if (response.ok) {
            const updatedAddonData = await response.json();
            dispatch(updateAddons(updatedAddonData));
            router.push("/backoffice/addons");
        }
    };

    const handleRemoveAddon = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/addons/${currentAddonId}`,
            { method: "DELETE" }
        );
        if (response.ok) {
            const deletedAddonData = await response.json();
            dispatch(deleteAddon(deletedAddonData));
            router.push("/backoffice/addons");
        }
    };

    const handleDelete = () => {
        setOpen(true);
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
                    <DeleteButton handleDelete={handleDelete} title="Addon" />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                        defaultValue={currentAddon.name}
                        sx={{ mb: 2, width: 300 }}
                        onChange={(evt) =>
                            setNewAddon({ ...newAddon, name: evt.target.value })
                        }
                    />
                    <TextField
                        defaultValue={currentAddon.price}
                        sx={{ mb: 2, width: 300 }}
                        onChange={(evt) =>
                            setNewAddon({
                                ...newAddon,
                                price: Number(evt.target.value),
                            })
                        }
                    />
                    <UpdateButton updateItem={updateAddon} />
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
