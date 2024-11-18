import { Button, Result, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const redirectToHome = () => navigate("/");

  return (
    <Card style={{ width: 600, height: "100vh", border: 0, margin: "auto" }}>
      <Row justify="center" align={"middle"} style={{ height: "100%" }}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Result
            status="404"
            subTitle="Sorry, the page you visited does not exist."
            style={{ padding: 0 }}
            extra={
              <Button type="primary" onClick={redirectToHome}>
                Back Home
              </Button>
            }
          />
        </Col>
      </Row>
    </Card>
  );
};

export default NotFound;
