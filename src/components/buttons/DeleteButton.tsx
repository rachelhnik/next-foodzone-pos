import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
    handleDelete: () => void;
    title: string;
}

const DeleteButton = ({ handleDelete, title }: Props) => {
    return (
        <Box>
            <Button
                onClick={() => handleDelete()}
                variant="contained"
                startIcon={<DeleteIcon />}
                sx={{
                    backgroundColor: "#AFAFAF",
                    color: "#000000",
                    mt: 2,
                    width: 300,
                    ":hover": {
                        bgcolor: "#000000",
                        color: "white",
                    },
                }}
            >
                Delete {title}
            </Button>
        </Box>
    );
};

export default DeleteButton;
