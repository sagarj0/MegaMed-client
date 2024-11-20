import React from "react";
import { Col, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/component/navbar";

const { Header, Content } = Layout;

const MainLayout: React.FC = () => {
  const {
    token: { borderRadius },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100dvh", width: "100%", position: "relative" }}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      <Header style={{ padding: 0 }}>
        <Navbar />
      </Header>

      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        lg={{ span: 20, offset: 2 }}
        xxl={{ span: 12, offset: 6 }}
        style={{
          padding: 4,
        }}
      >
        <Layout
          style={{
            gap: 4,
            marginInline: "auto",
            height: "100%",
            background: "rgba(255, 255, 255, 0.3)", // Glass effect
            backdropFilter: "blur(10px)", // Glass blur
            borderRadius, // Matches theme's border radius
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
            overflow: "auto",
          }}
        >
          <Content
            style={{
              position: "relative",
              padding: 20,
              width: "100%",
              height: "calc(100dvh - 64px - 8px)", // Adjust for header height
              borderRadius,
            }}
          >
            {/* Main Content */}
            <Outlet />
          </Content>
        </Layout>
      </Col>
    </Layout>
  );
};

export default MainLayout;
