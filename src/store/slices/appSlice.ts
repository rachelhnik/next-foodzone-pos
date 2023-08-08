import { config } from "@/config/Config";
import {
    createAsyncThunk,
    createSelector,
    createSlice,
} from "@reduxjs/toolkit";
import { setMenu } from "./menuSlice";
import { setMenuCategory } from "./menuCategorySlice";
import { setAddons } from "./addonSlice";
import { setAddonCategory } from "./addonCategorySlice";
import { setMenuAddonCategory } from "./menuAddoncategorySlice";
import { setBranches } from "./branchSlice";
import { setBranchesMenucategoriesMenus } from "./branchesMenucategoriesMenuSlice";
import { setCompany } from "./companySlice";
import { setTables } from "./tableSlice";
import { setOrders } from "./ordersSlice";
import { setOrderlines } from "./orderlinesSlice";
import { RootState } from "..";
import { setTownship } from "./townshipSlice";

interface AppState {
    isLoading: boolean;
    error: Error | null;
}

const initialState: AppState = {
    isLoading: false,
    error: null,
};

export const fetchAppData = createAsyncThunk(
    "app/fetchAppData",
    async (branchId: string, thunkAPI) => {
        thunkAPI.dispatch(setAppLoading(true));
        const response = await fetch(
            `${config.apiBaseUrl}/app?branchId:${branchId}  `
        );
        const responseJson = await response.json();
        const {
            menus,
            menuCategories,
            addons,
            addonCategories,
            menuAddonCategories,
            branches,
            branchesMenucategoriesMenus,
            company,
            tables,
            orders,
            orderlines,
            townships,
        } = responseJson;
        console.log("menucat", menuCategories);
        thunkAPI.dispatch(setAppLoading(false));
        thunkAPI.dispatch(setMenu(menus));
        thunkAPI.dispatch(setMenuCategory(menuCategories));
        thunkAPI.dispatch(setAddons(addons));
        thunkAPI.dispatch(setAddonCategory(addonCategories));
        thunkAPI.dispatch(setMenuAddonCategory(menuAddonCategories));
        thunkAPI.dispatch(setBranches(branches));
        thunkAPI.dispatch(
            setBranchesMenucategoriesMenus(branchesMenucategoriesMenus)
        );
        thunkAPI.dispatch(setCompany(company));
        thunkAPI.dispatch(setTables(tables));
        thunkAPI.dispatch(setOrders(orders));
        thunkAPI.dispatch(setOrderlines(orderlines));
        thunkAPI.dispatch(setTownship(townships));
    }
);
export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAppLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setAppLoading } = appSlice.actions;

export const selectCompany = (state: RootState) => state.company.items;
export const selectMenus = (state: RootState) => state.menus.items;
export const selectMenuCategories = (state: RootState) =>
    state.menuCategories.items;
export const selectAddons = (state: RootState) => state.addons.items;
export const selectAddonCategories = (state: RootState) =>
    state.addonCategoris.items;
export const selectMenuAddoncategories = (state: RootState) =>
    state.menuAddoncategoris.items;
export const selectBranchesMenuMenucategories = (state: RootState) =>
    state.branchesMenucategoriesMenus.items;
export const selectOrders = (state: RootState) => state.orders.items;
export const selectOrderlines = (state: RootState) => state.orderlines.items;
export const selectBranches = (state: RootState) => state.branches.items;
export const selectTables = (state: RootState) => state.tables.items;
export const selectTownship = (state: RootState) => state.townships.items;

export const appData = createSelector(
    [
        selectCompany,
        selectMenus,
        selectMenuCategories,
        selectAddons,
        selectAddonCategories,
        selectMenuAddoncategories,
        selectBranchesMenuMenucategories,
        selectOrders,
        selectOrderlines,
        selectTables,
        selectBranches,
        selectTownship,
    ],
    (
        company,
        menus,
        menuCategories,
        addons,
        addonCategories,
        menuAddonCategories,
        branchesMenucategoriesMenus,
        orders,
        orderlines,
        tables,
        branches,
        townships
    ) => {
        return {
            company,
            menus,
            menuCategories,
            addons,
            addonCategories,
            menuAddonCategories,
            branchesMenucategoriesMenus,
            orders,
            orderlines,
            tables,
            branches,
            townships,
        };
    }
);

export default appSlice.reducer;
