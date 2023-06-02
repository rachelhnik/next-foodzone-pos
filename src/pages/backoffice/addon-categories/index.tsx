import { Box, TextField, Checkbox, Button, Chip, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import type { addon_categories as AddonCategory } from "@prisma/client";
import { config } from "../../../config/Config";
import { BackofficeContext } from "../../../contexts/BackofficeContext";

export default function AddonCategories() {
    const [addonCategory, setAddonCategory] = useState<AddonCategory>({
        name: "",
        is_required: false,
    } as AddonCategory);
    const accessToken = localStorage.getItem("accessToken");

    const { fetchData, addonCategories } = useContext(BackofficeContext);

    const updateAddonCategory = async () => {
        if (!addonCategory?.name) return;

        const response = await fetch(
            `${config.backofficeApiBaseUrl}/addon-categories`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(addonCategory),
            }
        );
        fetchData();
    };

    const deleteAddonCategory = async (addonCategoryId: number | undefined) => {
        if (!addonCategoryId) return;
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/addon-categories/${addonCategoryId}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
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
                <h1 style={{ textAlign: "center" }}>
                    Create a new add on Category
                </h1>
                <TextField
                    label="Name"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    onChange={(e) => {
                        setAddonCategory({
                            ...addonCategory,
                            name: e.target.value,
                        });
                    }}
                />

                <Box sx={{ display: "flex", mb: 2 }}>
                    <Checkbox
                        disableRipple
                        color="success"
                        onChange={() => {
                            setAddonCategory({
                                ...addonCategory,
                                is_required: !addonCategory?.is_required,
                            });
                        }}
                    />
                    <p>is required</p>
                </Box>
                <Button variant="contained" onClick={updateAddonCategory}>
                    Create
                </Button>
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{ mt: 2, width: 200 }}
                >
                    {addonCategories.map((item) => (
                        <Chip
                            key={item.id}
                            label={item.name}
                            variant="outlined"
                            onDelete={() => {
                                deleteAddonCategory(item.id);
                            }}
                        />
                    ))}
                </Stack>
            </Box>
        </Layout>
    );
}
