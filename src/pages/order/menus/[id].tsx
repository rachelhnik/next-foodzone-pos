import QuantitySelector from "@/components/QuantitySelector";
import ViewCartBar from "@/components/ViewCartBar";
import { OrderAppContext } from "@/contexts/OrderAppContext";
import { getAddonCategoriesByMenuId } from "@/utils";
import {
    Box,
    Button,
    Checkbox,
    Chip,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
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
        menucategories,
        addons,
        addoncategories,
        menuAddonCategories,
        setOrderData,

        orderlines,
    } = useContext(OrderAppContext);
    const { ...orderdata } = useContext(OrderAppContext);

    const [value, setValue] = useState(1);
    console.log(value);
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
    const renderAddons = (addonCategory: AddonCategory) => {
        const addons = validAddons.filter(
            (addon) => addon.addon_categories_id === addonCategory.id
        );

        return addons.map((item) => {
            return (
                <Box key={item.id}>
                    <FormControlLabel
                        value={item.name}
                        control={
                            addonCategory.is_required ? (
                                <Radio
                                    onChange={(evt, value) =>
                                        handleAddonSelect(value, item)
                                    }
                                />
                            ) : (
                                <Checkbox
                                    onChange={(evt, value) =>
                                        handleAddonSelect(value, item)
                                    }
                                />
                            )
                        }
                        label={item.name}
                    />
                </Box>
            );
        });
    };

    useEffect(() => {
        const hasAddoncatWithRequired = validAddonCategories.filter(
            (item) => item.is_required === true
        );

        if (hasAddoncatWithRequired.length) {
            if (!selectedAddons.length) {
                setDisable(true);
            } else {
                const requiredAddons = selectedAddons.filter((item) => {
                    const addonCategory = hasAddoncatWithRequired.find(
                        (addoncat) => addoncat.id === item.addon_categories_id
                    );
                    if (addonCategory?.is_required) {
                        return item;
                    } else return null;
                });
                requiredAddons.length ? setDisable(false) : setDisable(true);
            }
        } else {
            setDisable(false);
        }
    }, [selectedAddons, validAddonCategories]);

    const handleAddonSelect = (selected: boolean, addon: Addon) => {
        const relatedAddonCategory = addoncategories.find(
            (item) => item.id === addon.addon_categories_id
        );

        if (relatedAddonCategory?.is_required === true) {
            const otherAddonToReplace = selectedAddons.find(
                (item) => item.addon_categories_id === relatedAddonCategory.id
            );
            if (!otherAddonToReplace) {
                setSelectedAddons([...selectedAddons, addon]);
            } else {
                const newSelectedAddons = selectedAddons.filter(
                    (item) => item.id !== otherAddonToReplace.id
                );
                newSelectedAddons.push(addon);
                setSelectedAddons(newSelectedAddons);
            }
        } else {
            if (selected) {
                setSelectedAddons([...selectedAddons, addon]);
            } else {
                const newSelectedAddons = selectedAddons.filter(
                    (selectedAddon) => selectedAddon.id !== addon.id
                );
                setSelectedAddons(newSelectedAddons);
            }
        }
    };

    const addMenuQuantity = () => {
        setValue(value + 1);
    };

    const reduceMenuQuantity = () => {
        value === 1 ? setValue(1) : setValue(value - 1);
    };

    const addToCart = () => {
        setOrderData({
            ...orderdata,
            orderlines: [
                ...orderdata.orderlines,
                { currentMenu, value, selectedAddons },
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
            <Box>
                {validAddonCategories.map((item) => {
                    return (
                        <Box key={item.id} sx={{ mb: 2 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "300px",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ userSelect: "none" }}>
                                    {item.name}
                                </Typography>
                                <Chip
                                    label={
                                        item.is_required
                                            ? "Required"
                                            : "Optional"
                                    }
                                />
                            </Box>
                            <Box>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        {renderAddons(item)}
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
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
            <ViewCartBar value={value} />
        </Box>
    );
};
export default Menu;
