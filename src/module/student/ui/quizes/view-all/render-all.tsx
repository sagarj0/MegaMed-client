import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { Empty, Space, Typography, Button, Row, Col, Card, Descriptions } from "antd";
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

      <Row gutter={[24, 24]}>
        {data?.map((quiz) => (
          <Col span={24} xs={12} sm={8} lg={6}>
            <Card
              title={quiz.title}
              key={quiz.id}
              onClick={() => !quiz.score && handleOnClick(quiz.id)}
              style={{ cursor: quiz.score ? "not-allowed" : "pointer" }}
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
