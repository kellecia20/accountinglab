import { Flex, Button, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

import LogoText from "./LogoText";

const AppHeader = () => {
    const [selectedKey, setSelectedKey] = useState("");

    return (
        <Flex justify={"space-between"} align={"center"}>
            <Flex justify={"flex-start"} align={"center"} gap={"20px"}>
                <LogoText />
            </Flex>
            <Flex justify={"flex-end"} align={"center"} gap={"15px"}>
                <Menu mode={ "horizontal"} style={{ textAlign: "center" }} selectedKeys={[selectedKey]}
                    defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/support">Support</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/wip">Work in Progress</Link></Menu.Item>
                </Menu>
            </Flex>
        </Flex>
    );
};

export default AppHeader;
