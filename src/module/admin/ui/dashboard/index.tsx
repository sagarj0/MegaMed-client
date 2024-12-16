import { Col, Row } from "antd";
import useFetchDashboardData from "../../hooks/useDashboard";
import CountCard from "./basic-count";
import UserMonthlyStatChart from "./user-monthly-stat";
import QuestionMonthlyStatChart from "./question-monthly-stat";

export const AdminDashboard: React.FC = () => {
  const { isLoading, data } = useFetchDashboardData();
  const { totalUsers, totalQuestions, userMonthlyStat, questionMonthlyStat } = data || {};
  const { subjectWiseCounts, totalQuestionCount } = totalQuestions || {};
  const { roleWiseCounts } = totalUsers || {};
  const modefiedSubjectWiseCount = subjectWiseCounts ? subjectWiseCounts?.map((item) => ({ [item.subject]: item.count })) : [];
  const adminCount = roleWiseCounts?.find((item) => item.role === "admin")?.count || 0;
  const mentorCount = roleWiseCounts?.find((item) => item.role === "mentor")?.count || 0;
  const studentCount = roleWiseCounts?.find((item) => item.role === "student")?.count || 0;

  return (
    <Row gutter={[8, 8]} align={"stretch"} style={{ width: "100%", padding: "8px 0px 8px 8px" }}>
      <Col span={24} sm={12} lg={8} xl={6}>
        <CountCard isLoading={isLoading} title="Questions" value={totalQuestionCount} childrenCount={modefiedSubjectWiseCount} />
      </Col>
      <Col span={24} sm={12} lg={8} xl={6}>
        <CountCard isLoading={isLoading} title="Admins" value={adminCount} />
      </Col>
      <Col span={24} sm={12} lg={8} xl={6}>
        <CountCard isLoading={isLoading} title="Mentors" value={mentorCount} />
      </Col>
      <Col span={24} sm={12} lg={8} xl={6}>
        <CountCard isLoading={isLoading} title="Students" value={studentCount} />
      </Col>
      <Col span={24} sm={24} lg={16} xl={12}>
        <UserMonthlyStatChart isLoading={isLoading} userMonthlyStat={userMonthlyStat} />
      </Col>
      <Col span={24} sm={24} lg={16} xl={12}>
        <QuestionMonthlyStatChart isLoading={isLoading} questionMonthlyStat={questionMonthlyStat} />
      </Col>
    </Row>
  );
};
