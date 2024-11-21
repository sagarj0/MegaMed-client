import { Row, Col, Typography, Carousel, Card, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

// Sample Data
const mentors = [
  {
    name: "Dr. Aayush Shrestha",
    position: "Senior Consultant",
    feedback: "I have been mentoring students for over 10 years. I believe that every student has the potential to succeed.",
    avatar: "/aayush-shrestha.jpg",
  },
  {
    name: "Dr. Anjana Shrestha",
    position: "Pediatrician",
    feedback: "I have been mentoring students for over 10 years. I believe that every student has the potential to succeed.",
    avatar: "/anjana-shrestha.jpg",
  },
  {
    name: "Dr. Aashish Shrestha",
    position: "Cardiologist",
    feedback: "I have been mentoring students for over 10 years. I believe that every student has the potential to succeed.",
    avatar: "/aashish-shrestha.jpg",
  },
  {
    name: "Dr. Aarav Shrestha",
    position: "Neurologist",
    feedback: "I have been mentoring students for over 10 years. I believe that every student has the potential to succeed.",
    avatar: "/aarav-shrestha.jpg",
  },
  {
    name: "Dr. Aarav Shrestha",
    position: "Neurologist",
    feedback: "I have been mentoring students for over 10 years. I believe that every student has the potential to succeed.",
    avatar: "/aarav-shrestha.jpg",
  },
  {
    name: "Dr. Aarav Shrestha",
    position: "Neurologist",
    feedback: "I have been mentoring students for over 10 years. I believe that every student has the potential to succeed.",
    avatar: "/aarav-shrestha.jpg",
  },
];

export const MentorsSection: React.FC = () => {
  return (
    <Row justify="center" style={{ width: "100%" }}>
      <Col>
        <Typography.Title level={2} style={{ marginBottom: 20, color: "var(--primary-color)", textAlign: "center" }}>
          Meet Our Mentors
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center", marginBottom: 30 }}>
          Our mentors are industry professionals with years of experience in the field. They are here to guide you through your
          journey.
        </Typography.Paragraph>
        <Carousel
          autoplay
          arrows
          dots
          infinite
          adaptiveHeight
          style={{ paddingBlock: 30 }}
          autoplaySpeed={5000}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 768, // Mobile devices
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1024, // Tablets
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1200, // Desktops
              settings: {
                slidesToShow: 3,
              },
            },
          ]}
        >
          {mentors.map((mentor, index) => (
            <Card key={index} style={{ padding: 8 }}>
              <Typography.Paragraph style={{ textAlign: "justify", marginBottom: 30 }}>"{mentor.feedback}"</Typography.Paragraph>

              <Card.Meta
                avatar={
                  <Avatar
                    size={"large"}
                    icon={mentor.avatar ? null : <UserOutlined />}
                    src={mentor.avatar}
                    style={{ marginBottom: 20 }}
                  />
                }
                title={mentor.name}
                description={mentor.position}
              />
            </Card>
          ))}
        </Carousel>
      </Col>

      <Row>
        <Button type="primary" style={{ marginTop: 30 }}>
          Meet More Mentors
        </Button>
      </Row>
    </Row>
  );
};
