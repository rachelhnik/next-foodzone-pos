import { config } from "@/config/Config";
import {
    branches,
    branches_menucategories_menus,
    menu_categories,
    menus,
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

    menus: menus[]
) => {
    const selectedBranchId = getselectedLocationId() as string;
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
