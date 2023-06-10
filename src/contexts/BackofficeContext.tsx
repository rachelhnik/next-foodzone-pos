import { createContext, useEffect, useState } from "react";

import type {
    menus as MenusData,
    users as User,
    addons as Addon,
    addon_categories as AddonCategory,
    companies as Company,
    branches as BranchesData,
    menu_categories as MenuCategory,
    branches_menucategories_menus as BranchesMenucategoriesMenus,
    townships as Townships,
    menu_addoncategories as MenuAddonCategories,
} from "@prisma/client";
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
    menuAddonCategories: MenuAddonCategories[];
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
    menuAddonCategories: [],
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

        const branchId = data.branches[0].id;

        if (!selectedBranch) setselectedLocationId(branchId);

        const {
            menus,
            menuCategories,
            addons,
            addonCategories,
            branches,
            branchesMenucategoriesMenus,
            menuAddonCategories,
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
            menuAddonCategories: menuAddonCategories,
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
