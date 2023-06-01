import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import Layout from "../../../components/Layout";
import { useContext } from "react";

import {
    BackofficeContext,
    AppContextType,
} from "../../../contexts/BackofficeContext";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { config } from "../../../config/Config";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { getselectedLocationId } from "@/utils";

const Menus = () => {
    const branchId = getselectedLocationId();

    const { fetchData, menus, branchesMenucategoriesMenus } =
        useContext(BackofficeContext);
    console.log(branchesMenucategoriesMenus, menus);

    const validMenusIds = branchesMenucategoriesMenus
        .filter((data) => String(data.branch_id) === branchId)
        .map((data) => data.menu_id);

    const filteredMenus = menus
        .filter((menu) => menu.id && validMenusIds.includes(menu.id))
        .flatMap((data) => data);

    const handleDelete = async (menuId: number | undefined) => {
        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/${menuId}`,
            {
                method: "DELETE",
            }
        );
        if (response.ok) fetchData();
    };

    const handleSoldOut = async (menuId: number | undefined) => {
        const currentBranchesData = branchesMenucategoriesMenus.map((data) => {
            if (
                data.menu_id === menuId &&
                String(data.branch_id) === branchId
            ) {
                return { ...data, is_available_menu: false };
            }
            return data;
        });

        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/sale/${menuId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    currentBranchesData,
                    branchId: branchId,
                }),
            }
        );

        fetchData();
    };
    const handleInstock = async (menuId: number | undefined) => {
        const currentBranchesData = branchesMenucategoriesMenus.map((data) => {
            if (
                data.menu_id === menuId &&
                String(data.branch_id) === branchId
            ) {
                return { ...data, is_available_menu: true };
            }
            return data;
        });

        const response = await fetch(
            `${config.backofficeApiBaseUrl}/menus/sale/${menuId}`,
            {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    currentBranchesData,
                    branchId: branchId,
                }),
            }
        );
        const updatedData = await response.json();
        fetchData();
    };

    return (
        <Layout title="Menus">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    m: "0 auto",
                    px: 4,
                }}
            >
                <Box sx={{ display: "flex", mt: 5 }}>
                    <Link
                        href={`/backoffice/menus/create`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <Box
                            sx={{
                                width: "200px",
                                height: "280px",
                                border: "2px dotted lightgray",
                                borderRadius: 2,
                                mr: 2,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                cursor: "pointer",
                                userSelect: "none",
                            }}
                        >
                            <AddIcon fontSize="large" />
                            <Typography>Add new menu</Typography>
                        </Box>
                    </Link>
                    {filteredMenus.map((menu) => (
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                mr: 2,
                            }}
                            key={menu.id}
                        >
                            <Link
                                href={`/backoffice/menus/${menu.id}`}
                                style={{
                                    textDecoration: "none",
                                    marginBottom: "1rem",
                                }}
                            >
                                <Card sx={{ width: 200, height: 280 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={menu && menu.asset_url}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {menu.name}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                        >
                                            {menu.description}
                                        </Typography>

                                        {branchesMenucategoriesMenus.find(
                                            (data) =>
                                                String(data.branch_id) ===
                                                    branchId &&
                                                data.menu_id === menu.id
                                        )?.is_available_menu === false ? (
                                            <Typography
                                                variant="h5"
                                                sx={{ color: "red", mt: 2 }}
                                            >
                                                SOLD OUT
                                            </Typography>
                                        ) : (
                                            <Typography
                                                variant="h5"
                                                sx={{ color: "green", mt: 2 }}
                                            >
                                                INSTOCK
                                            </Typography>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                            <DeleteForeverIcon
                                sx={{
                                    color: "red",
                                    position: "absolute",
                                    right: 0,
                                    bottom: 50,
                                }}
                                onClick={(evt) => handleDelete(menu.id)}
                            />

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                }}
                            >
                                <Button
                                    color="error"
                                    variant="outlined"
                                    size="small"
                                    onClick={() => handleSoldOut(menu.id)}
                                >
                                    Sold out
                                </Button>
                                <Button
                                    color="success"
                                    variant="outlined"
                                    size="small"
                                    onClick={() => handleInstock(menu.id)}
                                >
                                    Instock
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Layout>
    );
};

export default Menus;