import { Row, Col, Typography, Image } from "antd";
import { FormOutlined, RiseOutlined, TeamOutlined } from "@ant-design/icons";

const features = [
  {
    icon: <TeamOutlined style={{ color: "var(--primary-color)", fontSize: 48 }} />,
    title: "Expert Mentors",
    description:
      "Our mentors are experienced professionals who have helped many students like you. They will guide you through your preparation journey.",
  },
  {
    icon: <FormOutlined style={{ color: "var(--primary-color)", fontSize: 48 }} />,
    title: "Practice Tests",
    description: "Our practice tests are designed to help you understand the exam pattern and improve your speed and accuracy.",
  },
  {
    icon: <RiseOutlined style={{ color: "var(--primary-color)", fontSize: 48 }} />,
    title: "Progress Tracking",
    description: "Track your progress with our detailed reports. Identify your strengths and weaknesses and improve your performance.",
  },
];

export const Section3: React.FC = () => {
  return (
    <Row align="middle" justify="space-between" style={{ width: "100%" }}>
      <Col md={10}>
        <Row style={{ width: "100%" }}>
          <Image src="/hero2.png" alt="Hero picture" width={350} height={500} preview={false} />
        </Row>
      </Col>
      <Col md={13}>
        <Typography.Title level={2}>Premium Learning Experience</Typography.Title>
        {features.map((feature, index) => (
          <Row align="middle" key={index} justify={"space-between"}>
            <Col span={4} sm={2}>
              {feature.icon}
            </Col>
            <Col span={18} sm={21}>
              <Typography.Title level={4}>{feature.title}</Typography.Title>
              <Typography.Paragraph>{feature.description}</Typography.Paragraph>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
};
