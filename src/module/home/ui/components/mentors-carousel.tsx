import { Row, Col, Typography, Carousel, Card, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

// Sample Data
const mentors = [
  {
    name: "Sandeep Karki",
    position: "Mentor",
    feedback: "I have been mentoring students for over 3 years. I believe that every student has the potential to succeed.",
    avatar: "/mentors/sandeep.jpg",
  },
  {
    name: "Anuj Pant",
    position: "Mentor",
    feedback: "Mentor is someone who helps students to find the right path and achieve their goals.",
    avatar: "/mentors/anuj.jpg",
  },
  {
    name: "Prabhas Bhandari",
    position: "Mentor",
    feedback: "I help students to recognize their potential and work accordingly to achieve their dreams.",
    avatar: "/mentors/prabhas.jpg",
  },
  {
    name: "Suchana Bhandari",
    position: "Mentor",
    feedback: "I will help you to find the right path based on my experience to drive you to success.",
    avatar: "/mentors/suchana.jpg",
  },
  {
    name: "Alisha Pokharel",
    position: "Mentor",
    feedback: "I will share my experience of 3 drop years and guide you to the right path.",
    avatar: "/mentors/alisha.jpg",
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
          Our mentors are industry professionals with years of experience in the field. They are here to guide you through your journey.
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
                avatar={<Avatar size={"large"} icon={mentor.avatar ? null : <UserOutlined />} src={mentor.avatar} style={{ marginBottom: 20 }} />}
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
