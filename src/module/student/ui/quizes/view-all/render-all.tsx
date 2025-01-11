import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { Empty, Space, Typography, Button, Row, Col, Card, Descriptions, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { StudentUrls } from "@/module/student/util/urls";
import { getDescriptionItems } from "./helper";

interface ViewAllQuizesProps {
  data: SaveQuizResponse[];
}

export const ViewAllQuizes: React.FC<ViewAllQuizesProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleOnClick = (id: string) => navigate(StudentUrls.studentQuizes + id);

  return (
    <>
      {data?.length === 0 && (
        <Empty
          description={
            <Space direction="vertical" size="middle">
              <Typography.Text>Sorry, There are no tests available for this chapter.</Typography.Text>
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
              onClick={() => !quiz.score && handleOnClick(quiz.id)}
              style={{ cursor: quiz.score ? "not-allowed" : "pointer", boxShadow: quiz.score ? "none" : "0 2px 8px rgba(0, 0, 0, 0.1)" }}
              styles={{ header: { textAlign: "left" }, body: { padding: 12 } }}
              extra={new Date().getDate() - new Date(quiz.createdAt).getDate() <= 2 && !quiz.score ? <Tag color="red" children="New" /> : null}
              hoverable={quiz.score ? false : true}
            >
              <Descriptions colon={false} size="small" column={1} items={getDescriptionItems(quiz)} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
