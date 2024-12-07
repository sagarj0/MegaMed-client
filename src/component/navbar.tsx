import { AccountBookOutlined, ContactsOutlined, FormOutlined, HomeOutlined, PoweroffOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "./logo";
import { AllUrls } from "../router/urls";
import useAuthHook from "@/module/auth/hook/useAuthHook";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const { logout, isUserLoggedIn, UserAvatar } = useAuthHook();

  const items: MenuProps["items"] = [
    {
      key: AllUrls.home,
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
      key: AllUrls.quiz,
      title: "Tests",
      label: "Tests",
      icon: <FormOutlined />,
    },
    // {
    //   key: AllUrls.home.mentors,
    //   title: "Mentors",
    //   label: "Mentors",
    //   icon: <UserAddOutlined />,
    // },
    {
      key: AllUrls.contact,
      label: "Contact",
      icon: <ContactsOutlined />,
    },
  ];

  isUserLoggedIn
    ? items.push({
        key: AllUrls.profile,
        icon: <UserAvatar />,
        children: [
          {
            key: AllUrls.profile,
            label: "Profile",
            icon: <UserOutlined />,
          },
          // {
          //   key: "/settings",
          //   label: "Settings",
          //   icon: <SettingOutlined />,
          // },
          {
            key: "logout",
            label: "Logout",
            icon: <PoweroffOutlined />,
            onClick: logout,
          },
        ],
      })
    : items.push({
        key: AllUrls.login,
        title: "Login",
        className: "menu-no-underline",
        label: <Button type="primary" icon={<PoweroffOutlined />} children={"Login"} />,
      });

  const onTabChange = (key: string) => {
    if (key !== "logout") {
      navigate(key);
    }
  };

  return (
    <>
      <Menu
        mode="horizontal"
        items={items}
        defaultSelectedKeys={[AllUrls.home]}
        selectedKeys={[location.pathname]}
        onSelect={(item) => onTabChange(item.key)}
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(255, 255, 255, 0.5)", // Glass effect
          backdropFilter: "blur(10px)", // Glass blur
          boxShadow: "0 5px 6px rgba(74, 58, 225, 0.5)", // Slight
        }}
      />
    </>
  );
};
