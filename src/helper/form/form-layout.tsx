import { Button, Card, Row, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string;
  loading: boolean;
  children: React.ReactNode;
  footer: React.ReactNode;
  isFooterOnTop?: boolean;
  mode?: "New" | "Edit";
};

export const FormLayout: React.FC<Props> = ({ title, children, loading, footer, isFooterOnTop = false, mode }) => {
  const navigate = useNavigate();

  return (
    <Card
      loading={loading}
      style={{
        height: isFooterOnTop ? "100%" : "calc(100vh - 80px)",
        width: "100%",
        border: "none",
      }}
      styles={{
        header: {
          // border: "none",
          // position: isFooterOnTop ? "sticky" : "static",
          width: "100%",
          top: 0,
          zIndex: 100,
          background: "white",
        },
        body: {
          overflow: "auto",
          height: isFooterOnTop ? "auto" : "90%",
        },
      }}
      extra={
        isFooterOnTop ? (
          <Space>
            {footer}
            {<Button onClick={() => navigate(-1)}>Cancel</Button>}
          </Space>
        ) : null
      }
      title={
        <Row justify={"start"}>
          <Space size={"large"} align="baseline">
            <Typography.Title level={3} style={{ marginBlock: 0 }}>
              {title}
            </Typography.Title>
            <Typography.Text type="secondary">{mode}</Typography.Text>
          </Space>
        </Row>
      }
      actions={
        isFooterOnTop
          ? []
          : [
              <Row justify={"start"} style={{ paddingLeft: 15, cursor: "default" }}>
                <Space>
                  {footer}
                  {<Button onClick={() => navigate(-1)}>Cancel</Button>}
                </Space>
              </Row>,
            ]
      }
    >
      {children}
    </Card>
  );
};
