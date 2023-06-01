import { config } from "@/config/Config";
import AddonCategories from "@/pages/backoffice/addon-categories";
import MenuCategories from "@/pages/backoffice/menu-categories";
import menus from "@/pages/backoffice/menus";
import MenusData, { Addon, AddonCategory, MenuCategory } from "@/typings/Types";
import { Townships } from "@/typings/Types";
import { BranchesData } from "@/typings/Types";
import { Order } from "aws-sdk/clients/glue";
import { useSession } from "next-auth/react";
import { Children, createContext, useEffect, useState } from "react";

export interface OrderContextType {
    menus: MenusData[];
    menuCategories: MenuCategory[];
    branches: BranchesData[];
    townships: Townships[];
    addons: Addon[];
    addonCategories: AddonCategory[];
    setData: (value: any) => void;
    fetchData: () => void;
    isLoading: boolean;
    cart: Order[];
}

export const defaultOrderContext: OrderContextType = {
    menus: [],
    menuCategories: [],
    branches: [],
    townships: [],
    addons: [],
    addonCategories: [],
    setData: () => {},
    fetchData: () => {},
    isLoading: false,
    cart: [],
};

export const OrderContext = createContext(defaultOrderContext);

const OrderAppProvider = ({ children }: any) => {
    const [data, setData] = useState(defaultOrderContext);
    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            fetchData();
        }
    }, [session]);

    const fetchData = async () => {
        const response = await fetch(
            `${config.orderAppApiBaseUrl}?locationId=3`
        );
        const data = await response.json();

        const {
            menus,
            MenuCategories,
            addons,
            addonCategories,
            branches,
            townships,
        } = data;
        setData({
            ...data,
            menu: menus,
            menuCategories: MenuCategories,
            addons: addons,
            addonCategories: addonCategories,
            branches: branches,
            townships: townships,
            isLoading: false,
        });
    };

    return (
        <OrderContext.Provider value={{ ...data, setData, fetchData }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderAppProvider;
