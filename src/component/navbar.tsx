import {
  AccountBookOutlined,
  ContactsOutlined,
  FormOutlined,
  HomeOutlined,
  PoweroffOutlined,
  SettingOutlined,
  // UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "./logo";
import { AllUrls } from "../router/urls";
import { useAppSelector, useAppDispatch } from "@/store/hook";
import { changeAccessToken, changeUser } from "@/module/auth/service/repo/reducer";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, accessToken } = useAppSelector((root) => root.AuthRepo);
  const isLoggedIn = accessToken && user.id;

  const onLogout = () => {
    //make accessToken null and user empty and redirect to login page
    dispatch(changeAccessToken(null));
    dispatch(changeUser({}));
    navigate(AllUrls.login);
  };

  const items: MenuProps["items"] = [
    {
      key: AllUrls.home,
      title: undefined,
      label: <Logo height={40} style={{ marginBlock: 0, marginRight: "20em" }} />,
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

  isLoggedIn
    ? items.push({
        key: "/profile",
        icon: <Avatar src={user.pictureUrl} icon={<UserOutlined />} />,
        children: [
          {
            key: "/details",
            label: "Profile",
            icon: <UserOutlined />,
          },
          {
            key: "/settings",
            label: "Settings",
            icon: <SettingOutlined />,
          },
          {
            key: "logout",
            label: "Logout",
            icon: <PoweroffOutlined />,
            onClick: onLogout,
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
          justifyContent: "center",
          gap: 32,
          background: "rgba(255, 255, 255, 0.5)", // Glass effect
          backdropFilter: "blur(10px)", // Glass blur
          boxShadow: "0 5px 6px rgba(74, 58, 225, 0.5)", // Slight
        }}
      />
    </>
  );
};
