import React from "react";
import { Button, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { Grid } from "antd";
import useAuthHook from "@/module/auth/hook/useAuthHook";
import { MobileNavbar } from "./mobile";
import { DesktopNavbar } from "./desktop";
import { AllUrls } from "@/router/urls";
import { UserAvatar } from "@/component/user-avatar";
import Logo from "@/component/logo";
import { BarChartOutlined, PoweroffOutlined, HomeOutlined, AccountBookOutlined, FormOutlined, ContactsOutlined } from "@ant-design/icons";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { sm } = Grid.useBreakpoint();
  const { logout, isUserLoggedIn, user } = useAuthHook();

  const generateLoggedInMenuItems = (style: any = {}) => {
    return [
      {
        key: AllUrls.profile,
        icon: <UserAvatar user={user} />,
        className: "menu-no-underline",
        style: style,
        children: [
          {
            key: user?.role === "admin" ? AllUrls.admin : user?.role === "mentor" ? AllUrls.mentor : AllUrls.student,
            label: "My Dashboard",
            icon: <BarChartOutlined />,
          },
          {
            key: "logout",
            label: "Logout",
            icon: <PoweroffOutlined />,
          },
        ],
      },
    ];
  };

  const generateLoggedOutMenuItems = (style: any = {}) => {
    return [
      {
        key: AllUrls.login,
        title: "Login",
        className: "menu-no-underline",
        label: <Button type="primary" icon={<PoweroffOutlined />} children={"Login"} />,
        style: style,
      },
    ];
  };

  const commonMenuItems: MenuProps["items"] = [
    {
      key: AllUrls.root,
      title: undefined,
      label: <Logo />,
      className: "menu-no-underline",
    },
    {
      key: AllUrls.home,
      title: "Home",
      label: "Home",
      icon: <HomeOutlined />,
    },
    {
      key: AllUrls.about,
      title: "About",
      label: "About",
      icon: <AccountBookOutlined />,
    },
    {
      key: AllUrls.test,
      title: "Tests",
      label: "Tests",
      icon: <FormOutlined />,
    },
    {
      key: AllUrls.contact,
      label: "Contact",
      icon: <ContactsOutlined />,
    },
  ];
  const items: MenuProps["items"] = isUserLoggedIn
    ? [...commonMenuItems, ...generateLoggedInMenuItems()]
    : [...commonMenuItems, ...generateLoggedOutMenuItems()];

  const mobileMenuItems: MenuProps["items"] = isUserLoggedIn
    ? generateLoggedInMenuItems({ marginLeft: "auto" })
    : generateLoggedOutMenuItems({ marginLeft: "auto" });

  const onTabChange = (key: string) => {
    if (key === "logout") logout();
    if (key !== "burger-button") navigate(key);
  };

  return sm ? (
    <DesktopNavbar items={items} onTabChange={onTabChange} />
  ) : (
    <MobileNavbar items={commonMenuItems} extraItems={mobileMenuItems} onTabChange={onTabChange} />
  );
};
