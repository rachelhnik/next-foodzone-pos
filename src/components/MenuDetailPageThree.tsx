import { config } from "@/config/Config";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { Box, Typography, Select, MenuItem, Button } from "@mui/material";
import { useContext, useState } from "react";

const MenuDetailPageThree = (menuId: any) => {
    const { addonCategories, addons, fetchData } =
        useContext(BackofficeContext);
    const currentMenuId = menuId.menuId;

    const [selectedAddonCategoryId, setSelectdAddonCategoryId] = useState("");

    const [selectedAddonIds, setSelectdAddonIds] = useState<number[]>([]);

    const addAddonData = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/menus-addoncat-addons/${currentMenuId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    selectedAddonCategoryId: selectedAddonCategoryId,
                    selectedAddonIds: selectedAddonIds,
                }),
            }
        );
        fetchData();
        setSelectdAddonIds([]);
        setSelectdAddonCategoryId("");
    };

    return (
        <>
            {
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 300,
                        margin: "0 auto",
                    }}
                >
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Select Addon Category and addons pair
                    </Typography>

                    <Typography variant="caption" sx={{ mt: 1 }}>
                        Category
                    </Typography>
                    <Select
                        sx={{}}
                        value={
                            selectedAddonCategoryId
                                ? selectedAddonCategoryId
                                : ""
                        }
                        size="small"
                        label="select categoty"
                        onChange={(evt) =>
                            setSelectdAddonCategoryId(String(evt.target.value))
                        }
                    >
                        {addonCategories.map((addoncat) => (
                            <MenuItem key={addoncat.id} value={addoncat.id}>
                                {addoncat.name}
                            </MenuItem>
                        ))}
                    </Select>

                    <Typography variant="caption" sx={{ mt: 2 }}>
                        Addons
                    </Typography>
                    <Select
                        multiple
                        value={selectedAddonIds}
                        disabled={selectedAddonCategoryId ? false : true}
                        label="select categoty"
                        onChange={(evt) => {
                            const values = evt.target.value as number[];
                            setSelectdAddonIds(values);
                        }}
                    >
                        {addons
                            .filter(
                                (addon) =>
                                    String(addon.addon_categories_id) ===
                                    selectedAddonCategoryId
                            )
                            .map((data) => (
                                <MenuItem key={data.id} value={data.id}>
                                    {data.name}
                                </MenuItem>
                            ))}
                    </Select>
                    <Button
                        variant="contained"
                        sx={{ margin: "auto", mt: 2, width: 150 }}
                        onClick={addAddonData}
                    >
                        Add
                    </Button>
                </Box>
            }
        </>
    );
};
export default MenuDetailPageThree;
