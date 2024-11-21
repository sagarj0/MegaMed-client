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

      {/* Fixed Navbar */}
      <Header
        style={{
          position: "fixed", // Fix the navbar at the top
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10, // Ensure it stays above other content
          padding: 0,
          background: "transparent", // Slightly transparent background
          backdropFilter: "blur(8px)", // Glass effect for the header
        }}
      >
        <Navbar />
      </Header>

      {/* Main Content */}
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
              flexDirection: "column", // Stack Outlet and Footer vertically
              paddingTop: 32,
              width: "100%",
              minHeight: "calc(100vh - 64px)", // Deduct navbar height
              borderRadius,
              position: "relative",
            }}
          >
            {/* Outlet Content */}
            <div style={{ flex: 1 }}>
              <Outlet />
            </div>

            {/* Footer */}
            <Footer
              style={{
                width: "100%", // Ensure full width
                background: "var(--primary-color)", // Customize background color
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
