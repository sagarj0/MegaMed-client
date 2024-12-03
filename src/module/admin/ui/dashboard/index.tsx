import { Col, Row } from "antd";
import useFetchDashboardData from "../../hooks/useDashboard";
import CountCard from "./basic-count";

export const AdminDashboard: React.FC = () => {
  const { isLoading, data } = useFetchDashboardData();
  const { questionCount, adminCount, mentorCount, studentCount } = data || {};
  const { totalQuestionCount, subjectWiseCounts } = questionCount || {};
  const modefiedSubjectWiseCount = subjectWiseCounts ? subjectWiseCounts?.map((item) => ({ [item.subject]: item.count })) : [];

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
    </Row>
  );
};
