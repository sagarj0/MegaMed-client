import { Card, Row, Col, Image, Typography } from "antd";

const media = [
  { type: "image", src: "/aglance/group.jpg" },
  { type: "image", src: "/aglance/group2.jpg" },
  { type: "image", src: "/aglance/photo.jpg" },
  { type: "image", src: "/aglance/photo0.jpg" },
  { type: "image", src: "/aglance/table.jpg" },
  { type: "image", src: "/aglance/photo1.jpg" },
  { type: "image", src: "/aglance/photo2.jpg" },
  { type: "image", src: "/aglance/photo3.jpg" },
  { type: "image", src: "/aglance/photo4.jpg" },
  { type: "image", src: "/aglance/photo5.jpg" },
  { type: "image", src: "/aglance/photo6.jpg" },
  { type: "image", src: "/aglance/photo7.jpg" },
  { type: "image", src: "/aglance/photo8.jpg" },
  { type: "image", src: "/aglance/photo9.jpg" },
  { type: "video", src: "/aglance/vid1.mp4" },
  { type: "video", src: "/aglance/vid2.mp4" },
  { type: "video", src: "/aglance/vid3.mp4" },
  { type: "video", src: "/aglance/vid4.mp4" },
  { type: "video", src: "/aglance/vid5.mp4" },
];

const AtAGlance: React.FC = () => {
  return (
    <Row style={{ width: "100%", paddingBlock: 24 }}>
      <Typography.Title level={2} style={{ marginBottom: 20, color: "var(--primary-color)", textAlign: "center", width: "100%" }}>
        Us At a Glance
      </Typography.Title>
      <Typography.Paragraph style={{ textAlign: "center", width: "100%", marginBottom: 30 }}>Have a look at our journey so far.</Typography.Paragraph>
      <Row style={{ width: "100%" }}>
        <Image.PreviewGroup items={media.map(({ src }) => src)}>
          {media.map((item, index) => (
            <Col xs={12} sm={12} md={8} lg={4} key={index}>
              <Card
                bordered={false}
                style={{ borderRadius: 0 }}
                cover={
                  item.type === "image" ? (
                    <Image src={item.src} alt={"image"} preview={true} height={150} style={{ objectFit: "contain" }} />
                  ) : (
                    <video src={item.src} controls style={{ width: "100%", objectFit: "contain" }} height={150} />
                  )
                }
              ></Card>
            </Col>
          ))}
        </Image.PreviewGroup>
      </Row>
    </Row>
  );
};

export default AtAGlance;
