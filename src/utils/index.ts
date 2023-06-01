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
