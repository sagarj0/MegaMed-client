import React from "react";
import { Col, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/component/navbar";
import { FooterComponent } from "@/component/footer";

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const {
    token: { borderRadius },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100dvh", width: "100%", position: "relative" }}>
      {/* Video Background */}
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
          zIndex: 0, // Keep video behind content
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      <Header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          padding: 0,
          background: "transparent",
          backdropFilter: "blur(8px)",
        }}
      >
        <Navbar />
      </Header>

      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        style={{
          position: "absolute",
          top: 64,
          padding: 4,
        }}
      >
        <Layout
          style={{
            gap: 4,
            marginInline: "auto",
            height: "100%",
            width: "100%",
            background: "rgba(255, 255, 255, 0.5)", // Glass effect
            backdropFilter: "blur(8px)", // Glass blur
            borderRadius, // Matches theme's border radius
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
            overflow: "auto",
          }}
        >
          <Content
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 32,
              width: "100%",
              minHeight: "calc(100vh - 64px)",
              borderRadius,
              position: "relative",
            }}
          >
            <div style={{ flex: 1, width: "100%", paddingInline: 80, paddingBlock: 40 }}>
              <Outlet />
            </div>

            <Footer
              style={{
                minWidth: "calc(100vw - 8px - var(--scrollbar-width))", //col padding and scrollbar width
                background: "var(--primary-color)",
              }}
            >
              <FooterComponent />
            </Footer>
          </Content>
        </Layout>
      </Col>
    </Layout>
  );
};

export default MainLayout;
