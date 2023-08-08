import { config } from "@/config/Config";
import { CartItem } from "@/typings/Types";
import {
    menus as Menus,
    menu_categories as Menucategories,
    addons as Addons,
    addon_categories as AddonCategories,
    branches as Branches,
    branches_menucategories_menus,
    menu_addoncategories as MenuAddonCategories,
    orderlines as OrderlineData,
    orders as OrderData,
} from "@prisma/client";
import { useRouter } from "next/router";

import { createContext, useEffect, useState } from "react";
import { NullLiteral } from "typescript";

export interface OrderAppContextType {
    menus: Menus[];
    menucategories: Menucategories[];
    addons: Addons[];
    addoncategories: AddonCategories[];
    menuAddonCategories: MenuAddonCategories[];
    branchesMenucategoriesMenus: branches_menucategories_menus[];
    branches: Branches[];

    clientOrders: OrderData[];
    clientOrderlines: OrderlineData[];
    cart: CartItem[];
    setOrderData: (data: any) => void;
    fetchData: () => void;
    isLoading: boolean;
}

export const defaultContext: OrderAppContextType = {
    menus: [],
    menucategories: [],
    addons: [],
    addoncategories: [],
    branches: [],
    menuAddonCategories: [],
    branchesMenucategoriesMenus: [],

    clientOrders: [],
    clientOrderlines: [],
    cart: [],
    setOrderData: (data: any) => {},
    fetchData: () => {},
    isLoading: true,
};

export const OrderAppContext =
    createContext<OrderAppContextType>(defaultContext);

const OrderAppContextProvider = (props: any) => {
    const router = useRouter();
    const query = router.query;

    const branchId = query.branchId;

    const [orderdata, setOrderData] = useState(defaultContext);

    useEffect(() => {
        fetchData();
    }, [branchId]);

    const fetchData = async () => {
        if (!branchId) return;
        const response = await fetch(
            `${config.apiBaseUrl}/order?branchId=${branchId}`
        );

        const data = await response.json();
        const {
            menucat,
            menus,
            addoncategories,
            addons,
            branchesMenucategoriesMenus,
            menuAddonCategories,
            orders,
            orderlines,
        } = data;
        setOrderData({
            ...orderdata,
            menucategories: menucat,
            menus: menus,
            addoncategories: addoncategories,
            addons: addons,
            branchesMenucategoriesMenus: branchesMenucategoriesMenus,
            menuAddonCategories: menuAddonCategories,
            clientOrders: orders,
            clientOrderlines: orderlines,
        });
    };

    return (
        <OrderAppContext.Provider
            value={{ ...orderdata, setOrderData, fetchData }}
        >
            {props.children}
        </OrderAppContext.Provider>
    );
};

export default OrderAppContextProvider;
