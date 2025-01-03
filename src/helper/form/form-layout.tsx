import { Button, Card, Row, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string;
  loading: boolean;
  children: React.ReactNode;
  footer: React.ReactNode;
  mode?: "New" | "Edit";
};

export const FormLayout: React.FC<Props> = ({ title, children, loading, footer, mode }) => {
  const navigate = useNavigate();

  return (
    <Card
      loading={loading}
      style={{
        width: "100%",
        border: "none",
      }}
      styles={{
        header: {
          position: "sticky",
          width: "100%",
          top: 0,
          zIndex: 100,
          background: "white",
        },
      }}
      extra={
        <Space>
          {footer}
          {<Button onClick={() => navigate(-1)}>Cancel</Button>}
        </Space>
      }
      title={
        <Row justify={"start"}>
          <Space align="baseline">
            <Typography.Title level={4} style={{ margin: 0 }}>
              {title}
            </Typography.Title>
            <Typography.Text type="secondary">{mode}</Typography.Text>
          </Space>
        </Row>
      }
    >
      {children}
    </Card>
  );
};
