import { decrement, fetchContent, increment } from "@/store/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Typography, Button } from "@mui/material";

const ReduxConcepts = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    return (
        <Box>
            <Typography variant="h2" sx={{ textAlign: "center", mt: 5 }}>
                {count}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    sx={{ width: "fit-content" }}
                    onClick={() => dispatch(decrement())}
                >
                    Decrease (-)
                </Button>
                <Button
                    variant="contained"
                    sx={{ width: "fit-content", mx: 2 }}
                    onClick={() => dispatch(increment())}
                >
                    Increase (+)
                </Button>
                <Button
                    variant="contained"
                    sx={{ width: "fit-content" }}
                    onClick={() => dispatch(fetchContent())}
                >
                    fetch data
                </Button>
            </Box>
        </Box>
    );
};
export default ReduxConcepts;
