import { Card, Col, Flex, Row, Select, Tooltip, Typography } from "antd";
import { FieldTimeOutlined, FileUnknownOutlined, QuestionCircleOutlined, SendOutlined } from "@ant-design/icons";
import { getChapterGroups, getSubjects, getUnitGroups } from "@/module/admin/ui/questions/add/subjects";
import GroupedSelect from "@/component/grouped-select";
import { useNavigate } from "react-router-dom";
import { StudentUrls } from "@/module/student/util/urls";
import useAuthHook from "@/module/auth/hook/useAuthHook";

export const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthHook();
  const isPaidUser = user?.isPaidUser;

  const onGiveTest = () => navigate(StudentUrls.studentQuizes);

  return (
    <Flex vertical gap={20}>
      <Row>
        <Col>
          <Typography.Title level={3}>Step Towards Progress</Typography.Title>
          <Typography.Text>Currently you can give test on any of the following</Typography.Text>
        </Col>
      </Row>
      <Row gutter={[32, 32]} justify={"space-between"} align={"stretch"}>
        <Col md={12} lg={8}>
          <Card
            style={{ height: "100%", width: "100%" }}
            title="Subject Wise"
            actions={[
              <Typography.Text>
                <FieldTimeOutlined /> 40 Min
              </Typography.Text>,
              <Typography.Text>
                <QuestionCircleOutlined /> 50 Questions
              </Typography.Text>,
              <Tooltip title={isPaidUser ? null : "This feature is only available to paid users"}>
                <Select
                  style={{ width: "100%" }}
                  options={getSubjects()}
                  placeholder={<>Vew tests</>}
                  dropdownStyle={{ width: "auto" }}
                  variant="borderless"
                  onChange={onGiveTest}
                  disabled={!isPaidUser}
                />
              </Tooltip>,
            ]}
          >
            Give a test on specific subject, to check your understandig on Physics, Chemistry, Botany, Zoology and Mat.
          </Card>
        </Col>
        <Col md={12} lg={8}>
          <Card
            style={{ height: "100%", width: "100%" }}
            title="Unit Wise"
            actions={[
              <Typography.Text>
                <FieldTimeOutlined /> 40 Min
              </Typography.Text>,
              <Typography.Text>
                <QuestionCircleOutlined /> 50 Questions
              </Typography.Text>,
              <Tooltip title={isPaidUser ? null : "This feature is only available to paid users"}>
                <GroupedSelect
                  style={{ width: "100%" }}
                  options={getUnitGroups()}
                  placeholder={<>Vew tests</>}
                  dropdownStyle={{ width: 300 }}
                  variant="borderless"
                  onChange={onGiveTest}
                  disabled={!isPaidUser}
                />
              </Tooltip>,
            ]}
          >
            Give a test on specific unit, to check your understanding on specific units of Physics, Chemistry, Botany, Zoology and Mat.
          </Card>
        </Col>
        <Col md={12} lg={8}>
          <Card
            style={{ height: "100%", width: "100%" }}
            title="Chapter Wise"
            actions={[
              <Typography.Text>
                <FieldTimeOutlined /> 40 Min
              </Typography.Text>,
              <Typography.Text>
                <QuestionCircleOutlined /> 50 Questions
              </Typography.Text>,
              <Tooltip title={isPaidUser ? null : "This feature is only available to paid users"}>
                <GroupedSelect
                  style={{ width: "100%" }}
                  options={getChapterGroups()}
                  placeholder={<>Vew tests</>}
                  dropdownStyle={{ width: 300 }}
                  variant="borderless"
                  onChange={onGiveTest}
                  disabled={!isPaidUser}
                />
              </Tooltip>,
            ]}
          >
            Give a test on specific chapter, to check your understanding on specific chapter of Physics, Chemistry, Botany, Zoology and Mat.
          </Card>
        </Col>
        <Col md={12} lg={8}>
          <Card
            style={{ height: "100%", width: "100%" }}
            title="Mock test"
            actions={[
              <Typography.Text>
                <FieldTimeOutlined /> 3 Hrs
              </Typography.Text>,
              <Typography.Text>
                <FileUnknownOutlined /> 200 Questions
              </Typography.Text>,
              <Tooltip title={isPaidUser ? null : "This feature is only available to paid users"}>
                <Typography.Link href={StudentUrls.studentQuizes} disabled={!isPaidUser}>
                  View Test <SendOutlined />
                </Typography.Link>
              </Tooltip>,
            ]}
          >
            Give a mock test to check your preparation, it will improve your speed and accuracy. It will help you to know your weak points.
          </Card>
        </Col>
      </Row>
    </Flex>
  );
};
