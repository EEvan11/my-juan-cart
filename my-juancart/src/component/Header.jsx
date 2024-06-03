import React from "react";
import {Layout, Menu, theme } from 'antd';
const { Nav} = Layout;

const menuLabels = [
  'Home',
  'About',
  'Services',
  'Contact'
];


const items = menuLabels.map((label, index) => ({
  key: index + 1,
  label: label,
}));

const Header = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Nav
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Nav>
    </Layout>
  );
};

export default Header;




