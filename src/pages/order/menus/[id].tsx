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
import { addon_categories as AddonCategory } from "@prisma/client";
import { useRouter } from "next/router";
import { useContext } from "react";

const Menu = () => {
    const router = useRouter();
    const menuId = Number(router.query.id as string);
    const {
        menus,
        menucategories,
        addons,
        addoncategories,
        menuAddonCategories,
    } = useContext(OrderAppContext);

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
        console.log(addons);
        return addons.map((item) => {
            return (
                <Box key={item.id}>
                    <FormControlLabel
                        value={item.name}
                        control={
                            addonCategory.is_required ? <Radio /> : <Checkbox />
                        }
                        label={item.name}
                    />
                </Box>
            );
        });
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
            <Button variant="contained" sx={{ mt: 3, width: "fit-content" }}>
                Add to cart
            </Button>
        </Box>
    );
};
export default Menu;
