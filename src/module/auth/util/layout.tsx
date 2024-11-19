import Logo from "@/component/logo";
import { Card } from "antd";
import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <Card title={<Logo />} style={{ width: 600, height: "100vh", border: 0, margin: "auto" }}>
      <Outlet />
    </Card>
  );
};
