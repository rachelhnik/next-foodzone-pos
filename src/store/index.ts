import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import menuSlice from "./slices/menuSlice";
import menuCategorySlice from "./slices/menuCategorySlice";
import addonSlice, { addonsSlice } from "./slices/addonSlice";
import addonCategorySlice from "./slices/addonCategorySlice";
import branchSlice from "./slices/branchSlice";
import branchesMenucategoriesMenuSlice from "./slices/branchesMenucategoriesMenuSlice";
import menuAddoncategorySlice from "./slices/menuAddoncategorySlice";
import tableSlice from "./slices/tableSlice";
import ordersSlice from "./slices/ordersSlice";
import orderlinesSlice from "./slices/orderlinesSlice";
import companySlice from "./slices/companySlice";
import townshipSlice from "./slices/townshipSlice";

export const store = configureStore({
    reducer: {
        app: appSlice,
        company: companySlice,
        menus: menuSlice,
        menuCategories: menuCategorySlice,
        addons: addonSlice,
        addonCategoris: addonCategorySlice,
        branches: branchSlice,
        branchesMenucategoriesMenus: branchesMenucategoriesMenuSlice,
        menuAddoncategoris: menuAddoncategorySlice,
        tables: tableSlice,
        orders: ordersSlice,
        orderlines: orderlinesSlice,
        townships: townshipSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
