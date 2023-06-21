import { config } from "@/config/Config";
import { Order } from "@/typings/Types";
import {
    menus as Menus,
    menu_categories as Menucategories,
    addons as Addons,
    addon_categories as AddonCategories,
    branches as Branches,
    branches_menucategories_menus,
} from "@prisma/client";
import { useRouter } from "next/router";

import { createContext, useEffect, useState } from "react";
import { NullLiteral } from "typescript";

export interface OrderAppContextType {
    menus: Menus[];
    menucategories: Menucategories[];
    addons: Addons[];
    addoncategories: AddonCategories[];
    branchesMenucategoriesMenus: branches_menucategories_menus[];
    branches: Branches[];
    order: Order | null;
    orderdata: null;
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
    branchesMenucategoriesMenus: [],
    order: null,
    orderdata: null,
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
            `${config.orderAppApiBaseUrl}?branchId=${branchId}`
        );

        const data = await response.json();
        const {
            menucat,
            menus,
            addoncategories,
            addons,
            branchesMenucategoriesMenus,
        } = data;
        setOrderData({
            ...orderdata,
            menucategories: menucat,
            menus: menus,
            addoncategories: addoncategories,
            addons: addons,
            branchesMenucategoriesMenus: branchesMenucategoriesMenus,
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
