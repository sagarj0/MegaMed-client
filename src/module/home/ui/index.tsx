import { useAppSelector } from "@/store/hook";
import { Typography } from "antd";

const Home: React.FC = () => {
  const { user } = useAppSelector((root) => root.AuthRepo);

  return (
    <>
      {user.id && <Typography.Title level={4} children={`Welcome, ${user.name}!!`} />}

      {Array.from({ length: 30 }).map((_, index) => (
        <Typography.Paragraph key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo deserunt cum nostrum libero ipsa, quas fuga culpa
          eius! Architecto ea quibusdam cupiditate sit dicta tempora ipsum non fugiat iusto.
        </Typography.Paragraph>
      ))}
    </>
  );
};

export default Home;
