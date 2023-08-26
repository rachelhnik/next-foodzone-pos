import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface Props {
    defaultValue?: string | number | boolean;
    handleOnChange: (evt: any) => void;
    label: string;
}

const TextFieldComponent = ({ defaultValue, handleOnChange, label }: Props) => {
    return (
        <>
            <Typography variant="caption">{label}</Typography>
            <TextField
                variant="outlined"
                defaultValue={defaultValue}
                sx={{ mb: 2, maxWidth: 300 }}
                onChange={handleOnChange}
            />
        </>
    );
};

export default TextFieldComponent;
