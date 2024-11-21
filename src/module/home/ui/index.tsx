import { useAppSelector } from "@/store/hook";
import { HeroSection } from "./components/hero-section";
import { Section2 } from "./components/section2";
import { Section3 } from "./components/section3";
import { Typography, Flex } from "antd";
import { TestimonialCarousel } from "./components/testimonial-section";
import { AchievementSection } from "./components/achivements";
import { NewsLetter } from "./components/newsletter";
import { MentorsSection } from "./components/mentors-carousel";
import { ReadySection } from "./components/ready-section";

const Home: React.FC = () => {
  const { user } = useAppSelector((root) => root.AuthRepo);

  return (
    <div
      style={{
        paddingInline: 40,
      }}
    >
      {user.id ? (
        <Typography.Title level={5} children={`Welcome, ${user.name}!!`} />
      ) : (
        <Typography.Title level={5} children="Welcome to Mega-Med" />
      )}

      <Flex vertical align="stretch" style={{ width: "100%", paddingBottom: 150 }} gap={150}>
        <HeroSection />
        <Section2 />
        <Section3 />
        <TestimonialCarousel />
        <AchievementSection />
        <NewsLetter />
        <MentorsSection />
        <ReadySection />
      </Flex>
    </div>
  );
};

export default Home;
