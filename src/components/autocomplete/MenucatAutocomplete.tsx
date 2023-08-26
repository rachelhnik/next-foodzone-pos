import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
    branches as Branch,
    menu_categories as MenuCategory,
} from "@prisma/client";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface Props {
    options: Branch[];
    defaultValue: Branch[];
    handleOnChange: (evt: any, values: any) => void;
    label: string;
    checkedData: {
        name: string;
        branches: Branch[];
    };
}

const MenucatAutoComplete = ({
    options,
    defaultValue,
    handleOnChange,
    label,
    checkedData,
}: Props) => {
    return (
        <Autocomplete
            sx={{ width: 300 }}
            multiple
            options={options}
            defaultValue={defaultValue}
            disableCloseOnSelect
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={(option) => option.address}
            onChange={handleOnChange}
            renderOption={(props, option) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={
                            checkedData.branches.find(
                                (branch) => branch.id === option.id
                            )
                                ? true
                                : false
                        }
                    />
                    {option.address}
                </li>
            )}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
};

export default MenucatAutoComplete;
