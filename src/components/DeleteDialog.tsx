import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Box,
    DialogActions,
    Button,
} from "@mui/material";

interface Props {
    title: string;
    open: boolean;
    setOpen: (value: boolean) => void;
    callback: () => void;
}

const DeleteDialog = ({ title, open, setOpen, callback }: Props) => {
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Typography>This action cannot be undone.</Typography>
            </DialogContent>
            <DialogActions>
                <Box>
                    <Button
                        variant="text"
                        sx={{ mr: 3 }}
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            callback();
                            setOpen(false);
                        }}
                    >
                        Confirm
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;
