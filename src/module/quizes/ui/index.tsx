import { Card, Col, Flex, Row, Select, Typography } from "antd";
import { FieldTimeOutlined, FileUnknownOutlined, QuestionCircleOutlined, SendOutlined } from "@ant-design/icons";
import { getChapterGroups, getSubjects, getUnitGroups } from "@/module/admin/ui/Questions/add/subjects";
import GroupedSelect from "@/component/grouped-select";
import { useNavigate } from "react-router-dom";
import { QuizUrls } from "../util/url";

export const QuizPage: React.FC = () => {
  const navigate = useNavigate();

  const onSubjectWiseTestClick = (subject: string) => navigate(QuizUrls.subjectWise + subject);
  const onUnitWiseTestClick = (unit: string) => navigate(QuizUrls.unitWise + unit);
  const onChapterWiseTestClick = (chapter: string) => navigate(QuizUrls.chapterWise + chapter);

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
            bordered={false}
            actions={[
              <Typography.Text>
                <FieldTimeOutlined /> 40 Min
              </Typography.Text>,
              <Typography.Text>
                <QuestionCircleOutlined /> 50 Questions
              </Typography.Text>,
              <Select
                style={{ width: "100%" }}
                options={getSubjects()}
                placeholder={<>Start test</>}
                dropdownStyle={{ width: "auto" }}
                variant="borderless"
                onChange={onSubjectWiseTestClick}
              />,
            ]}
          >
            Give a test on specific subject, to check your understandig on Physics, Chemistry, Botany, Zoology and Mat.
          </Card>
        </Col>
        <Col md={12} lg={8}>
          <Card
            style={{ height: "100%", width: "100%" }}
            title="Unit Wise"
            bordered={false}
            actions={[
              <Typography.Text>
                <FieldTimeOutlined /> 20 Min
              </Typography.Text>,
              <Typography.Text>
                <QuestionCircleOutlined /> 20 Questions
              </Typography.Text>,
              <GroupedSelect
                style={{ width: "100%" }}
                options={getUnitGroups()}
                placeholder={<>Start test</>}
                dropdownStyle={{ width: 300 }}
                variant="borderless"
                onChange={onUnitWiseTestClick}
              />,
            ]}
          >
            Give a test on specific unit, to check your understanding on specific units of Physics, Chemistry, Botany, Zoology and Mat.
          </Card>
        </Col>
        <Col md={12} lg={8}>
          <Card
            style={{ height: "100%", width: "100%" }}
            title="Chapter Wise"
            bordered={false}
            actions={[
              <Typography.Text>
                <FieldTimeOutlined /> 10 Min
              </Typography.Text>,
              <Typography.Text>
                <QuestionCircleOutlined /> 10 Questions
              </Typography.Text>,
              <GroupedSelect
                style={{ width: "100%" }}
                options={getChapterGroups()}
                placeholder={<>Start test</>}
                dropdownStyle={{ width: 300 }}
                variant="borderless"
                onChange={onChapterWiseTestClick}
              />,
            ]}
          >
            Give a test on specific chapter, to check your understanding on specific chapter of Physics, Chemistry, Botany, Zoology and Mat.
          </Card>
        </Col>
        <Col md={12} lg={8}>
          <Card
            style={{ height: "100%", width: "100%" }}
            title="Mock test"
            bordered={false}
            actions={[
              <Typography.Text>
                <FieldTimeOutlined /> 3 Hrs
              </Typography.Text>,
              <Typography.Text>
                <FileUnknownOutlined /> 200 Questions
              </Typography.Text>,
              <Typography.Link href={QuizUrls.mockTest}>
                Start Test <SendOutlined />
              </Typography.Link>,
            ]}
          >
            Give a mock test to check your preparation, it will improve your speed and accuracy. It will help you to know your weak points.
          </Card>
        </Col>
      </Row>
    </Flex>
  );
};
