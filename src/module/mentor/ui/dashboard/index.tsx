import { Col, Row } from "antd";
import useFetchDashboardData from "../../hooks/useDashboard";
import CountCard from "./basic-count";
import QuestionMonthlyStatChart from "./question-monthly-stat";

export const MentorDashboard: React.FC = () => {
  const { isLoading, data } = useFetchDashboardData();
  const { totalQuestions, questionMonthlyStat } = data || {};
  const { subjectWiseCounts, totalQuestionCount } = totalQuestions || {};
  const modefiedSubjectWiseCount = subjectWiseCounts ? subjectWiseCounts?.map((item) => ({ [item.subject]: item.count })) : [];

  return (
    <Row gutter={[16, 16]} align={"stretch"} style={{ width: "100%" }}>
      <Col sm={24} lg={16} xl={12}>
        <QuestionMonthlyStatChart isLoading={isLoading} questionMonthlyStat={questionMonthlyStat} />
      </Col>
      <Col sm={12} lg={8} xl={6}>
        <CountCard isLoading={isLoading} title="Questions" value={totalQuestionCount} childrenCount={modefiedSubjectWiseCount} />
      </Col>
    </Row>
  );
};
