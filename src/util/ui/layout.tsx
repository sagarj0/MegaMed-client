import React from "react";
import { Col, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/component/navbar";
import { FooterComponent } from "@/component/footer";
import useFullScreen from "@/helper/hooks/useFullScreen";
import useResponsiveDevice from "@/helper/hooks/use-responsive";

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const {
    token: { borderRadius },
  } = theme.useToken();

  const { isFullScreen } = useFullScreen();
  const { md, sm, xs } = useResponsiveDevice();

  return (
    <Layout style={{ minHeight: "100dvh", width: "100%", padding: 0, position: "relative" }}>
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

      {!isFullScreen && (
        <Header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10,
            padding: 0,
            background: "transparent",
            backdropFilter: "blur(10px)",
            height: "fit-content",
          }}
        >
          <Navbar />
        </Header>
      )}

      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        style={{
          position: "absolute",
          top: isFullScreen ? 0 : 67,
          width: "100%",
        }}
      >
        <Layout
          style={{
            gap: isFullScreen ? 0 : 4,
            marginInline: isFullScreen ? 0 : "auto",
            height: "100%",
            width: "100%",
            background: "rgba(255, 255, 255, 0.9)", // Glass effect
            backdropFilter: "blur(8px)", // Glass blur
            borderRadius, // Matches theme's border radius
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
            overflow: isFullScreen ? "hidden" : "auto",
          }}
        >
          <Content
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: isFullScreen ? 0 : 32,
              width: "100%",
              minHeight: isFullScreen ? "100vh" : "calc(100vh - 67px)",
              borderRadius,
              position: "relative",
            }}
          >
            <div
              style={{
                // flex: 1,
                width: "100%",
                paddingInline: isFullScreen ? 0 : md ? 20 : sm || xs ? 16 : 80,
                paddingBlock: isFullScreen ? 0 : 40,
              }}
            >
              <Outlet />
            </div>

            {!isFullScreen && (
              <Footer
                style={{
                  minWidth: "calc(100vw - 12px - var(--scrollbar-width))", //col padding and scrollbar width
                  background: "var(--primary-color)",
                }}
              >
                <FooterComponent />
              </Footer>
            )}
          </Content>
        </Layout>
      </Col>
    </Layout>
  );
};

export default MainLayout;
