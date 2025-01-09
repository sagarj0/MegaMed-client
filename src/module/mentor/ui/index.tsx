import React from "react";
import { BarChartOutlined, BarsOutlined, FormOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, MenuProps, Typography, Button, Dropdown, Row } from "antd";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import { MentorUrls } from "../util/urls";
import Logo from "@/component/logo";
import { properCase } from "@/helper/proper-case";
import { getKeyFromUrl } from "@/helper/key-from-url";
import useResponsiveDevice from "@/helper/hooks/use-responsive";
import useAuthHook from "@/module/auth/hook/useAuthHook";
import { UserAvatar } from "@/component/user-avatar";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  zIndex: 10,
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
  padding: "16px 0 16px 10px",
  boxShadow: "4px 0 4px -2px rgba(0, 0, 0, 0.1)",
};

const MentorLayout: React.FC = () => {
  const { logout, user } = useAuthHook({ checkToken: true, roleCheck: ["mentor", "admin"] });

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const selectedKey = getKeyFromUrl(pathname, 3);
  const { isMobile } = useResponsiveDevice();

  const title = properCase(selectedKey ? `manage ${selectedKey}` : "dashboard");

  const items: MenuProps["items"] = [
    {
      key: "dashboard",
      icon: <BarChartOutlined />,
      label: "Dashboard",
      onClick: () => navigate(MentorUrls.mentor),
    },

    {
      key: "questions",
      icon: <FormOutlined />,
      label: "Questions",
      onClick: () => navigate(MentorUrls.mentorquestions.viewAll),
    },
  ];

  return (
    <Layout hasSider>
      {!isMobile && (
        <Sider style={siderStyle} theme="light">
          <Logo style={{ bottom: 5, left: 45 }} />
          <Menu items={items} style={{ border: "none" }} selectedKeys={[selectedKey || "dashboard"]} />
          <Button
            onClick={logout}
            type="text"
            icon={<PoweroffOutlined />}
            style={{
              position: "absolute",
              bottom: 20,
              left: 5,
              width: "100%",
              justifyContent: "left",
            }}
          >
            Log Out
          </Button>
        </Sider>
      )}
      <Layout
        style={{
          width: isMobile ? "100vw" : "calc(200px - 100vw)",
          height: "100vh",
          marginLeft: isMobile ? 0 : 200,
        }}
      >
        <Header
          style={{
            background: colorBgContainer,
            boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.1)",
            position: "sticky",
            top: 0,
            zIndex: 10,
            paddingInline: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={4} style={{ marginBlock: 0 }}>
            {title}
          </Title>
          {isMobile ? (
            <Row align={"middle"}>
              <Link to={MentorUrls.mentorProfile}>
                <UserAvatar user={user} />
              </Link>
              <Dropdown overlay={<Menu items={items} selectedKeys={[selectedKey || "dashboard"]} />} trigger={["click"]}>
                <Button type="text" icon={<BarsOutlined />} />
              </Dropdown>
            </Row>
          ) : (
            <Link to={MentorUrls.mentorProfile}>
              <UserAvatar user={user} />
            </Link>
          )}
        </Header>

        <Content
          style={{
            margin: "10px auto",
            maxWidth: isMobile ? "100%" : "calc(100vw - 220px)",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              padding: 8,
              width: "100%",
              height: "100%",
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflow: "auto",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export { MentorLayout };
