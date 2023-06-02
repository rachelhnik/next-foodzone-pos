import { useState, useContext, useEffect } from "react";
import Layout from "../../../components/Layout";
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Chip,
    Stack,
    FormHelperText,
} from "@mui/material";
import { addons as Addon } from "@prisma/client";
import { BackofficeContext } from "../../../contexts/BackofficeContext";

import { config } from "../../../config/Config";
import { useRouter } from "next/router";

export default function Addons() {
    const [addon, setAddon] = useState<Addon>({
        name: "",
        addon_categories_id: null,
    } as Addon);
    const branchId = localStorage.getItem("selectedLocation");
    const [checked, setIsChecked] = useState<boolean>(false);

    const accessToken = localStorage.getItem("accessToken");
    const { fetchData, addons, addonCategories, branches } =
        useContext(BackofficeContext);
    const router = useRouter();

    const updateAddon = async () => {
        if (addon?.name.length === 0 || addon?.addon_categories_id === null)
            return;
        const response = await fetch(`${config.backofficeApiBaseUrl}/addons`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(addon),
        });

        fetchData();
    };

    const deleteAddon = async (addonId: number | undefined) => {
        if (addonId === undefined) return;
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/addons/${addonId}`,
            {
                method: "DELETE",
            }
        );
        fetchData();
    };
    return (
        <Layout>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 300,
                    m: "0 auto",
                }}
            >
                <h1 style={{ textAlign: "center" }}>Create a new add on</h1>
                <TextField
                    label="Name"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    onChange={(e) => {
                        setAddon({
                            ...addon,
                            name: e.target.value,
                        });
                    }}
                />

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    helperText="Please select category"
                    sx={{ width: 300 }}
                >
                    {addonCategories.map((cat) => (
                        <MenuItem
                            key={cat.id}
                            value={cat.id}
                            onClick={() => {
                                setAddon({
                                    ...addon,
                                    addon_categories_id: cat.id,
                                });
                            }}
                        >
                            {cat.name}
                        </MenuItem>
                    ))}
                </TextField>

                <Box sx={{ display: "flex", mb: 2 }}>
                    <Checkbox
                        disableRipple
                        color="success"
                        checked={checked}
                        onChange={() => setIsChecked(!checked)}
                    />
                    <p>is avalilable</p>
                </Box>

                <Button variant="contained" onClick={updateAddon}>
                    Create
                </Button>
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{ mt: 2, width: 200 }}
                >
                    {addons.map((item) => (
                        <Chip
                            key={item.id}
                            label={item.name}
                            variant="outlined"
                            onDelete={() => deleteAddon(item.id)}
                        />
                    ))}
                </Stack>
            </Box>
        </Layout>
    );
}
