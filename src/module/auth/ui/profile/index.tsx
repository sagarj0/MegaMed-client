import useAuthHook from "@/module/auth/hook/useAuthHook";
import { Col, Row, theme, Typography, Descriptions, Space, Tag } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

export const ProfileComponent: React.FC = () => {
  const { user, UserAvatar } = useAuthHook();
  const isPaid = user?.isPaidUser;
  const isStudent = user?.role === "student";

  const {
    token: { fontSizeHeading1 },
  } = theme.useToken();

  const descriptionItems = [
    { label: "Email", children: user?.email },
    { label: "Role", children: user?.role?.toUpperCase() },
    { label: "Paid Status", children: Boolean(isPaid) ? <Tag color="green">Paid</Tag> : <Tag color="red">Not Paid</Tag> },
    {
      label: "Email Verification",
      children: Boolean(user?.isEmailVerified) ? <Tag color="green">Verified</Tag> : <Tag color="red">Not Verified</Tag>,
    },
  ];

  const accessibleFeatures = [
    { label: "Mentorship", children: isPaid ? <CheckCircleFilled style={{ color: "green" }} /> : <CloseCircleFilled style={{ color: "red" }} /> },
    { label: "Mock Test", children: isPaid ? <CheckCircleFilled style={{ color: "green" }} /> : <CloseCircleFilled style={{ color: "red" }} /> },
    {
      label: "Subject Wise Test",
      children: isPaid ? <CheckCircleFilled style={{ color: "green" }} /> : <CloseCircleFilled style={{ color: "red" }} />,
    },
    {
      label: "Chapter Wise Test",
      children: isPaid ? <CheckCircleFilled style={{ color: "green" }} /> : <CloseCircleFilled style={{ color: "red" }} />,
    },
    { label: "Unit Wise Test", children: isPaid ? <CheckCircleFilled style={{ color: "green" }} /> : <CloseCircleFilled style={{ color: "red" }} /> },
  ];

  return (
    <Row justify="center" wrap>
      <Col>
        <Space direction="vertical" align="center" size={"large"}>
          <div>
            <UserAvatar style={{ width: 128, height: 128, fontSize: fontSizeHeading1 }} />
            <Typography.Title level={4}>{user?.name}</Typography.Title>
          </div>
          <Descriptions
            // title="User Info"
            column={1}
            colon={false}
            size="small"
            style={{ width: 300, textAlign: "center" }}
            labelStyle={{ width: 150 }}
            contentStyle={{ width: 150 }}
            items={descriptionItems}
          />
          <Typography.Title level={4}>Accessible Features</Typography.Title>

          {isStudent && (
            <Descriptions
              // title="Accessible Features"
              column={1}
              colon={false}
              size="small"
              style={{ width: 300, textAlign: "center" }}
              labelStyle={{ width: 150 }}
              contentStyle={{ width: 150, justifyContent: "end" }}
              items={accessibleFeatures}
            />
          )}
        </Space>
      </Col>
    </Row>
  );
};
