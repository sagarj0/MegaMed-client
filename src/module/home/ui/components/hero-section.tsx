import { Row, Col, Typography, Button, Image } from "antd";

export const HeroSection: React.FC = () => {
  return (
    <Row align={"bottom"} justify={"space-between"}>
      <Col md={10}>
        <Typography.Title
          level={1}
          style={{ color: "var(--primary-color)", fontWeight: 600, marginBlock: 20 }}
          children="The Smart Choice For Entrance Prepration"
        />
        <Typography.Paragraph>
          Welcome to Mega-Med: Improve your medical entrance exams Prepare for your medical entrance exams with Mega-Med. Take tests, talk to mentors,
          and track your progress. Join us and succeed in your medical career.
        </Typography.Paragraph>

        <Button type="primary" size="large" style={{ marginBlock: 20 }}>
          Get Started
        </Button>
      </Col>
      <Col md={14}>
        <Row justify={"end"} align={"middle"} style={{ height: "100%" }}>
          <Image src="/hero.png" alt="Hero picture" width={600} height={400} preview={false} />
        </Row>
      </Col>
    </Row>
  );
};
