import { User } from "@/module/auth/service/login/type";
import { Avatar } from "antd";

export const UserAvatar: React.FC<{ style?: React.CSSProperties; user: User }> = ({ style, user }) => (
  <Avatar src={user?.pictureUrl} style={{ background: "var(--secondary-color)", ...style }}>
    {user?.name[0] + user?.name.split(" ")[1][0]}
  </Avatar>
);
