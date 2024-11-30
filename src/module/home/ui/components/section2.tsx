import { Col, Image, Row, Typography } from "antd";
const features = [
  {
    title: "Start Today",
    description:
      "Begin your preparation journey with expert guidance. Lay a strong foundation and gain confidence in tackling the syllabus from day one.",
    imageSrc: "/online-test 1.png",
  },
  {
    title: "Feel the Growth",
    description:
      "Experience steady improvement with personalized practice tests. Track your progress and master key topics with tailored resources.",
    imageSrc: "/exam 1.png",
  },
  {
    title: "Secure Your Seat",
    description:
      "Achieve your dream by securing a scholarship seat in your entrance exam. Celebrate your hard work and success with flying colors.",
    imageSrc: "/certification 1.png",
  },
];

export const Section2: React.FC = () => {
  return (
    <Col
      sm={{ span: 24 }}
      md={{ span: 22, offset: 2 }}
      style={{
        background: "rgba(74, 58, 225, 0.9)",
        padding: 20,
        borderRadius: 16,
        backdropFilter: "blur(5px)",
        boxShadow: "0 8px 10px rgba(74, 58, 225, 0.8)",
      }}
    >
      <Row align="middle" justify="space-between" gutter={10} style={{ height: "100%" }}>
        {features.map((feature, index) => (
          <Col span={24} lg={7} key={index}>
            <Row align="middle">
              <Col span={8}>
                <Image src={feature.imageSrc} alt={`${feature.title} icon`} width={50} height={50} preview={false} />
              </Col>
              <Col span={16}>
                <Typography.Title level={4}>{feature.title}</Typography.Title>
                <Typography.Paragraph style={{ color: "white" }}>{feature.description}</Typography.Paragraph>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
