import { Typography } from "antd";
import { useParams } from "react-router-dom";
import { InteractiveMCQ } from "../components/interactive-mcq";
import { mockMCQs } from "@/util/data/mock-question";

export const ChapterWiseTestPage: React.FC = () => {
  const { chapter } = useParams();

  return (
    <>
      <Typography.Title level={4}>Chapter: {chapter}</Typography.Title>
      <Typography.Title level={3}>Chapter Wise Test Page</Typography.Title>
      <InteractiveMCQ MCQs={mockMCQs} />
    </>
  );
};
