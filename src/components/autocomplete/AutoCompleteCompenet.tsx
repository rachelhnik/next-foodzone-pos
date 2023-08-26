import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import TextField from "@mui/material/TextField";
import { addon_categories as AddonCategory } from "@prisma/client";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface Props {
    options: AddonCategory[];
    defaultValue: AddonCategory[];
    handleOnChange: (evt: any, values: any) => void;

    label: string;
    checkedData: any;
}

const AutocompleteComponent = ({
    options,
    defaultValue,
    handleOnChange,

    label,
    checkedData,
}: Props) => {
    return (
        <Autocomplete
            sx={{ width: 300, mt: 2 }}
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
                            checkedData.addonCategories.find(
                                (addoncat: AddonCategory) =>
                                    addoncat.id === option.id
                            )
                                ? true
                                : false
                        }
                    />
                    {option.name}
                </li>
            )}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
};

export default AutocompleteComponent;
