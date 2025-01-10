import React, { useState } from "react";
import {
  BarChartOutlined,
  FormOutlined,
  KeyOutlined,
  PoweroffOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  SnippetsOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Typography, Button, Drawer, Row, MenuProps } from "antd";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import { AdminUrls } from "./urls";
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

const AdminLayout: React.FC = () => {
  const { logout, user } = useAuthHook({ checkToken: true, roleCheck: ["admin"] });
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const selectedKey = getKeyFromUrl(pathname, 3);
  const { isMobile } = useResponsiveDevice();

  const title = properCase(selectedKey ? `manage ${selectedKey}` : "dashboard");

  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawer = () => setDrawerVisible((prev) => !prev);

  const items: MenuProps["items"] = [
    {
      key: "dashboard",
      icon: <BarChartOutlined />,
      label: "Dashboard",
      onClick: () => navigate(AdminUrls.admin),
    },
    {
      key: "admins",
      icon: <KeyOutlined />,
      label: "Admins",
      onClick: () => navigate(AdminUrls.adminAdmin.viewAll),
    },
    {
      key: "mentors",
      icon: <UsergroupAddOutlined />,
      label: "Mentors",
      onClick: () => navigate(AdminUrls.adminMentor.viewAll),
    },
    {
      key: "students",
      icon: <UserOutlined />,
      label: "Students",
      onClick: () => navigate(AdminUrls.adminStudent.viewAll),
    },
    {
      key: "questions",
      icon: <FormOutlined />,
      label: "Questions",
      onClick: () => navigate(AdminUrls.adminquestions.viewAll),
    },
    {
      key: "quizes",
      icon: <SnippetsOutlined />,
      label: "Quizes",
      onClick: () => navigate(AdminUrls.adminquizes.viewAll),
    },
  ];

  return (
    <Layout hasSider>
      {!isMobile ? (
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
      ) : (
        <Drawer
          title={<Logo style={{ bottom: -5 }} />}
          placement="left"
          onClose={toggleDrawer}
          closeIcon={null}
          open={drawerVisible}
          width={250}
          styles={{ body: { padding: " 0px 0.25rem" } }}
        >
          <Menu items={items} style={{ border: "none" }} selectedKeys={[selectedKey || "dashboard"]} onClick={toggleDrawer} />
          <Button
            onClick={logout}
            type="text"
            icon={<PoweroffOutlined />}
            style={{
              position: "absolute",
              bottom: 20,
              left: 10,
              width: "100%",
              justifyContent: "left",
            }}
          >
            Log Out
          </Button>
        </Drawer>
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
          <Row align={"middle"}>
            {isMobile && <Button type="text" icon={<MenuOutlined />} onClick={toggleDrawer} style={{ marginRight: "1rem" }} />}
            <Title level={4} style={{ marginBlock: 0 }}>
              {title}
            </Title>
          </Row>
          <Link to={AdminUrls.adminProfile}>
            <UserAvatar user={user} />
          </Link>
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

export { AdminLayout };
