import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import BackofficeAppProvider from "@/contexts/BackofficeContext";
import OrderAppContextProvider from "@/contexts/OrderAppContext";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <OrderAppContextProvider>
            <SessionProvider session={session}>
                <BackofficeAppProvider>
                    <Component {...pageProps} />
                </BackofficeAppProvider>
            </SessionProvider>
        </OrderAppContextProvider>
    );
}
