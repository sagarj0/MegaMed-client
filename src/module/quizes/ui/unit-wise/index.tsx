import { Typography } from "antd";
import { useParams } from "react-router-dom";

export const UnitWiseTestPage: React.FC = () => {
  const { unit } = useParams();

  return (
    <>
      <Typography.Title level={4}>Chapter: {unit}</Typography.Title>
      <Typography.Title level={3}>Subject Wise Test Page</Typography.Title>
    </>
  );
};
