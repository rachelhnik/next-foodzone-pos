import { useContext } from "react";
import Layout from "../../components/Layout";
import Orders from "../../components/Orders";

import { signIn, signOut, useSession } from "next-auth/react";

function App() {
    const { data: session } = useSession();

    return (
        <div className="App">
            <Layout title="Orders">
                <></>
            </Layout>
        </div>
    );
}

export default App;
