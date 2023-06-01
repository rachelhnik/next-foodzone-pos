export interface BaseType {
    name: string;
    id?: number | undefined;
}

export default interface MenusData extends BaseType {
    asset_url: string;
    price: number;
    description: string;
    menucategoryIds?: number[];
    isAvailable: boolean;
}
export interface MenuCategory extends BaseType {}

export interface Addon extends BaseType {
    addon_categories_id: any;
    price: number;
}
export interface BranchesMenucategoriesMenus {
    id?: number;
    menu_id: number;
    menucategory_id: number;
    branch_id: number;
    is_available_menu: boolean;
    is_available_menucategory: boolean;
}

export interface AddonCategory extends BaseType {
    isRequired: boolean;
}

export interface BranchesData {
    id?: number;
    township_id?: number | undefined;
    address: string;
    companyId?: number;
    townshipId?: string;
}

export interface branchesMenus {
    menu_id?: number | undefined;
    branch_id?: number;
    id?: number;
    is_available: boolean;
}

export interface Company {
    id?: any;
    name: string;
}

export interface User {
    id?: number;
    email: string;
}
export interface Townships extends BaseType {}

export interface Order {
    order: [{ menuIds: number[]; addonIds: number[] }];
}
