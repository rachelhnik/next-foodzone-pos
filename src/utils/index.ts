import { config } from "@/config/Config";
import {
    addon_categories,
    branches,
    branches_menucategories_menus,
    menu_addoncategories,
    menu_categories,
    menus,
    orderlines,
    orders,
} from "@prisma/client";

export const getAccessToken = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("accessToken");
    }
    return "";
};

export const getselectedLocationId = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("selectedLocation");
    }
    return "";
};

export const setselectedLocationId = (id: string) => {
    if (typeof window !== "undefined") {
        return localStorage.setItem("selectedLocation", id);
    }
    return "";
};
export const generateLinkForQRCode = (branchId: number, tableId: number) => {
    return `${config.orderAppApiBaseUrl}?branchId=${branchId}&tableId=${tableId}`;
};
export const getQrCodeUrl = (branchId: number, tableId: number) => {
    return `https://msquarefdc.sgp1.cdn.digitaloceanspaces.com/happy-pos/qrcode/sho/branchId-${branchId}-tableId-${tableId}.png`;
};
export const getMenusByMenucategoryId = (
    menuCategoryId: number,
    branchesMenucategoriesMenus: branches_menucategories_menus[],
    menus: menus[],
    selectedBranchId: number
) => {
    const validMenuIds = branchesMenucategoriesMenus
        .filter(
            (item) =>
                item.menu_id &&
                item.menucategory_id === Number(menuCategoryId) &&
                item.branch_id === Number(selectedBranchId)
        )
        .map((item) => item.menu_id);
    return menus.filter((item) => validMenuIds.includes(item.id));
};
export const getAddonCategoriesByMenuId = (
    addoncategories: addon_categories[],
    menuId: number,
    menusAddonCategories: menu_addoncategories[]
) => {
    const currentAddonCategoriesIds = menusAddonCategories
        .filter((item) => item.menu_id === menuId)
        .map((item) => item.addoncategory_id);
    return addoncategories.filter((addoncat) =>
        currentAddonCategoriesIds.includes(addoncat.id)
    );
};

export const getBranchesByMenucategoryId = (
    branchesMenucategoriesMenus: branches_menucategories_menus[],
    menuCategoryId: number,
    branches: branches[]
) => {
    const validBranchIds = branchesMenucategoriesMenus
        .filter((item) => item.menucategory_id === menuCategoryId)
        .map((item) => item.branch_id);
    return branches.filter((item) => validBranchIds.includes(item.id));
};

export const getOrderlineToEdit = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("orderlinetoedit");
    }
    return "";
};

export const getMenusByOrderId = (
    orderId: number,
    orderlines: orderlines[],
    menus: menus[]
) => {
    const menuIdsByCurrentOrder = orderlines
        .filter((orderline) => orderline.orders_id === orderId)
        .map((item) => item.menus_id);
    const currentMenus = menus.filter((menu) =>
        menuIdsByCurrentOrder.includes(menu.id)
    );
    return currentMenus;
};
