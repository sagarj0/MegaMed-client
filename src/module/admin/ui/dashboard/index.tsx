import { Col, Row } from "antd";
import useFetchDashboardData from "../../hooks/useDashboard";
import CountCard from "./basic-count";
import UserMonthlyStatChart from "./user-monthly-stat";

export const AdminDashboard: React.FC = () => {
  const { isLoading, data } = useFetchDashboardData();
  const { totalUsers, totalQuestions, userMonthlyStat } = data || {};
  const { subjectWiseCounts, totalQuestionCount } = totalQuestions || {};
  const { roleWiseCounts } = totalUsers || {};
  const modefiedSubjectWiseCount = subjectWiseCounts ? subjectWiseCounts?.map((item) => ({ [item.subject]: item.count })) : [];
  const adminCount = roleWiseCounts?.find((item) => item.role === "admin")?.count || 0;
  const mentorCount = roleWiseCounts?.find((item) => item.role === "mentor")?.count || 0;
  const studentCount = roleWiseCounts?.find((item) => item.role === "student")?.count || 0;

  return (
    <Row gutter={[16, 16]} align={"stretch"}>
      <Col sm={12} lg={8} xl={6}>
        <CountCard isLoading={isLoading} title="Questions" value={totalQuestionCount} childrenCount={modefiedSubjectWiseCount} />
      </Col>
      <Col sm={12} lg={8} xl={6}>
        <CountCard isLoading={isLoading} title="Admins" value={adminCount} />
      </Col>
      <Col sm={12} lg={8} xl={6}>
        <CountCard isLoading={isLoading} title="Mentors" value={mentorCount} />
      </Col>
      <Col sm={12} lg={8} xl={6}>
        <CountCard isLoading={isLoading} title="Students" value={studentCount} />
      </Col>
      <Col sm={24} lg={16} xl={12}>
        <UserMonthlyStatChart isLoading={isLoading} userMonthlyStat={userMonthlyStat} />
      </Col>
    </Row>
  );
};
