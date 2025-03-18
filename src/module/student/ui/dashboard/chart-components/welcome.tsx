import { Card, Space, Typography } from "antd";
import { commonCardStyle } from "../dashboard-layout";
import { UserAvatar } from "@/component/user-avatar";
import { useAppSelector } from "@/store/hook";
import { formatDateTime } from "@/helper/format-date";
import dayjs from "dayjs";

export const WelcomeCard: React.FC = () => {
  const { user } = useAppSelector((state) => state.AuthRepo);

  const date = dayjs();

  return (
    <Card
      style={commonCardStyle}
      styles={{
        body: {
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 16,
        },
      }}
    >
      <UserAvatar style={{ width: 80, height: 80, fontSize: 30 }} user={user} />
      <Space direction="vertical">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Welcome, {user?.name}
        </Typography.Title>
        <Typography.Text>{formatDateTime(date, false, "dddd, MMM DD YYYY")}</Typography.Text>
      </Space>
    </Card>
  );
};
