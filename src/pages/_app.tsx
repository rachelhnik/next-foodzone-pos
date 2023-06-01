import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import BackofficeAppProvider from "@/contexts/BackofficeContext";
import OrderAppProvider from "@/contexts/OrderContext";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <BackofficeAppProvider>
                <OrderAppProvider>
                    <Component {...pageProps} />
                </OrderAppProvider>
            </BackofficeAppProvider>
        </SessionProvider>
    );
}
