import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Layout from "@/components/Layout";

import { useRouter } from "next/router";
import MenuDetailPageOne from "@/components/MenuDetailPageOne";
import MenuDetailPageTwo from "@/components/MenuDetailPageTwo";
import MenuDetailPageThree from "@/components/MenuDetailPageThree";

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

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const router = useRouter();

    // finding current menu
    const menuId = router.query.id as string;

    return (
        <Layout>
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="update menu data" />

                    <Tab label="update menucategory data " />
                    <Tab label="update addons datas " />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <MenuDetailPageOne menuId={menuId} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <MenuDetailPageTwo menuId={menuId} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MenuDetailPageThree menuId={menuId} />
                </TabPanel>
            </Box>
        </Layout>
    );
}
