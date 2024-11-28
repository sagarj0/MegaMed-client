import { Typography } from "antd";
import { useParams } from "react-router-dom";

export const SubjectWiseTestPage: React.FC = () => {
  const { subject } = useParams();

  return (
    <>
      <Typography.Title level={4}>Subject: {subject}</Typography.Title>
      <Typography.Title level={3}>Subject Wise Test Page</Typography.Title>
    </>
  );
};
