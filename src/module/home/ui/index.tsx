import { useAppSelector } from "@/store/hook";
import { Typography } from "antd";

const Home: React.FC = () => {
  const { user } = useAppSelector((root) => root.AuthRepo);

  return <>{user.id && <Typography.Title level={4} children={`Welcome, ${user.name}!!`} />}</>;
};

export default Home;
