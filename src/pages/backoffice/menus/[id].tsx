import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { menus as MenusData } from "@prisma/client";
import { useState } from "react";
import FileDropZone from "@/components/FileDropZone";
import { Typography } from "@mui/material";
import { config } from "@/config/Config";
import DeleteDialog from "@/components/DeleteDialog";
import { useSelector } from "react-redux";
import { appData } from "@/store/slices/appSlice";
import { useAppDispatch } from "@/store/hooks";
import { removeMenu, updateMenus } from "@/store/slices/menuSlice";
import { fetchBranchesMenucategoriesMenus } from "@/store/slices/branchesMenucategoriesMenuSlice";
import { getselectedLocationId } from "@/utils";
import DeleteButton from "@/components/buttons/DeleteButton";
import UpdateButton from "@/components/buttons/UpdateButton";
import TextFieldComponent from "@/components/textfields/TextFieldComponent";
import AutocompleteComponent from "@/components/autocomplete/AutoCompleteCompenet";

export default function CenteredTabs() {
    const { menus, addonCategories, menuAddonCategories } =
        useSelector(appData);
    const router = useRouter();
    const menuId = parseInt(router.query.id as string, 10);
    const branchId = getselectedLocationId() as string;
    let menu: MenusData | undefined;
    menu = menus.find((menu) => menu.id === menuId);

    const [menuImage, setMenuImage] = React.useState<File>();
    const onFileSelected = (files: File[]) => {
        setMenuImage(files[0]);
    };
    const dispatch = useAppDispatch();

    const selectedAddonCategoriesIds = menuAddonCategories
        .filter((item) => item.menu_id === menuId)
        .map((item) => item.addoncategory_id);
    const selectedAddonCategories = addonCategories.filter((addoncat) =>
        selectedAddonCategoriesIds.includes(addoncat.id)
    );

    const [updatedMenu, setUpdatedMenu] = React.useState({
        name: menu?.name,
        price: menu?.price,
        asset_url: "",
        description: menu?.description || "",
        addonCategories: selectedAddonCategories,
    });
    const [menuToRemove, setMenuToRemove] = useState<MenusData>();
    const [open, setOpen] = useState(false);

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
                        },
                        body: JSON.stringify(updatedMenu),
                    }
                );

                router.push("/backoffice/menus");
            }
            const responseUpdateMenu = await fetch(
                `${config.apiBaseUrl}/menus/${menu?.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedMenu),
                }
            );
            const updateMenuData = await responseUpdateMenu.json();
            dispatch(updateMenus(updateMenuData));
            dispatch(fetchBranchesMenucategoriesMenus(branchId));
            router.push("/backoffice/menus");
        } catch (error) {
            return null;
        }
    };

    const handleRemoveMenu = async () => {
        const response = await fetch(
            `${config.apiBaseUrl}/menus/${menuToRemove?.id}`,
            {
                method: "DELETE",
            }
        );
        const deletedMenu = await response.json();
        dispatch(removeMenu(deletedMenu));
        dispatch(fetchBranchesMenucategoriesMenus(branchId));
        router.push("/backoffice/menus");
    };

    const handleDelete = () => {
        setOpen(true);
        setMenuToRemove(menu);
    };

    return (
        <Layout>
            {menu ? (
                <Box
                    sx={{
                        display: "flex",
                        width: 900,
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            mr: 2,
                        }}
                    >
                        <TextFieldComponent
                            defaultValue={updatedMenu?.name}
                            handleOnChange={(evt: any) => {
                                setUpdatedMenu({
                                    ...updatedMenu,
                                    name: evt.target.value,
                                });
                            }}
                            label="Name"
                        />

                        <TextFieldComponent
                            defaultValue={updatedMenu?.price}
                            handleOnChange={(evt) => {
                                setUpdatedMenu({
                                    ...updatedMenu,
                                    price: parseInt(evt.target.value, 10),
                                });
                            }}
                            label="Price"
                        />

                        <TextFieldComponent
                            defaultValue={updatedMenu?.description}
                            handleOnChange={(evt) => {
                                setUpdatedMenu({
                                    ...updatedMenu,
                                    description: evt.target.value,
                                });
                            }}
                            label="Description"
                        />
                        <Typography>change Image ?</Typography>
                        <FileDropZone onFileSelected={onFileSelected} />
                        <AutocompleteComponent
                            options={addonCategories}
                            defaultValue={selectedAddonCategories}
                            handleOnChange={(evt, values) => {
                                setUpdatedMenu({
                                    ...updatedMenu,
                                    addonCategories: values,
                                });
                            }}
                            checkedData={updatedMenu}
                            label="addon categories"
                        />
                        <UpdateButton updateItem={updateMenu} />
                        <DeleteButton
                            handleDelete={handleDelete}
                            title="Menu"
                        />
                    </Box>
                    <DeleteDialog
                        title="Are you sure you want to delete this menu category?"
                        open={open}
                        setOpen={setOpen}
                        callback={handleRemoveMenu}
                    />
                </Box>
            ) : (
                <Typography>Menu not found</Typography>
            )}
        </Layout>
    );
}
