import { config } from "@/config/Config";

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
export const generateLinkForQRCode = (locationId: number, tableId: number) => {
    return `${config.orderAppApiBaseUrl}?locationId=${locationId}&tableId=${tableId}`;
};
export const getQrCodeUrl = (locationId: number, tableId: number) => {
    return `https://msquarefdc.sgp1.cdn.digitaloceanspaces.com/happy-pos/qrcode/sho/locationId-${locationId}-tableId-${tableId}.png`;
};
