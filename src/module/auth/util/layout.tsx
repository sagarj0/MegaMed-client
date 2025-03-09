import Logo from "@/component/logo";
import { Card, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { seoConfig } from "./seo-config";
import { useSeoConfig } from "@/helper/hooks/useSeoConfig";

export const AuthLayout: React.FC = () => {
  useSeoConfig(seoConfig);

  return (
    <Layout style={{ width: "100vw", height: "100vh", background: "white" }}>
      <Content>
        <Card title={<Logo style={{ bottom: 0 }} />} style={{ maxWidth: 600, width: "100%", border: 0, margin: "auto" }}>
          <Outlet />
        </Card>
      </Content>
    </Layout>
  );
};
