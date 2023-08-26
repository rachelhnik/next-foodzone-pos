import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
interface Props {
    setOpen: (data: boolean) => void;
    label: string;
}
const OpenCreateButton = ({ setOpen, label }: Props) => {
    return (
        <Button
            onClick={() => setOpen(true)}
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
                backgroundColor: "#606C5D",
                width: "fit-content",
                color: "#E8F6EF",
                mb: 2,
                ":hover": {
                    bgcolor: "#7C9070", // theme.palette.primary.main
                    color: "white",
                },
            }}
        >
            {label}
        </Button>
    );
};

export default OpenCreateButton;
