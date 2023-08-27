import { useState, useContext, useEffect } from "react";
import Layout from "../Layout";
import { Box, TextField, Button, Checkbox, MenuItem } from "@mui/material";

import { BackofficeContext } from "../../contexts/BackofficeContext";

import { config } from "../../config/Config";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import { addAddon } from "@/store/slices/addonSlice";
import { addon_categories as AddonCategory } from "@prisma/client";
import CreateButton from "../buttons/CreateButton";

interface Props {
    setOpen: (data: boolean) => void;
}

const AddonCreateDialog = ({ setOpen }: Props) => {
    const { addons, menus, addonCategories, branches } =
        useAppSelector(appData);
    const dispatch = useAppDispatch();
    const [selectedAddonCategoryId, setSelectedAddonCategoryId] =
        useState<number>();
    const [newAddon, setNewAddon] = useState({
        name: "",
        price: 0,
        addoncategoryId: selectedAddonCategoryId,
    });

    const isDisabled = !newAddon.name || !selectedAddonCategoryId;
    const createAddon = async () => {
        const response = await fetch(`${config.apiBaseUrl}/addons`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAddon),
        });
        if (response.ok) {
            const newAddonData = await response.json();
            dispatch(addAddon(newAddonData));
            setOpen(false);
        }
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
                    label="price"
                    fullWidth
                    type="number"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    onChange={(e) => {
                        setNewAddon({
                            ...newAddon,
                            price: parseInt(e.target.value, 10),
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
                    {addonCategories.map((cat: AddonCategory) => (
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
                <CreateButton
                    isDisabled={isDisabled}
                    createItem={createAddon}
                />
            </Box>
        </Box>
    );
};

export default AddonCreateDialog;
