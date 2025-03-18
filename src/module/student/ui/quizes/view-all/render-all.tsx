import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { Space, Row, Col, Card, Descriptions, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { StudentUrls } from "@/module/student/util/urls";
import { getQuizDescriptions } from "./helper";
import { isQuizActive, isQuizFinished, isQuizStarted } from "@/helper/is-quiz-active";
import { RotatingClockIcon } from "@/component/rotating-clock-icon";
import { EmptyComponent } from "@/component/empty";
import { renderTag } from "@/component/globar-tag-renderer";

interface ViewAllQuizesProps {
  data: SaveQuizResponse[];
}

export const ViewAllQuizes: React.FC<ViewAllQuizesProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleOnClick = (quiz: SaveQuizResponse) => {
    const id = quiz.id;
    const isFinished = isQuizFinished(quiz);
    const isStarted = isQuizStarted(quiz);

    if (!isStarted) return; //if not started return
    if (!isFinished && Boolean(quiz.score)) return; //if not finished but student attempted and has score

    if (!isFinished) return navigate(StudentUrls.studentQuizes + id); // if not finished give quiz
    else return navigate(StudentUrls.studentAttemptedQuizes + id); //else review answers
  };

  return (
    <>
      <Row gutter={[8, 8]}>
        {data?.map((quiz) => (
          <Col span={24} sm={12} lg={8} xxl={6} key={quiz.id}>
            <Tooltip title={!isQuizStarted(quiz) ? "This Quiz hasn't been started yet." : null}>
              <Card
                title={
                  <Space>
                    {quiz.title}
                    {isQuizActive(quiz) && <RotatingClockIcon />}
                  </Space>
                }
                classNames={{ header: isQuizActive(quiz) ? "active-quiz-text" : "" }}
                key={quiz.id}
                onClick={() => handleOnClick(quiz)}
                style={{
                  cursor: isQuizStarted(quiz) ? "pointer" : "not-allowed",
                  boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                styles={{ header: { textAlign: "left", paddingInline: 12 }, body: { padding: 12 } }}
                extra={Boolean(quiz.score) ? renderTag("Attempted") : !isQuizFinished(quiz) && renderTag("New")}
              >
                <Descriptions contentStyle={{ textAlign: "left" }} colon={false} size="small" column={1} items={getQuizDescriptions(quiz)} />
              </Card>
            </Tooltip>
          </Col>
        ))}
      </Row>

      <EmptyComponent show={!Boolean(data?.length)} description={"Sorry, There are no tests available for this type."} />
    </>
  );
};
