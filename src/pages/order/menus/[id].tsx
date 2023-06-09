import AddonCategoriesDisplay from "@/components/AddonCategoriesDisplay";
import QuantitySelector from "@/components/QuantitySelector";
import { OrderAppContext } from "@/contexts/OrderAppContext";
import { generateRandomId, getAddonCategoriesByMenuId } from "@/utils";
import { Box, Button } from "@mui/material";
import {
    addon_categories as AddonCategory,
    addons as Addon,
} from "@prisma/client";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Menu = () => {
    const router = useRouter();
    const query = router.query;
    const menuId = Number(router.query.id as string);
    const {
        menus,
        addons,
        addoncategories,
        menuAddonCategories,
        setOrderData,
    } = useContext(OrderAppContext);
    const { ...orderdata } = useContext(OrderAppContext);
    const [value, setValue] = useState(1);
    const [disable, setDisable] = useState(false);
    const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
    const currentMenu = menus.find((menu) => menu.id === Number(menuId));
    const validAddonCategories = getAddonCategoriesByMenuId(
        addoncategories,
        menuId,
        menuAddonCategories
    );

    const validAddonCategoriesIds = validAddonCategories.map((item) => item.id);

    const validAddons = addons.filter(
        (addon) =>
            addon.addon_categories_id &&
            validAddonCategoriesIds.includes(addon.addon_categories_id)
    );

    useEffect(() => {
        const isRequiredAddoncat = validAddonCategories.filter(
            (item) => item.is_required === true
        );

        if (isRequiredAddoncat.length) {
            if (!selectedAddons.length) {
                setDisable(true);
            } else {
                const requiredAddons = selectedAddons.filter((item) => {
                    const addonCategory = isRequiredAddoncat.find(
                        (addoncat: AddonCategory) =>
                            addoncat.id === item.addon_categories_id
                    );
                    if (addonCategory?.is_required) {
                        return item;
                    } else return null;
                });
                requiredAddons.length === isRequiredAddoncat.length
                    ? setDisable(false)
                    : setDisable(true);
            }
        } else {
            setDisable(false);
        }
    }, [selectedAddons, validAddonCategories]);

    const addMenuQuantity = () => {
        setValue(value + 1);
    };

    const reduceMenuQuantity = () => {
        value === 1 ? setValue(1) : setValue(value - 1);
    };

    const addToCart = () => {
        setOrderData({
            ...orderdata,
            cart: [
                ...orderdata.cart,
                {
                    id: generateRandomId(),
                    menu: currentMenu,
                    addons: selectedAddons,
                    quantity: value,
                },
            ],
        });
        router.push({ pathname: "/order", query });
    };

    if (!currentMenu) return;
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                p: 4,
            }}
        >
            <h1>{currentMenu.name}</h1>
            <AddonCategoriesDisplay
                validAddonCategories={validAddonCategories}
                validAddons={validAddons}
                selectedAddons={selectedAddons}
                setSelectedAddons={setSelectedAddons}
            />
            <QuantitySelector
                value={value}
                addMenuQuantity={addMenuQuantity}
                reduceMenuQuantity={reduceMenuQuantity}
            />
            <Button
                variant="contained"
                sx={{ mt: 3, width: "fit-content" }}
                disabled={disable}
                onClick={addToCart}
            >
                Add to cart
            </Button>
        </Box>
    );
};
export default Menu;
