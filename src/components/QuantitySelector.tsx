import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { Box, IconButton, Typography } from "@mui/material";

interface Props {
    value: number;
    addMenuQuantity: () => void;
    reduceMenuQuantity: () => void;
}

const QuantitySelector = ({
    value,
    addMenuQuantity,
    reduceMenuQuantity,
}: Props) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={addMenuQuantity}>
                <AddCircleOutlineIcon />
            </IconButton>
            <Typography variant="subtitle1">{value}</Typography>
            <IconButton>
                <RemoveCircleOutlineIcon onClick={reduceMenuQuantity} />
            </IconButton>
        </Box>
    );
};
export default QuantitySelector;
