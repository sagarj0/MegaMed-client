import { Button, Col, Input, Row, Space, Typography } from "antd";
// import { useEffect, useRef } from "react";

export const NewsLetter: React.FC = () => {
  // const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.25; // Set playback speed (0.5x slower)
  //   }
  // }, []);

  return (
    <Col
      md={{ span: 20, offset: 2 }}
      style={{
        position: "relative",
        minHeight: "200px", // Limit height
        borderRadius: 16,
        overflow: "hidden", // Ensure the video doesn't exceed Col's bounds\
        marginBlockEnd: 20,
        boxShadow: "0 8px 10px rgba(74, 58, 225, 0.6)",
      }}
    >
      {/* Video Background */}
      {/* <video
        ref={videoRef}
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Keep video behind content
        }}
      >
        <source src="/newsletter-bg.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video> */}

      {/* Glass Effect Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1, // Ensure content is above video
          background: "rgba(74, 58, 225, 0.8)", // Semi-transparent background
          backdropFilter: "blur(10px)", // Glass effect
          padding: 40,
          borderRadius: 16,
          minHeight: "200px", // Match parent height
        }}
      >
        <Typography.Title level={2} style={{ textAlign: "center" }}>
          Subscribe to Our Newsletter
        </Typography.Title>
        <Typography.Text style={{ textAlign: "center", display: "block", width: "100%" }}>
          Stay updated with the latest news and updates.
        </Typography.Text>
        <Row justify={"center"}>
          <Col xs={0} md={{ span: 20 }} xl={{ span: 12 }}>
            <Input
              size="large"
              placeholder="Enter your email"
              style={{ marginTop: 50, background: "var(--gray-secondary)", borderColor: "var(--primary-color)" }}
              suffix={<Button type="primary">Subscribe</Button>}
            />
          </Col>
          <Col xs={24} md={0}>
            <Space direction="vertical" align="center" style={{ width: "100%" }}>
              <Input
                size="large"
                placeholder="Enter your email"
                style={{ marginTop: 50, background: "var(--gray-secondary)", borderColor: "var(--primary-color)" }}
              />
              <Button type="default">Subscribe</Button>
            </Space>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
