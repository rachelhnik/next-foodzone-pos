import AddonCategoriesDisplay from "@/components/AddonCategoriesDisplay";
import QuantitySelector from "@/components/QuantitySelector";
import { OrderAppContext } from "@/contexts/OrderAppContext";
import { getcartItemToEdit, getAddonCategoriesByMenuId } from "@/utils";
import { Box, Button } from "@mui/material";
import { addons as Addon } from "@prisma/client";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const UpdateCartMenus = () => {
    const router = useRouter();
    const query = router.query;
    const menuId = Number(router.query.id as string);
    const {
        menus,
        addons,
        addoncategories,
        menuAddonCategories,
        setOrderData,
        cart,
    } = useContext(OrderAppContext);
    const { ...orderdata } = useContext(OrderAppContext);
    const cartItemIdToEdit = getcartItemToEdit();
    const cartItemToEdit = cart.find((item) => item.id === cartItemIdToEdit);

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

    const addMenuQuantity = () => {
        setValue(value + 1);
    };

    const reduceMenuQuantity = () => {
        value === 1 ? setValue(1) : setValue(value - 1);
    };
    const updateCart = () => {
        if (cartItemToEdit) {
            const otherCartItem = cart.filter(
                (item) => item.id !== cartItemToEdit.id
            );

            const newCart = [
                ...otherCartItem,
                {
                    id: cartItemToEdit.id,
                    menu: cartItemToEdit.menu,
                    addons: selectedAddons,
                    quantity: value,
                },
            ];
            setOrderData({ ...orderdata, cart: newCart });
            localStorage.removeItem("cartItemtoedit");
            router.push({ pathname: "/order/cart", query });
        }
    };

    useEffect(() => {
        if (cartItemToEdit) {
            const selectedAddon = cart.find(
                (item) => item.menu.id === cartItemToEdit.menu.id
            )?.addons as Addon[];
            setSelectedAddons(selectedAddon);
            setValue(cartItemToEdit.quantity);
        }
    }, [cartItemToEdit, cart]);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                p: 4,
            }}
        >
            <h1>{currentMenu?.name}</h1>
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
                onClick={updateCart}
            >
                "Update"
            </Button>
        </Box>
    );
};

export default UpdateCartMenus;
