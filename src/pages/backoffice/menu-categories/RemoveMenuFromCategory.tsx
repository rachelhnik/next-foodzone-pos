import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    DialogActions,
    Button,
} from "@mui/material";

import { menus as Menu } from "@prisma/client";

interface Props {
    menu?: Menu;
    open: boolean;
    setOpen: (value: boolean) => void;
    handleRemoveMenu: (menu: Menu) => void;
}

const RemoveMenuFromMenuCategory = ({
    menu,
    open,
    setOpen,
    handleRemoveMenu,
}: Props) => {
    return (
        <Box>
            {menu && (
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>
                        Remove menu from menu this category
                    </DialogTitle>
                    <DialogContent>
                        <Typography>
                            Are you sure you want to remove the menu from this
                            menu category?
                        </Typography>
                        <Box sx={{ mt: 3 }}>
                            <Typography>
                                Menu that will be removed from this menu
                                category: <b>{menu && menu.name}</b>
                            </Typography>
                        </Box>
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
                                onClick={() => handleRemoveMenu(menu)}
                            >
                                Yes
                            </Button>
                        </Box>
                    </DialogActions>
                </Dialog>
            )}
        </Box>
    );
};

export default RemoveMenuFromMenuCategory;
