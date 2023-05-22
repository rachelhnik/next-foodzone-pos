import { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import { AppContext } from "../contexts/AppContext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardMedia,
    Divider,
    FormControl,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import MenusData from "../typings/Types";

import { useNavigate, useParams } from "react-router-dom";
import { config } from "../config/Config";
import FileDropZone from "./FileDropZone";
import AddonCategories from "./AddonCategories";

export default function MenuDetail() {
    const {
        menus,
        branchesMenus,
        menuCategories,
        addonCategories,
        addons,
        fetchData,
    } = useContext(AppContext);
    const [menuImage, setMenuImage] = useState<File>();

    const [selectedAddonCategoryId, setSelectdAddonCategoryId] = useState("");

    const [selectedAddonIds, setSelectdAddonIds] = useState<number[]>([]);
    const [selectedMenuCategoryIds, setSelectedMenuCategoryIds] = useState<
        number[]
    >([]);
    const { menuId } = useParams();
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    let menu: MenusData | undefined;
    if (menuId) {
        menu = menus.find((menu) => menu.id === parseInt(menuId, 10));
        if (menu) {
            const menuLocation = branchesMenus.find(
                (item) => item.menu_id === menu?.id
            );
            if (menuLocation) {
                menu.isAvailable = menuLocation.is_available;
            }
        }
    }
    const [updatedMenu, setUpdatedMenu] = useState({
        name: "",
        price: 0,
        asset_url: "",
    });

    useEffect(() => {
        if (menu) {
            setUpdatedMenu({
                name: menu.name,
                price: menu.price,
                asset_url: "",
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
                const response = await fetch(`${config.apiBaseUrl}/assets`, {
                    method: "POST",

                    body: formData,
                });
                const responseJSON = await response.json();
                updatedMenu.asset_url = responseJSON.assetUrl;
                const responseUpdateMenu = await fetch(
                    `${config.apiBaseUrl}/menus/${menu?.id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${accessToken}`,
                        },
                        body: JSON.stringify(updatedMenu),
                    }
                );
                fetchData();
                navigate("/menus");
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
            `${config.apiBaseUrl}/menus/menus-menucats/${menuId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ menuCatIds: selectedMenuCategoryIds }),
            }
        );
        fetchData();
        setSelectedMenuCategoryIds([]);
    };

    const addAddonData = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/menus/menus-addoncat-addons/${menuId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
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
            <Box
                sx={{
                    maxWidth: 600,
                    margin: "0 auto",
                    mt: 5,
                }}
            >
                {menu ? (
                    <Box
                        sx={{
                            display: "flex",
                            maxWidth: 1024,
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
                                defaultValue={menu.name}
                                sx={{ mb: 2 }}
                                onChange={(evt) =>
                                    setUpdatedMenu({
                                        ...updatedMenu,
                                        name: evt.target.value,
                                    })
                                }
                            />
                            <Typography variant="caption">Price</Typography>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type="number"
                                defaultValue={menu.price}
                                sx={{ mb: 2 }}
                                onChange={(evt) =>
                                    setUpdatedMenu({
                                        ...updatedMenu,
                                        price: parseInt(evt.target.value, 10),
                                    })
                                }
                            />

                            <Typography>change Image ?</Typography>
                            <FileDropZone onFileSelected={onFileSelected} />
                            <Button
                                variant="contained"
                                onClick={updateMenu}
                                sx={{
                                    width: 200,
                                    margin: "auto",
                                    mt: 2,
                                }}
                            >
                                Update
                            </Button>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: 300,
                                ml: 2,
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
                    </Box>
                ) : (
                    <h1>Menu not found</h1>
                )}
            </Box>
        </Layout>
    );
}
