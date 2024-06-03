import React from 'react';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;  // Import Header correctly

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

const AppHeader = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header  // Use Header instead of Nav
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
      </Header>
    </Layout>
  );
};

export default AppHeader;
