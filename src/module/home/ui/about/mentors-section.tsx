import { Card, Row, Col, Image, Typography } from "antd";

const { Meta } = Card;

const media = [
  { type: "image", src: "/mentors/sandeep.jpg", title: "Sandeep Karki" },
  { type: "image", src: "/mentors/prabhas.jpg", title: "Prabhas Bhandari" },
  { type: "image", src: "/mentors/anup.jpg", title: "Anup" },
  { type: "image", src: "/mentors/mentor1.jpg", title: "Our Mentors" },
  { type: "image", src: "/mentors/mentor2.jpg", title: "Our Mentors" },
  { type: "image", src: "/mentors/mentor3.jpg", title: "Our Mentors" },
];

const MentorsGallery: React.FC = () => {
  return (
    <Row style={{ width: "100%", paddingBlock: 24 }}>
      <Typography.Title level={2} style={{ marginBottom: 20, color: "var(--primary-color)", textAlign: "center", width: "100%" }}>
        Our Mentors
      </Typography.Title>
      <Typography.Paragraph style={{ textAlign: "center", width: "100%", marginBottom: 30 }}>
        Our mentors are always there to guide and support our students in their journey to success.
      </Typography.Paragraph>
      <Row gutter={[16, 16]} style={{ width: "100%" }}>
        <Image.PreviewGroup items={media.map(({ src }) => src)}>
          {media.map((item, index) => (
            <Col xs={12} sm={12} md={8} lg={4} key={index}>
              <Card
                hoverable
                cover={
                  item.type === "image" ? (
                    <Image src={item.src} alt={item.title} preview={true} height={150} style={{ objectFit: "contain" }} />
                  ) : (
                    <video src={item.src} controls style={{ width: "100%", maxHeight: "200px" }} />
                  )
                }
              >
                <Meta title={item.title} />
              </Card>
            </Col>
          ))}
        </Image.PreviewGroup>
      </Row>
    </Row>
  );
};

export default MentorsGallery;
