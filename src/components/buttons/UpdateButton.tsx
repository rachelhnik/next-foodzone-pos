import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface Props {
    updateItem: () => void;
    label?: string;
}

const UpdateButton = ({ updateItem, label }: Props) => {
    return (
        <Box>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#606C5D",
                    width: 300,
                    color: "#E8F6EF",
                    mt: 2,

                    ":hover": {
                        bgcolor: "#7C9070",
                        color: "white",
                    },
                }}
                onClick={() => updateItem()}
            >
                {label ? label : "Update"}
            </Button>
        </Box>
    );
};
export default UpdateButton;
