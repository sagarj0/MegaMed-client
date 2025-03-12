import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { Empty, Space, Typography, Button, Row, Col, Card, Descriptions, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { StudentUrls } from "@/module/student/util/urls";
import { getQuizDescriptions } from "./helper";

interface ViewAllQuizesProps {
  data: SaveQuizResponse[];
}

export const ViewAllQuizes: React.FC<ViewAllQuizesProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleOnClick = (id: string, isAttempted: boolean) =>
    isAttempted ? navigate(StudentUrls.studentAttemptedQuizes + id) : navigate(StudentUrls.studentQuizes + id);

  return (
    <>
      {data?.length === 0 && (
        <Empty
          description={
            <Space direction="vertical" size="middle">
              <Typography.Text>Sorry, There are no tests available for this type.</Typography.Text>
              <Button type="primary" onClick={() => navigate(-1)}>
                Go Back
              </Button>
            </Space>
          }
        />
      )}

      <Row gutter={[8, 8]}>
        {data?.map((quiz) => (
          <Col span={24} sm={12} lg={8} xxl={6} key={quiz.id}>
            <Card
              title={quiz.title}
              key={quiz.id}
              onClick={() => handleOnClick(quiz.id, Boolean(quiz.score))}
              style={{ cursor: "pointer", boxShadow: quiz.score ? "none" : "2px 4px 8px rgba(0, 0, 0, 0.1)" }}
              styles={{ header: { textAlign: "left" }, body: { padding: 12 } }}
              extra={!quiz.score && <Tag color="red" children="NEW" />}
              hoverable={quiz.score ? false : true}
            >
              <Descriptions contentStyle={{ textAlign: "left" }} colon={false} size="small" column={1} items={getQuizDescriptions(quiz)} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
