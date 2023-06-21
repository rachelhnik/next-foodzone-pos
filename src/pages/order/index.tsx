import { OrderAppContext } from "@/contexts/OrderAppContext";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import { useContext, useState } from "react";

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
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const Order = () => {
    const { menucategories, menus, branchesMenucategoriesMenus } =
        useContext(OrderAppContext);
    const [value, setValue] = useState(0);

    const currentMenucatId = menucategories.find((item, i) => i === value)?.id;

    const menusForCurrentmenucat = branchesMenucategoriesMenus.filter(
        (item) => item.menucategory_id === currentMenucatId
    );
    const menusIds = menusForCurrentmenucat.map((item) => item.menu_id);

    const currentMenus = menus.filter((menu) => menusIds.includes(menu.id));

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {menucategories.map((data, i) => (
                        <Tab
                            key={data.id}
                            label={data.name}
                            {...a11yProps(i)}
                        />
                    ))}
                </Tabs>
                <Box sx={{ display: "flex" }}>
                    {currentMenus.map((menu, value) => (
                        <TabPanel key={menu.id} value={value} index={value}>
                            {menu.name}
                        </TabPanel>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Order;
