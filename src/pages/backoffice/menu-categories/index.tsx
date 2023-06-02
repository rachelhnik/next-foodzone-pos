import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import {
    Box,
    TextField,
    Button,
    Chip,
    Stack,
    MenuItem,
    Select,
} from "@mui/material";
import type {
    menu_categories as MenuCategory,
    branches,
    townships,
} from "@prisma/client";
import { config } from "../../../config/Config";
import { BackofficeContext } from "../../../contexts/BackofficeContext";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function MenuCategories() {
    const [menuCategory, setMenuCategory] = useState({
        name: "",
    } as MenuCategory);

    const [selectedBranchIds, setSelectedBranchIds] = useState<number[]>();

    const { fetchData, menuCategories, branches, townships } =
        useContext(BackofficeContext);
    const { data: session } = useSession();

    const router = useRouter();
    useEffect(() => {
        if (!session) {
            router.push("/login");
        }
    }, [session]);

    const handleMenuCategoryUpdate = async () => {
        if (!menuCategory?.name) return;
        console.log(menuCategory?.name);
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menu-categories`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    menuCategory: menuCategory,
                    selectedBranchIds: selectedBranchIds,
                }),
            }
        );
        console.log(await response.json());
        fetchData();
        setMenuCategory({ ...menuCategory, name: "" });
        setSelectedBranchIds([]);
    };

    const deleteCategory = async (menuCategoryId: number | undefined) => {
        if (!menuCategoryId) return;
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menu-categories/${menuCategoryId}`,
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
                <h1 style={{ textAlign: "center" }}>
                    Create a new menu category
                </h1>
                <TextField
                    label="Name"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    onChange={(e) =>
                        setMenuCategory({
                            ...menuCategory,
                            name: e.target.value,
                        })
                    }
                />
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedBranchIds ? selectedBranchIds : []}
                    label="branches"
                    fullWidth
                    sx={{ mb: 2 }}
                    multiple
                    onChange={(evt: any) => {
                        const values = evt.target.value as number[];
                        setSelectedBranchIds(values);
                    }}
                >
                    {branches.map((branch: branches) => (
                        <MenuItem key={branch.id} value={branch.id}>
                            {townships &&
                                townships.map((ts: townships) =>
                                    ts.id === branch.township_id ? ts.name : ""
                                )}
                            /{branch.address}
                        </MenuItem>
                    ))}
                </Select>
                <Button variant="contained" onClick={handleMenuCategoryUpdate}>
                    Create
                </Button>
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{ mt: 2, width: 200 }}
                >
                    {menuCategories.map((item: MenuCategory) => (
                        <Chip
                            key={item.id}
                            label={item.name}
                            variant="outlined"
                            onDelete={() => {
                                deleteCategory(item.id);
                            }}
                        />
                    ))}
                </Stack>
            </Box>
        </Layout>
    );
}
