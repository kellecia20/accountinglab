import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const AppSider = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to="/chart-of-account">Chart Of Account</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/journal-entry">Journal Entry</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/WIP">WIP</Link>
        </Menu.Item>
        <Menu.Item key="4">
            <Link to="/WIP">WIP</Link>
        </Menu.Item>
        <Menu.Item key="5">
            <Link to="/WIP">WIP</Link>
        </Menu.Item>
        <Menu.Item key="6">
            <Link to="/WIP">WIP</Link>
        </Menu.Item>
        <Menu.Item key="7">
            <Link to="/WIP">WIP</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSider;
