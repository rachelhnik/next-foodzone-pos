import { menus as Menu } from "@prisma/client";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface Props {
    options: Menu[];
    defaultValue: Menu[];
    handleOnChange: (evt: any, values: any) => void;
    label: string;
    checkedData: Menu[];
}

const MenuAutocomplete = ({
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
            getOptionLabel={(option) => option.name}
            onChange={handleOnChange}
            renderOption={(props, option) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={
                            checkedData.find((data) => data.id === option.id)
                                ? true
                                : false
                        }
                    />
                    {option.name}
                </li>
            )}
            renderInput={(params) => <TextField {...params} label="menus" />}
        />
    );
};

export default MenuAutocomplete;
