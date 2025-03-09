import CountCard from "@/module/admin/ui/dashboard/basic-count";
import { Col, Row } from "antd";

export const StudentDashboard: React.FC = () => {
  return (
    <Row gutter={[8, 8]} align={"stretch"} style={{ width: "100%", padding: "8px 0px 8px 8px" }}>
      <Col span={24} sm={12} xl={6}>
        <CountCard isLoading={false} title="Tests Attended" value={0} />
      </Col>
      <Col span={24} sm={12} xl={6}>
        <CountCard isLoading={false} title="Average Marks" value={0} />
      </Col>
      <Col span={24} sm={12} xl={6}>
        <CountCard isLoading={false} title="Last Test Mark" value={0} />
      </Col>
      <Col span={24} sm={12} xl={6}>
        <CountCard isLoading={false} title="Progress" value={0} />
      </Col>
    </Row>
  );
};
