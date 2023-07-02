import { OrderAppContext } from "@/contexts/OrderAppContext";
import {
    Box,
    Typography,
    Chip,
    FormControl,
    RadioGroup,
    Checkbox,
    FormControlLabel,
    Radio,
} from "@mui/material";
import {
    addon_categories as AddonCategory,
    addons as Addon,
} from "@prisma/client";
import { useContext } from "react";
interface Props {
    validAddonCategories: AddonCategory[];
    validAddons: Addon[];
    selectedAddons: Addon[];
    setSelectedAddons: any & Props;
}
const AddonCategoriesDisplay = ({
    validAddonCategories,
    validAddons,
    selectedAddons,
    setSelectedAddons,
}: Props) => {
    const { addoncategories } = useContext(OrderAppContext);

    const renderAddons = (addonCategory: AddonCategory) => {
        const addons = validAddons.filter(
            (addon) => addon.addon_categories_id === addonCategory.id
        );

        return addons.map((item) => {
            return (
                <Box
                    key={item.id}
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <FormControlLabel
                        value={item.name}
                        control={
                            addonCategory.is_required ? (
                                <Radio
                                    checked={
                                        selectedAddons.find(
                                            (addon) => addon.id === item.id
                                        )
                                            ? true
                                            : false
                                    }
                                    onChange={(evt, value) => {
                                        handleAddonSelect(value, item);
                                    }}
                                />
                            ) : (
                                <Checkbox
                                    checked={
                                        selectedAddons.find(
                                            (addon) => addon.id === item.id
                                        )
                                            ? true
                                            : false
                                    }
                                    onChange={(evt, value) =>
                                        handleAddonSelect(value, item)
                                    }
                                />
                            )
                        }
                        label={item.name}
                    />
                    <Typography>{item.price}</Typography>
                </Box>
            );
        });
    };

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
    return (
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
                                    item.is_required ? "Required" : "Optional"
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
    );
};

export default AddonCategoriesDisplay;
