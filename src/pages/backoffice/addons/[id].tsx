import Layout from "@/components/Layout";
import { Box, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import addons from ".";
import { useContext, useState } from "react";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";
import { config } from "@/config/Config";

const AddonDetail = () => {
    const router = useRouter();
    const currentAddonId = parseInt(router.query.id as string, 10);
    const selectedLocationId = getselectedLocationId() as string;
    const { addons, fetchData } = useContext(BackofficeContext);
    const currentAddon = addons.find(
        (addon) => addon.id === Number(currentAddonId)
    );

    const [newAddon, setNewAddon] = useState({ name: "" });

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

    return (
        <Layout title="Edit Addon">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                    defaultValue={currentAddon.name}
                    sx={{ mb: 2 }}
                    onChange={(evt) => setNewAddon({ name: evt.target.value })}
                />

                <Button
                    variant="contained"
                    onClick={updateAddon}
                    sx={{ width: "fit-content", mt: 3 }}
                >
                    Update
                </Button>
            </Box>
        </Layout>
    );
};

export default AddonDetail;
