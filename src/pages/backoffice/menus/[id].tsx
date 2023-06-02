import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Layout from "@/components/Layout";
import {
    Button,
    Chip,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";

import FileDropZone from "@/components/FileDropZone";

import MenusData from "@/typings/Types";

import { useRouter } from "next/router";
import { BackofficeContext } from "../../../contexts/BackofficeContext";
import { config } from "@/config/Config";
import { getselectedLocationId } from "@/utils";

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
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    const menuId = router.query.id as string;
    const branchId = getselectedLocationId();
    const currentenuCategoriesIds = branchesMenucategoriesMenus
        .filter(
            (data) =>
                String(data.menu_id) === menuId &&
                String(data.branch_id) === branchId
        )
        .map((data) => data.menucategory_id);

    const newMenuCategories = menuCategories.filter(
        (data) => !currentenuCategoriesIds.includes(data.id as number)
    );
    const currentMenuCategories = menuCategories.filter((data) =>
        currentenuCategoriesIds.includes(data.id as number)
    );

    let menu: MenusData | undefined;

    if (menuId) {
        menu = menus.find((menu) => String(menu.id) === menuId);
    }

    const [updatedMenu, setUpdatedMenu] = React.useState({
        name: menu?.name,
        price: menu?.price,
        asset_url: menu?.asset_url,
        description: menu?.description,
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
            }
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
        } catch (error) {
            return null;
        }
    };

    const addMenuCategory = async () => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/menus-menucats/${menuId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    menuCatIds: selectedMenuCategoryIds,
                    branchId: branchId,
                }),
            }
        );
        fetchData();
        setSelectedMenuCategoryIds([]);
    };
    const deleteMenuCategory = async (menucatId: number) => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/menus-menucats?menuId=${menuId}`,
            {
                method: "DELETE",
            }
        );
        fetchData();
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
                    <Tab label="update menucategory data" />
                    <Tab label="add addon datas for menu" />
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
                                    variant="outlined"
                                    defaultValue={updatedMenu.name}
                                    sx={{ mb: 2 }}
                                    onChange={(evt) => {
                                        const values = evt.target.value;
                                        setUpdatedMenu({
                                            ...updatedMenu,
                                            name: evt.target.value,
                                        });
                                    }}
                                />
                                <Typography variant="caption">Price</Typography>
                                <TextField
                                    variant="outlined"
                                    type="number"
                                    defaultValue={updatedMenu.price}
                                    sx={{ mb: 2 }}
                                    onChange={(evt) =>
                                        setUpdatedMenu({
                                            ...updatedMenu,
                                            price: parseInt(
                                                evt.target.value,
                                                10
                                            ),
                                        })
                                    }
                                />
                                <Typography variant="caption">
                                    Description
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
                                    onClick={updateMenu}
                                    sx={{
                                        width: 300,
                                        margin: "auto",
                                        mt: 2,
                                    }}
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
                            {currentMenuCategories.map((data) => (
                                <Chip
                                    label={data.name}
                                    sx={{ mb: 1, width: 200 }}
                                    key={data.id}
                                    onDelete={(id) =>
                                        deleteMenuCategory(data.id as number)
                                    }
                                />
                            ))}
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
                                {newMenuCategories.map((menucat) => (
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
