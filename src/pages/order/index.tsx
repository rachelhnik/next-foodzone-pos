import MenuCard from "@/components/MenuCard";
import { OrderAppContext } from "@/contexts/OrderAppContext";
import { getMenusByMenucategoryId } from "@/utils";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { menu_categories as MenuCategory } from "@prisma/client";
import { useRouter } from "next/router";

import { useContext, useEffect, useState } from "react";

const Order = () => {
    const router = useRouter();
    const query = router.query;
    const selectedBranchId = query.branchId as string;
    const { menucategories, menus, branchesMenucategoriesMenus } =
        useContext(OrderAppContext);
    const [value, setValue] = useState(0);

    const [selectedMenucategory, setSelectedMenucategory] =
        useState<MenuCategory>();

    useEffect(() => {
        if (menucategories) {
            setSelectedMenucategory(menucategories[0]);
        }
    }, [menucategories]);

    const renderMenus = () => {
        const isValid = selectedBranchId && selectedMenucategory;
        if (!isValid) return;
        const menuCategoryId = selectedMenucategory.id;
        const validMenus = getMenusByMenucategoryId(
            menuCategoryId,
            branchesMenucategoriesMenus,
            menus,
            Number(selectedBranchId)
        );

        return validMenus.map((item) => {
            const href = { pathname: `/order/menus/${item.id}`, query };
            return <MenuCard key={item.id} menu={item} href={href} />;
        });
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={(evt, value) => {
                        setValue(value);
                    }}
                    aria-label="basic tabs example"
                >
                    {menucategories.map((data, i) => (
                        <Tab
                            key={data.id}
                            label={data.name}
                            onClick={() => setSelectedMenucategory(data)}
                        />
                    ))}
                </Tabs>
            </Box>
            {renderMenus()}
        </Box>
    );
};

export default Order;
