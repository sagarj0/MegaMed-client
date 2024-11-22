import React from "react";
import {
  BarChartOutlined,
  FormOutlined,
  KeyOutlined,
  PoweroffOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu, Row, theme, MenuProps, Typography, Button } from "antd";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { AdminUrls } from "../util/urls";
import Logo from "@/component/logo";
import { properCase } from "@/helper/proper-case";

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
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const selectedKey = pathname.split("/").pop();

  const title = properCase(selectedKey ? `manage ${selectedKey}` : "dashboard");

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
      onClick: () => navigate(AdminUrls.adminAdmin),
    },
    {
      key: "mentors",
      icon: <UsergroupAddOutlined />,
      label: "Mentors",
      onClick: () => navigate(AdminUrls.adminMentor),
    },
    {
      key: "students",
      icon: <UserOutlined />,
      label: "Students",
      onClick: () => navigate(AdminUrls.adminStudent),
    },
    {
      key: "questions",
      icon: <FormOutlined />,
      label: "Questions",
      onClick: () => navigate(AdminUrls.adminquestions),
    },
  ];

  return (
    <Layout hasSider>
      <Sider style={siderStyle} theme="light">
        <Logo />
        <Menu theme="light" items={items} style={{ border: "none" }} selectedKeys={[selectedKey || "dashboard"]} />
        <Button
          type="text"
          icon={<PoweroffOutlined />}
          style={{ position: "absolute", bottom: 20, left: 5, width: "100%", justifyContent: "left" }}
        >
          Log Out
        </Button>
      </Sider>
      <Layout
        style={{
          width: "calc(200px - 100vw)",
          height: "100vh",
          marginLeft: 200,
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
          }}
          children={
            <Row justify={"space-between"} align={"middle"} style={{ width: "100%", height: "100%" }}>
              <Title level={4} style={{ marginBlock: 0 }}>
                {title}
              </Title>
              <Avatar icon={<UserOutlined />} />
            </Row>
          }
        />

        <Content
          style={{
            margin: " 10px auto",
            maxWidth: "calc(100vw - 220px)",
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

export { AdminLayout };
