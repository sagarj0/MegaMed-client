import { useAppSelector } from "@/store/hook";
import { HeroSection } from "./components/hero-section";
import { Section2 } from "./components/section2";
import { Section3 } from "./components/section3";
import { Typography, Flex } from "antd";

const Home: React.FC = () => {
  const { user } = useAppSelector((root) => root.AuthRepo);

  return (
    <>
      {user.id ? (
        <Typography.Title level={5} children={`Welcome, ${user.name}!!`} />
      ) : (
        <Typography.Title level={5} children="Welcome to Mega-Med" />
      )}

      <Flex vertical align="stretch" style={{ width: "100%" }} gap={200}>
        <HeroSection />
        <Section2 />
        <Section3 />
      </Flex>
    </>
  );
};

export default Home;
