import { Flex } from "antd";
import { AchievementSection } from "../components/achivements";
import AtAGlance from "./at-glance";
import MentorsGallery from "./mentors-section";

export const AboutPage: React.FC = () => {
  return (
    <Flex vertical gap={80}>
      <AtAGlance />
      <AchievementSection showButton={false} />
      <MentorsGallery />
    </Flex>
  );
};
