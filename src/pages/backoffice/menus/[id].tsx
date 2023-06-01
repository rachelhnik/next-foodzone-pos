import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Layout from "@/components/Layout";
import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";

import FileDropZone from "@/components/FileDropZone";

import MenusData from "@/typings/Types";

import { useRouter } from "next/router";
import { BackofficeContext } from "../../../contexts/BackofficeContext";
import { config } from "@/config/Config";
import { useState } from "react";

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    const {
        menus,
        branchesMenucategoriesMenus,
        menuCategories,
        addonCategories,
        addons,
        fetchData,
    } = React.useContext(BackofficeContext);
    const [menuImage, setMenuImage] = React.useState<File>();

    const [selectedAddonCategoryId, setSelectdAddonCategoryId] =
        React.useState("");

    const [selectedAddonIds, setSelectdAddonIds] = React.useState<number[]>([]);
    const [selectedMenuCategoryIds, setSelectedMenuCategoryIds] =
        React.useState<number[]>([]);

    const router = useRouter();

    // finding current menu
    const menuId = router.query.id as string;

    let menu: MenusData | undefined;

    if (menuId) {
        menu = menus.find((menu) => String(menu.id) === menuId);

        if (menu) {
            const branchMenu = branchesMenucategoriesMenus.find(
                (item) => item.menu_id === menu?.id
            );
        }
    }
    const [updatedMenu, setUpdatedMenu] = useState({
        name: "",
        price: 0,
        asset_url: "",
        description: "",
    });

    React.useEffect(() => {
        if (menu) {
            setUpdatedMenu({
                name: menu.name,
                price: menu.price,
                asset_url: "",
                description: menu.description,
            });
        }
    }, [menu]);
    const onFileSelected = (files: File[]) => {
        setMenuImage(files[0]);
    };
    // update the menu data s/a name,price,image
    const updateMenu = async () => {
        try {
            if (menuImage) {
                const formData = new FormData();

                formData.append("files", menuImage as Blob);
                const response = await fetch(
                    `${config.backofficeApiBaseUrl}/assets`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );
                const responseJSON = await response.json();
                updatedMenu.asset_url = responseJSON.assetUrl;
                const responseUpdateMenu = await fetch(
                    `${config.backofficeApiBaseUrl}/menus/${menu?.id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(updatedMenu),
                    }
                );
                fetchData();
                router.push("/backoffice/menus");
            }
        } catch (error) {
            return null;
        }
    };

    const categories = menuCategories.map((menucat) => ({
        title: menucat.name,
    }));

    const addMenuCategory = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/menus-menucats/${menuId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ menuCatIds: selectedMenuCategoryIds }),
            }
        );
        fetchData();
        setSelectedMenuCategoryIds([]);
    };

    const addAddonData = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/menus-addoncat-addons/${menuId}`,
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
        <Layout>
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="update menu data" />
                    <Tab label="update menucategory data " />
                    <Tab label="update addons datas " />
                </Tabs>

                <TabPanel value={value} index={0}>
                    {menu ? (
                        <Box
                            sx={{
                                display: "flex",
                                maxWidth: 300,
                                margin: "0 auto",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    mr: 2,
                                }}
                            >
                                <Typography variant="caption">Name</Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    autoFocus
                                    defaultValue={updatedMenu.name}
                                    sx={{ mb: 2 }}
                                    onChange={(evt) => {
                                        setUpdatedMenu({
                                            ...updatedMenu,
                                            name: evt.target.value,
                                        });
                                    }}
                                />
                                <Typography variant="caption">Price</Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    type="number"
                                    autoFocus
                                    defaultValue={updatedMenu.price}
                                    sx={{ mb: 2 }}
                                    onChange={(evt) => {
                                        setUpdatedMenu({
                                            ...updatedMenu,
                                            price: parseInt(
                                                evt.target.value,
                                                10
                                            ),
                                        });
                                    }}
                                />
                                <Typography variant="caption">
                                    description
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    defaultValue={updatedMenu.description}
                                    sx={{ mb: 2 }}
                                    onChange={(evt) => {
                                        setUpdatedMenu({
                                            ...updatedMenu,
                                            description: evt.target.value,
                                        });
                                    }}
                                />

                                <Typography>change Image ?</Typography>
                                <FileDropZone onFileSelected={onFileSelected} />
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: 300,
                                        margin: "auto",
                                        mt: 2,
                                    }}
                                    onClick={updateMenu}
                                >
                                    Update
                                </Button>
                            </Box>
                        </Box>
                    ) : (
                        <Typography>Menu not found</Typography>
                    )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                maxWidth: 300,
                                margin: "0 auto",
                            }}
                        >
                            <Typography variant="caption">
                                Select menu categories
                            </Typography>

                            <Select
                                multiple
                                value={selectedMenuCategoryIds}
                                label="select categoty"
                                onChange={(evt) => {
                                    const values = evt.target.value as number[];
                                    setSelectedMenuCategoryIds(values);
                                }}
                            >
                                {menuCategories.map((menucat) => (
                                    <MenuItem
                                        key={menucat.id}
                                        value={menucat.id}
                                    >
                                        {menucat.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Button
                                variant="contained"
                                sx={{ margin: "auto", mt: 2, width: 150 }}
                                onClick={addMenuCategory}
                            >
                                Add
                            </Button>
                        </Box>
                    }
                </TabPanel>
                <TabPanel value={value} index={2}>
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
                                    setSelectdAddonCategoryId(
                                        String(evt.target.value)
                                    )
                                }
                            >
                                {addonCategories.map((addoncat) => (
                                    <MenuItem
                                        key={addoncat.id}
                                        value={addoncat.id}
                                    >
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
                                disabled={
                                    selectedAddonCategoryId ? false : true
                                }
                                label="select categoty"
                                onChange={(evt) => {
                                    const values = evt.target.value as number[];
                                    setSelectdAddonIds(values);
                                }}
                            >
                                {addons
                                    .filter(
                                        (addon) =>
                                            String(
                                                addon.addon_categories_id
                                            ) === selectedAddonCategoryId
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
                </TabPanel>
            </Box>
        </Layout>
    );
}
