import { getselectedLocationId } from "@/utils";
import { Box, Dialog, DialogContent } from "@mui/material";
import AssistantIcon from "@mui/icons-material/Assistant";
import { useState, useEffect } from "react";
import type {
    branches as BranchesData,
    townships as Townships,
} from "@prisma/client";

import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";

import ItemCard from "@/components/ItemCard";
import BranchCreateDialog from "@/components/create/branchCreate";
import OpenCreateButton from "@/components/buttons/OpenCreateButton";

const Branches = () => {
    const { branches, townships } = useAppSelector(appData);
    const [open, setOpen] = useState(false);

    const { data: session } = useSession();
    const router = useRouter();

    const [branchesData, setBranchesData] = useState<BranchesData[]>(branches);

    useEffect(() => {
        if (!session) {
            router.push("/auth/signin");
        }
        setBranchesData(branches);
    }, [session, branches, router]);

    return (
        <Layout>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <OpenCreateButton setOpen={setOpen} label="New branch" />
            </Box>
            <Box sx={{ display: "flex" }}>
                {branchesData.map((branch) => (
                    <ItemCard
                        key={branch.id}
                        icon={<AssistantIcon />}
                        href={`/backoffice/branches/${branch.id}`}
                        title={
                            townships.find(
                                (township: Townships) =>
                                    township.id === branch.township_id
                            )?.name
                        }
                        subtitle={branch.address}
                    />
                ))}
            </Box>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 280,
                        m: "0 auto",
                    }}
                >
                    <BranchCreateDialog setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </Layout>
    );
};

export default Branches;
