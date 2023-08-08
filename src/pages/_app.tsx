import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { Provider } from "react-redux";
import { store } from "@/store";
import { Session } from "next-auth";
import { getselectedLocationId } from "@/utils";
import { useEffect } from "react";
import { fetchAppData } from "@/store/slices/appSlice";
type CustomeAppProps = AppProps & { session: Session };
export default function App({
    Component,
    pageProps,
    session,
}: CustomeAppProps) {
    const selectedBranchId = getselectedLocationId() as string;
    useEffect(() => {
        store.dispatch(fetchAppData(selectedBranchId));
    }, []);
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </SessionProvider>
    );
}
