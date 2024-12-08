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
import TimeDisplay from "@/component/clock";

const Home: React.FC = () => {
  const { user } = useAppSelector((root) => root.AuthRepo);

  return (
    <div>
      {user?.id ? (
        <>
          <Typography.Title level={5} style={{ marginBlock: 0 }} children={`Welcome, ${user?.name}!!`} />
          <Typography.Title level={5} style={{ marginBlock: 0 }} />
          Time is Ticking for CEE 2025 <TimeDisplay />
          <Typography.Title level={5} />
        </>
      ) : null}
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
