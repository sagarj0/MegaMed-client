import useAuthHook from "@/module/auth/hook/useAuthHook";
import { Col, Row, theme, Typography, Descriptions, Space, Card } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { AllUrls } from "@/router/urls";
import { config } from "@/util/config";
import { User } from "../../service/login/type";
import { UserAvatar } from "@/component/user-avatar";

interface ProfileComponentProps {
  userData?: User;
  profileOnly?: boolean;
  isLoading?: boolean;
}

export const ProfileComponent: React.FC<ProfileComponentProps> = ({ userData, profileOnly = false, isLoading = false }) => {
  const { user: thisUser } = useAuthHook();
  const user = userData || thisUser;
  const isPaid = user?.isPaidUser;
  const isStudent = user?.role === "student";
  const isAdmin = user?.role === "admin";
  const isMentor = user?.role === "mentor";

  const {
    token: { fontSizeHeading1 },
  } = theme.useToken();

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
    <Card bordered={false} style={{ boxShadow: "none", background: "transparent" }} loading={isLoading}>
      <Row justify="center" wrap>
        <Col>
          <Space direction="vertical" size={"large"} style={{ alignItems: "stretch" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
              <UserAvatar style={{ width: 120, height: 120, fontSize: fontSizeHeading1 }} user={user} />
              <Typography.Title level={4}>{user?.name}</Typography.Title>
              <Row>
                <Typography.Text>{user?.email}</Typography.Text> &nbsp;
                {Boolean(user?.isEmailVerified) ? <CheckCircleFilled style={{ color: "green" }} /> : <CloseCircleFilled style={{ color: "red" }} />}
              </Row>
              <Typography.Text>{user?.role?.toUpperCase()}</Typography.Text>
            </div>

            {profileOnly || (
              <>
                {(isStudent || config.appMode !== "PRODUCTION") && (
                  <>
                    <Descriptions
                      title="Accessible Features"
                      column={1}
                      colon={false}
                      size="small"
                      style={{ width: 300, textAlign: "center" }}
                      labelStyle={{ width: 150 }}
                      contentStyle={{ width: 150, justifyContent: "end" }}
                      items={accessibleFeatures}
                    />
                  </>
                )}

                <Space direction="vertical" align="start" style={{ width: "100%" }}>
                  {(isAdmin || config.appMode !== "PRODUCTION") && <Typography.Link href={AllUrls.admin}>Admin Dashboard</Typography.Link>}
                  {(isAdmin || isMentor || config.appMode !== "PRODUCTION") && (
                    <>
                      <Typography.Link href={AllUrls.mentor}>Mentor Dashboard</Typography.Link>
                      <Typography.Link href={AllUrls.home}>Home page</Typography.Link>
                    </>
                  )}
                </Space>
              </>
            )}
          </Space>
        </Col>
      </Row>
    </Card>
  );
};
