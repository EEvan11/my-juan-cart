import React from 'react';
import { Layout, Menu, theme } from 'antd';
const { Header } = Layout;  

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
      <Header className="bg-gray-800 flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <img src="src/assets/logocart.png" alt="Logo" className="h-8 mr-4" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          className="flex-1"
          style={{ justifyContent: 'center' }}
        />
      </Header>
    </Layout>
  );
};

export default AppHeader;
