import { useContext, useEffect } from "react";
import Layout from "../../components/Layout";

import { useSession } from "next-auth/react";
import { fetchAppData } from "@/store/slices/appSlice";
import { AsyncThunkAction, AnyAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getselectedLocationId } from "@/utils";
import { useRouter } from "next/router";

function App() {
    const { data: session } = useSession();
    const { isLoading } = useAppSelector((state) => state.app);
    const selectedBranchId = getselectedLocationId() as string;
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (session) {
            !isLoading && router.push("/backoffice/orders");
        } else {
            router.push("/auth/signin");
        }
    }, [isLoading, router, session]);
    useEffect(() => {
        dispatch(fetchAppData(selectedBranchId));
    }, []);

    return (
        <div className="App">
            <Layout title="Orders">
                <></>
            </Layout>
        </div>
    );
}

export default App;
