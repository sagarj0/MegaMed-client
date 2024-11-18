import React from "react";
import { Col, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
// import { Navbar } from "../../component/navbar";

const { Header, Content } = Layout;

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadius },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100dvh", width: "100%" }}>
      <Header
        style={{
          padding: 0,
        }}
      >
        {/* <Navbar /> */}
      </Header>

      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        lg={{ span: 12, offset: 6 }}
        xxl={{ span: 10, offset: 7 }}
        style={{
          padding: 4,
        }}
      >
        <Layout
          style={{
            gap: 4,
            marginInline: "auto",
            height: "100%",
          }}
        >
          <Content
            style={{
              padding: 20,
              width: "100%",
              height: "calc(100dvh - 64px - 8px)",
              overflowY: "auto",
              background: colorBgContainer,
              borderRadius,
              scrollbarColor: "#f0f0f0",
              scrollbarWidth: "thin",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Col>
    </Layout>
  );
};

export default MainLayout;
