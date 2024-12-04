import { Divider, Typography } from "antd";

export const ContactPage: React.FC = () => {
  return (
    <>
      <Typography.Title level={2}>Contact Us</Typography.Title>
      <Typography.Text>Thapagau, Baneswor, Kathmandu, Nepal +977 9809446325</Typography.Text>
      <Divider />
      <Typography.Link href="mailto:megamed20@gmail.com">Email: megamed20@gmail.com</Typography.Link>
    </>
  );
};
