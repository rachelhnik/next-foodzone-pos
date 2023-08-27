import { config } from "@/config/Config";
import { useAppDispatch } from "@/store/hooks";
import { addTable } from "@/store/slices/tableSlice";
import { getselectedLocationId } from "@/utils";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import CreateButton from "../buttons/CreateButton";

interface Props {
    setOpen: (data: boolean) => void;
}

const CreateTableDialog = ({ setOpen }: Props) => {
    const dispatch = useAppDispatch();
    const selectedBranchId = getselectedLocationId();
    const [newTable, setNewTable] = useState({
        name: "",
        branchId: selectedBranchId,
    });
    const createNewTable = async () => {
        const isValid = newTable.name;
        if (!isValid) return alert("Please enter table name");
        const response = await fetch(`${config.apiBaseUrl}/tables`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTable),
        });
        if (response.ok) {
            const newTableData = await response.json();
            dispatch(addTable(newTableData));
            setOpen(false);
        }
    };

    const isDisabled = !newTable.name;
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minWidth: 300 }}>
            <TextField
                label="Name"
                variant="outlined"
                sx={{ mt: 1 }}
                onChange={(evt) =>
                    setNewTable({
                        ...newTable,
                        name: evt.target.value,
                    })
                }
            />
            <CreateButton isDisabled={isDisabled} createItem={createNewTable} />
        </Box>
    );
};

export default CreateTableDialog;
