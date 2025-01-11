import React from "react";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";
import { commonStyle } from "./style";

interface DesktopNavbarProps {
  items: any;
  onTabChange: (key: string) => void;
}

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ items, onTabChange }) => {
  const { pathname } = useLocation();

  return (
    <Menu
      mode="horizontal"
      items={items}
      defaultSelectedKeys={[pathname]}
      selectedKeys={[pathname]}
      onSelect={(item) => onTabChange(item.key)}
      style={commonStyle}
    />
  );
};
