import { Carousel, Typography, Avatar, Row, Col, Card, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const testimonials = [
  {
    name: "Dr. Alex Johnson",
    avatar: null, // Use null to show default Avatar or replace with actual URL
    title: "Scholarship Achiever",
    feedback:
      "This platform truly transformed my journey. The expert mentorship and practice tests were crucial in securing my scholarship seat.",
  },
  {
    name: "Emily Carter",
    avatar: null,
    title: "Medical Student",
    feedback:
      "The progress tracking feature helped me focus on my weak areas and improve significantly. I couldn't have done it without this app.",
  },
  {
    name: "Michael Brown",
    avatar: null,
    title: "Top Rank Holder",
    feedback:
      "The structured learning path and insightful mentorship made all the difference. A must-have platform for any aspirant!",
  },
  {
    name: "Sophia Lee",
    avatar: null,
    title: "Test Series Topper",
    feedback: "The practice tests were perfectly aligned with the exam pattern. They gave me the confidence I needed to excel.",
  },
  {
    name: "Daniel Wilson",
    avatar: null,
    title: "Alumni Mentor",
    feedback: "As an alumni mentor, I find this platform invaluable for guiding students toward success. Highly recommended!",
  },
];

export const TestimonialCarousel: React.FC = () => {
  return (
    <Row justify="center" style={{ width: "100%" }}>
      <Col>
        <Typography.Title level={2} style={{ marginBottom: 20, color: "var(--primary-color)" }}>
          Hear from Our Stars{" "}
        </Typography.Title>
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
          {testimonials.map((testimonial, index) => (
            <Card key={index} style={{ padding: 8 }}>
              <Typography.Paragraph style={{ textAlign: "justify", marginBottom: 30 }}>
                "{testimonial.feedback}"
              </Typography.Paragraph>

              <Card.Meta
                avatar={
                  <Avatar
                    size={"large"}
                    icon={testimonial.avatar ? null : <UserOutlined />}
                    src={testimonial.avatar}
                    style={{ marginBottom: 20 }}
                  />
                }
                title={testimonial.name}
                description={testimonial.title}
              />
            </Card>
          ))}
        </Carousel>

        <Row justify={"center"}>
          <Button type="default" style={{ marginTop: 30, color: "var(--primary-color)", borderColor: "var(--primary-color)" }}>
            View More Success Stories
          </Button>
        </Row>
      </Col>
    </Row>
  );
};
