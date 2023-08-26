import Button from "@mui/material/Button";

interface Props {
    isDisabled: boolean;
    createItem: () => void;
}

const CreateButton = ({ isDisabled, createItem }: Props) => {
    return (
        <Button
            variant="contained"
            onClick={() => createItem()}
            disabled={isDisabled}
            sx={{
                backgroundColor: "#606C5D",

                color: "#E8F6EF",
                mt: 2,

                ":hover": {
                    bgcolor: "#7C9070", // theme.palette.primary.main
                    color: "white",
                },
            }}
        >
            Create
        </Button>
    );
};

export default CreateButton;
