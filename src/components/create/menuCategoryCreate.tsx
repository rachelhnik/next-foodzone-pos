import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextFieldComponent from "../textfields/TextFieldComponent";
import { useState } from "react";
import {
    branches,
    townships,
    menu_categories as MenuCategory,
} from "@prisma/client";
import { useSelector } from "react-redux";
import { appData } from "@/store/slices/appSlice";
import { config } from "@/config/Config";
import CreateButton from "../buttons/CreateButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useAppDispatch } from "@/store/hooks";
import { addMenuCategory } from "@/store/slices/menuCategorySlice";
import { fetchBranchesMenucategoriesMenus } from "@/store/slices/branchesMenucategoriesMenuSlice";
import { getselectedLocationId } from "@/utils";

interface Props {
    setOpen: (data: boolean) => void;
}

const MenuCategoryCreateDialog = ({ setOpen }: Props) => {
    const dispatch = useAppDispatch();

    const [menuCategory, setMenuCategory] = useState({
        name: "",
    } as MenuCategory);
    const branchId = getselectedLocationId();

    const [selectedBranchIds, setSelectedBranchIds] = useState<number[]>();

    const isDisabled = !menuCategory.name || !selectedBranchIds;

    const { menus, branches, townships } = useSelector(appData);
    const addNewMenucategory = async () => {
        console.log("ehol");
        if (!menuCategory?.name || !selectedBranchIds?.length) return;

        const response = await fetch(`${config.apiBaseUrl}/menu-categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                menuCategory: menuCategory,
                selectedBranchIds: selectedBranchIds,
            }),
        });
        if (response.ok) {
            const newMenuCategory = await response.json();
            console.log(newMenuCategory);
            dispatch(addMenuCategory(newMenuCategory));
            dispatch(fetchBranchesMenucategoriesMenus(branchId));
            setOpen(false);
        }
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 300,
                m: "0 auto",
            }}
        >
            <h2 style={{ textAlign: "center" }}>Create a new menu category</h2>
            <Typography>enter new menucategory name</Typography>
            <TextFieldComponent
                label=""
                handleOnChange={(e) =>
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
                sx={{ mb: 2, maxWidth: 300 }}
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
            <CreateButton
                isDisabled={isDisabled}
                createItem={addNewMenucategory}
            />
        </Box>
    );
};

export default MenuCategoryCreateDialog;
