import { Button, Col, Divider, Flex, Row, Space, Typography } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Logo from "./logo";

const SectionLinks = ({ title, links }: { title: string; links: string[] }) => (
  <Col span={4}>
    <Typography.Title level={5}>{title}</Typography.Title>
    <Space direction="vertical">
      {links.map((link, index) => (
        <Typography.Link key={index} href="" style={{ fontWeight: 200 }}>
          {link}
        </Typography.Link>
      ))}
    </Space>
  </Col>
);

export const FooterComponent = () => {
  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const aboutLinks = ["Our Mission", "Our Story", "Our Team", "Careers"];
  const serviceLinks = ["Tutoring", "Test Preparations"];
  const supportLinks = ["FAQs", "Send Feedback"];
  const connectLinks = ["Facebook", "Instagram", "Twitter"];

  return (
    <Flex vertical gap={280} className="footer-white-color" style={{ padding: 32 }}>
      <Row justify={"space-between"}>
        <Col span={6}>
          <Logo style={{ width: "auto", marginTop: 0, display: "inline-block" }} />
          <Typography.Paragraph style={{ fontWeight: 200, width: 250 }}>
            Mega Med is a platform that mentors students by reshaping their study style to help them achieve their goals.
          </Typography.Paragraph>
        </Col>

        <SectionLinks title="About Us" links={aboutLinks} />
        <SectionLinks title="Services" links={serviceLinks} />
        <SectionLinks title="Support" links={supportLinks} />

        <Col span={5}>
          <Typography.Title level={5}>Contact Us</Typography.Title>
          <Space>
            <Typography.Text style={{ fontWeight: 200 }}>Thapagau, Baneswor, Kathmandu, Nepal +977 9809446325</Typography.Text>
          </Space>
        </Col>
      </Row>

      <div>
        <Row justify={"space-between"}>
          <Space>
            <Typography.Title level={5} style={{ marginBlock: 0 }}>
              Connect with us:
            </Typography.Title>
            {connectLinks.map((link, index) => (
              <Typography.Link key={index} href="/" style={{ fontWeight: 200 }}>
                {link}
              </Typography.Link>
            ))}
          </Space>

          <Button type="text" variant="link" iconPosition="end" icon={<ArrowUpOutlined />} onClick={handleBackToTop}>
            Back to Top
          </Button>
        </Row>

        <Divider style={{ borderColor: "black", marginTop: 8 }} />

        <Row justify={"space-between"}>
          <Typography.Text style={{ fontWeight: 100, color: "var(--gray-primary)" }}>
            © 2024 Mega-Med. All rights reserved.
          </Typography.Text>
          <Space>
            <Typography.Link href="" style={{ fontWeight: 200 }}>
              Privacy Policy
            </Typography.Link>
            <Typography.Link href="" style={{ fontWeight: 200 }}>
              Terms of Service
            </Typography.Link>
          </Space>
        </Row>
      </div>
    </Flex>
  );
};
