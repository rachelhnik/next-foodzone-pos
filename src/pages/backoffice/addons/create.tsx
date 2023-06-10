import { useState, useContext, useEffect } from "react";
import Layout from "../../../components/Layout";
import { Box, TextField, Button, Checkbox, MenuItem } from "@mui/material";

import { BackofficeContext } from "../../../contexts/BackofficeContext";

import { config } from "../../../config/Config";
import { useRouter } from "next/router";

export default function NewAddons() {
    const { fetchData, addons, menus, addonCategories, branches } =
        useContext(BackofficeContext);
    const [selectedAddonCategoryId, setSelectedAddonCategoryId] =
        useState<number>();
    const [newAddon, setNewAddon] = useState({
        name: "",
        addoncategoryId: selectedAddonCategoryId,
    });

    const isDisabled = !newAddon.name || !selectedAddonCategoryId;

    const createAddon = async () => {
        const response = await fetch(`${config.backofficeApiBaseUrl}/addons`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAddon),
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
        <Box>
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
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                    onChange={(e) => {
                        setNewAddon({
                            ...newAddon,
                            name: e.target.value,
                        });
                    }}
                />

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    fullWidth
                    sx={{ mb: 2 }}
                >
                    {addonCategories.map((cat) => (
                        <MenuItem
                            key={cat.id}
                            value={cat.id}
                            onClick={() => {
                                setSelectedAddonCategoryId(cat.id);
                                setNewAddon({
                                    ...newAddon,
                                    addoncategoryId: cat.id,
                                });
                            }}
                        >
                            {cat.name}
                        </MenuItem>
                    ))}
                </TextField>

                <Button
                    variant="contained"
                    onClick={createAddon}
                    sx={{
                        backgroundColor: "#606C5D",

                        color: "#E8F6EF",
                        mb: 2,

                        ":hover": {
                            bgcolor: "#7C9070", // theme.palette.primary.main
                            color: "white",
                        },
                    }}
                    disabled={isDisabled ? true : false}
                >
                    Create
                </Button>
            </Box>
        </Box>
    );
}
