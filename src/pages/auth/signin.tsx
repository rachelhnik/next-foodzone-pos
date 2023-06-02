import { signIn } from "next-auth/react";

import { Box, Button } from "@mui/material";
import NavBar from "@/components/Navbar";

const SignIn = () => {
    return (
        <Box>
            <Box sx={{ position: "relative", zIndex: 999 }}>
                <NavBar />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 10,
                }}
            >
                <Button
                    variant="contained"
                    onClick={() =>
                        signIn("google", { callbackUrl: "/backoffice" })
                    }
                >
                    Sign in with Google
                </Button>
            </Box>
        </Box>
    );
};

export default SignIn;
