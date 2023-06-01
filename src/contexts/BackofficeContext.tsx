import { createContext, useEffect, useState } from "react";
import MenusData, {
    User,
    Addon,
    AddonCategory,
    Company,
    branchesMenus,
    BranchesData,
    MenuCategory,
    BranchesMenucategoriesMenus,
    Townships,
} from "../typings/Types";
import { config } from "../config/Config";
import { getAccessToken, setselectedLocationId } from "@/utils";
import { useSession } from "next-auth/react";
import { getselectedLocationId } from "@/utils";

export interface AppContextType {
    user: User | null;
    menus: MenusData[];
    menuCategories: MenuCategory[];
    addons: Addon[];
    addonCategories: AddonCategory[];
    branchesMenucategoriesMenus: BranchesMenucategoriesMenus[];
    company: Company | null;
    townships: Townships[];
    branches: BranchesData[];

    setPosData: (data: any) => void;
    fetchData: () => void;
}

export const defaultContext: AppContextType = {
    user: null,
    menus: [],
    menuCategories: [],
    addons: [],
    addonCategories: [],
    branchesMenucategoriesMenus: [],
    company: null,
    townships: [],
    branches: [],

    setPosData: () => {},
    fetchData: () => {},
};

export const BackofficeContext = createContext(defaultContext);

const BackofficeAppProvider = ({ children }: any) => {
    const [posData, setPosData] = useState(defaultContext);

    const selectedBranch = getselectedLocationId();
    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            fetchData();
        }
    }, [session]);

    const fetchData = async () => {
        const response = await fetch(`${config.backofficeApiBaseUrl}/app`);

        const data = await response.json();
        console.log(data);

        const branchId = data.branches[0].id;
        if (!selectedBranch) setselectedLocationId(branchId);

        const {
            menus,
            menuCategories,
            addons,
            addonCategories,
            branches,
            branchesMenucategoriesMenus,
            company,
            townships,
            user,
        } = data;

        setPosData({
            ...posData,
            user: user,
            menus: menus,
            menuCategories: menuCategories,
            addons: addons,
            addonCategories: addonCategories,
            company: company,
            townships: townships,
            branches: branches,
            branchesMenucategoriesMenus: branchesMenucategoriesMenus,
        });
    };

    return (
        <BackofficeContext.Provider
            value={{ ...posData, setPosData, fetchData }}
        >
            {children}
        </BackofficeContext.Provider>
    );
};
export default BackofficeAppProvider;
