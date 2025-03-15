import { Button, Empty, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
  description: string;
  show?: boolean;
}

export const EmptyComponent: React.FC<Props> = ({ description, show = true }) => {
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <Empty
      description={
        <Space direction="vertical" size="middle">
          <Typography.Text>{description}</Typography.Text>
          <Button type="link" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </Space>
      }
    />
  );
};
