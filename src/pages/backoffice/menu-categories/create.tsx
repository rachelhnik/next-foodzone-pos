import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { getselectedLocationId } from "@/utils";
import {
    Box,
    Typography,
    TextField,
    Select,
    MenuItem,
    Button,
    Checkbox,
    FormControl,
    InputLabel,
} from "@mui/material";
import {
    branches,
    townships,
    menu_categories as MenuCategory,
} from "@prisma/client";

import { useContext, useState } from "react";

const NewMenuCategory = () => {
    const [open, setOpen] = useState(false);
    const [menuCategory, setMenuCategory] = useState({
        name: "",
    } as MenuCategory);

    const [selectedBranchIds, setSelectedBranchIds] = useState<number[]>();

    const isDisabled = !menuCategory.name || !selectedBranchIds;

    const { fetchData, menus, branches, townships } =
        useContext(BackofficeContext);
    const addNewMenucategory = async () => {
        if (!menuCategory?.name || !selectedBranchIds?.length) return;

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

        fetchData();
        setMenuCategory({ ...menuCategory, name: "" });
        setSelectedBranchIds([]);
        setOpen(false);
    };
    return (
        <Box>
            <h1 style={{ textAlign: "center" }}>Create a new menu category</h1>
            <Typography>enter new menucategory name</Typography>
            <TextField
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                onChange={(e) =>
                    setMenuCategory({
                        ...menuCategory,
                        name: e.target.value,
                    })
                }
            />
            <Typography>select branches</Typography>
            <Select
                value={selectedBranchIds ? selectedBranchIds : []}
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

            <Button
                variant="contained"
                onClick={addNewMenucategory}
                fullWidth
                disabled={isDisabled ? true : false}
                sx={{
                    backgroundColor: "#606C5D",

                    color: "#E8F6EF",
                    mb: 2,

                    ":hover": {
                        bgcolor: "#7C9070", // theme.palette.primary.main
                        color: "white",
                    },
                }}
            >
                Create
            </Button>
        </Box>
    );
};

export default NewMenuCategory;
