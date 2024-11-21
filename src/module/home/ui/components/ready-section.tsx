import { Row, Col, Typography, Button } from "antd";

export const ReadySection: React.FC = () => {
  return (
    <Row
      justify="center"
      style={{ width: "90%", margin: "auto", background: "var(--gray-primary)", padding: 64, borderRadius: 16 }}
    >
      <Col>
        <Typography.Title level={2} style={{ marginBottom: 20, textAlign: "center" }}>
          Are You Ready To Prepare Entrance Exam with Mega Med?
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center", marginBottom: 30, fontSize: 14 }}>
          Get started with Mega-Med today. Prepare for your medical entrance exams with Mega-Med. Take tests, talk to mentors, and
          track your progress. Join us and succeed in your medical career.
        </Typography.Paragraph>
        <Row justify={"center"} style={{ width: "100%" }}>
          <Button type="default" size="large" style={{ marginBlock: 20 }}>
            Get Started
          </Button>
        </Row>
      </Col>
    </Row>
  );
};
