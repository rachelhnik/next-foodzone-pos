import { Box, Typography, TextField, Button } from "@mui/material";
import FileDropZone from "./FileDropZone";
import { BackofficeContext } from "@/contexts/BackofficeContext";
import { useContext, useState } from "react";
import type { menus as MenusData } from "@prisma/client";
import { config } from "@/config/Config";
import { useRouter } from "next/router";

const MenuDetailPageOne = (menuId: any) => {
    const {
        menus,

        fetchData,
    } = useContext(BackofficeContext);
    const router = useRouter();
    const currentMenuId = menuId.menuId;
    let menu: MenusData | undefined;
    menu = menus.find((menu) => String(menu.id) === currentMenuId);
    const [updatedMenu, setUpdatedMenu] = useState({
        name: menu?.name,
        price: menu?.price,
        asset_url: "",
        description: menu?.description,
    } as MenusData);
    const [menuImage, setMenuImage] = useState<File>();
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

    return (
        <>
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
                            onChange={(evt) => {
                                setUpdatedMenu({
                                    ...updatedMenu,
                                    price: parseInt(evt.target.value, 10),
                                });
                            }}
                        />
                        <Typography variant="caption">description</Typography>
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
        </>
    );
};

export default MenuDetailPageOne;
