import { Card, CardProps } from "antd";
import { BasicProfile } from "./tabs/basic-profile";

export const ProfileComponent: React.FC = () => {
  const tabList: CardProps["tabList"] = [
    { key: "profile", tab: "Profile", children: <BasicProfile /> },
    { key: "change-password", tab: "Change Password", children: <div>Change Password</div> },
    { key: "subsciption", tab: "Subscription", children: <div>Payment</div> },
  ];

  return <Card bordered={false} style={{ boxShadow: "none" }} styles={{ header: { border: "none" } }} tabList={tabList} />;
};
