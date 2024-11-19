import React from "react";
import { Col, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/component/navbar";
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
        <Navbar />
      </Header>

      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        lg={{ span: 18, offset: 3 }}
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
          }}
        >
          <Content
            style={{
              position: "relative", // For positioning the video
              padding: 20,
              width: "100%",
              height: "calc(100dvh - 64px - 8px)",
              overflow: "hidden", // Ensures video does not overflow
              background: colorBgContainer,
              borderRadius,
              scrollbarColor: "#f0f0f0",
              scrollbarWidth: "thin",
            }}
          >
            {/* Video as Background */}
            <video
              autoPlay
              muted
              loop
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
                backdropFilter: "blur(5px)",
              }}
            >
              <source src="/background.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>

            <div
              style={{
                position: "relative",
                zIndex: 2, // Ensures this content is above the video
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Col>
    </Layout>
  );
};

export default MainLayout;
