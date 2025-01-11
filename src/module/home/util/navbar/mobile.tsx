import React, { useState } from "react";
import { Drawer, Menu, MenuProps, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "@/component/logo";
import { properCase } from "@/helper/proper-case";
import { getKeyFromUrl } from "@/helper/key-from-url";
import { useLocation } from "react-router-dom";
import { commonStyle } from "./style";
import { AllUrls } from "@/router/urls";

interface MobileNavbarProps {
  items: MenuProps["items"];
  extraItems?: MenuProps["items"];
  onTabChange: (key: string) => void;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ items, onTabChange, extraItems }) => {
  const { pathname } = useLocation();
  const selectedKey = getKeyFromUrl(pathname, 1);
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  const commonMobileMenuItems: MenuProps["items"] = [
    {
      key: "burger-button",
      label: <MenuOutlined />,
      className: "menu-no-underline",
      onClick: () => setOpen(true),
    },
    {
      key: pathname,
      label: <Typography.Title level={4}>{properCase(selectedKey || "home")}</Typography.Title>,
      style: { padding: 0 },
      className: "menu-no-underline",
    },
    ...(extraItems || []),
  ];

  return (
    <>
      <Menu mode="horizontal" items={commonMobileMenuItems} style={{ ...commonStyle, justifyContent: "left" }} onSelect={(i) => onTabChange(i.key)} />
      <Drawer
        title={<Logo style={{ bottom: -5 }} />}
        open={open}
        onClose={toggleDrawer}
        placement="left"
        closeIcon={null}
        width={250}
        styles={{ body: { padding: " 0px 0.25rem" } }}
      >
        <Menu
          mode="vertical"
          items={items!.slice(1)}
          defaultSelectedKeys={[AllUrls.home]}
          selectedKeys={[pathname]}
          onSelect={(item) => onTabChange(item.key)}
          onClick={toggleDrawer}
          style={{
            width: "100%",
            border: "none",
          }}
        />
      </Drawer>
    </>
  );
};
