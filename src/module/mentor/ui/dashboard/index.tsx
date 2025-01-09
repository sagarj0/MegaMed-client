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
    <Row gutter={[8, 8]} align={"stretch"} style={{ width: "100%", padding: "8px 0px 8px 8px" }}>
      <Col span={24} sm={12} xl={6}>
        <CountCard isLoading={isLoading} title="Questions" value={totalQuestionCount} childrenCount={modefiedSubjectWiseCount} />
      </Col>
      <Col span={24} sm={24} xl={12}>
        <QuestionMonthlyStatChart isLoading={isLoading} questionMonthlyStat={questionMonthlyStat} />
      </Col>
    </Row>
  );
};
