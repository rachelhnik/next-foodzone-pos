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
    tables as Tables,
    orders as Order,
    orderlines as Orderline,
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
    tables: Tables[];
    menuAddonCategories: MenuAddonCategories[];
    orders: Order[];
    orderlines: Orderline[];
    setPosData: (data: any) => void;
    fetchData: () => void;
    isLoading: boolean;
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
    tables: [],
    menuAddonCategories: [],
    orders: [],
    orderlines: [],
    setPosData: () => {},
    fetchData: () => {},
    isLoading: true,
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
        setPosData({ ...posData, isLoading: true });
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
            tables,
            user,
            orders,
            orderlines,
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
            tables: tables,
            isLoading: false,
            branchesMenucategoriesMenus: branchesMenucategoriesMenus,
            orders: orders,
            orderlines: orderlines,
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
