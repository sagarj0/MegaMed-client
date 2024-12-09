import Logo from "@/component/logo";
import { Card, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <Layout style={{ width: "100vw", height: "100vh", background: "white" }}>
      <Content>
        <Card title={<Logo style={{ bottom: 0 }} />} style={{ minWidth: 600, width: "100%", border: 0, margin: "auto" }}>
          <Outlet />
        </Card>
      </Content>
    </Layout>
  );
};
