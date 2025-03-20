import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { Space, Row, Col, Card, Descriptions } from "antd";
import { getQuizDescriptions } from "./helper";
import { isQuizActive, isQuizFinished } from "@/helper/is-quiz-active";
import { RotatingClockIcon } from "@/component/rotating-clock-icon";
import { EmptyComponent } from "@/component/empty";
import { renderTag } from "@/component/globar-tag-renderer";
import { useModal } from "./useModal";

interface ViewAllQuizesProps {
  data: SaveQuizResponse[];
}

export const ViewAllQuizes: React.FC<ViewAllQuizesProps> = ({ data }) => {
  const { handleQuizCardClick } = useModal();

  return (
    <>
      <Row gutter={[8, 8]}>
        {data?.map((quiz) => (
          <Col span={24} sm={12} lg={8} xxl={6} key={quiz.id}>
            <Card
              title={
                <Space>
                  {quiz.title}
                  {isQuizActive(quiz) && <RotatingClockIcon />}
                </Space>
              }
              className={isQuizActive(quiz) ? "active-quiz-text" : ""}
              // classNames={{ header: isQuizActive(quiz) ? "active-quiz-text" : "" }}
              key={quiz.id}
              onClick={() => handleQuizCardClick(quiz)}
              style={{
                cursor: "pointer",
                boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              styles={{ header: { textAlign: "left", paddingInline: 12 }, body: { padding: 12 } }}
              extra={Boolean(quiz.score) ? renderTag("Attempted") : !isQuizFinished(quiz) && renderTag("New")}
            >
              <Descriptions contentStyle={{ textAlign: "left" }} colon={false} size="small" column={1} items={getQuizDescriptions(quiz)} />
            </Card>
          </Col>
        ))}
      </Row>

      <EmptyComponent show={!Boolean(data?.length)} description={"Sorry, There are no tests available for this type."} />
    </>
  );
};
