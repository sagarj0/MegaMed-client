import { Carousel, Typography, Avatar, Row, Col, Card, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const testimonials = [
  {
    name: "Kritagya Raj Pandey",
    avatar: "/testimonials/kritagya.jpg",
    title: "CEE MBBS 2080 Rank 1",
    feedback: "The mentoring was amazing! The tests and final days' series gave me the practice I needed.",
  },
  {
    name: "Sarisa Bhattrai",
    avatar: "/testimonials/sarisa.jpg",
    title: "CEE BDS 2081 rank-119",
    feedback: "The structured guidance, expert insights, and personalized support provided by the mentors helped me stay focused.",
  },
  {
    name: "Sanu Kumar Yadav",
    avatar: "/testimonials/sanu.jpg",
    title: "CEE MBBS 2081 rank-147",
    feedback: "The mentor who will guide us in every difficulties that comes during our preparation along with the regular tests and quizzes.",
  },
  {
    name: "Malbika Chaudhary",
    avatar: "/testimonials/malbika.jpg",
    title: "CEE BDS 2081 rank-1, CEE MBBS 2081 rank - 61",
    feedback: "The mentors, routine plans, and tests kept me focused. It made my exam preparation simple.",
  },
  {
    name: "Bishal Karki",
    avatar: "/testimonials/bishal.jpg",
    title: "CEE MBBS 2080 rank-37",
    feedback:
      "It's definitely worth your time As someone who made it to IOM, these brothers and sisters whom we call as our mentors are the reasons behind it",
  },
];

export const TestimonialCarousel: React.FC = () => {
  return (
    <Row justify="center" style={{ width: "100%" }}>
      <Col>
        <Typography.Title level={2} style={{ marginBottom: 20, color: "var(--primary-color)", textAlign: "center" }}>
          Hear from Our Stars
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center", marginBottom: 30 }}>
          What our students and alumni have to say about their experience with us. We are proud to have been a part of their
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
          {testimonials.map((testimonial, index) => (
            <Card key={index} style={{ padding: 8 }}>
              <Typography.Paragraph style={{ textAlign: "justify", marginBottom: 30 }}>"{testimonial.feedback}"</Typography.Paragraph>

              <Card.Meta
                avatar={
                  <Avatar size={64} icon={testimonial.avatar ? null : <UserOutlined />} src={testimonial.avatar} style={{ marginBottom: 20 }} />
                }
                title={testimonial.name}
                description={testimonial.title}
              />
            </Card>
          ))}
        </Carousel>

        <Row justify={"center"}>
          <Button type="primary" style={{ marginTop: 30 }}>
            View More Success Stories
          </Button>
        </Row>
      </Col>
    </Row>
  );
};
