/* import React, { useState } from 'react';
import { Layout } from 'antd';
import '../../assets/css/adminPanelStyles.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const { Content } = Layout; */

/* type TProps = {
  children: JSX.Element;
}; */

const AdminPanel = (/* { children }: TProps */) => {
  /* const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggle = (): void => {
    setCollapsed(!collapsed);
  }; */

  return (
    <>
      {/* <Layout style={{ height: '100vh' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout className="site-layout">
        <Header collapsed={collapsed} toggle={toggle} />
        <Content
          className="c-content"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout> */}
    </>
  );
};

export default AdminPanel;
