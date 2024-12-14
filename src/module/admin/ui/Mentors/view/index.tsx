import { properCase } from "@/helper/proper-case";
import useFetchMentor from "@/module/admin/hooks/useFetchUser";
import { Button, Card, Descriptions, DescriptionsProps, Divider, Row, Tooltip } from "antd";
import { useParams } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

export const ViewMentor: React.FC = () => {
  const { id } = useParams();
  const { data } = useFetchMentor(id);
  const { user, totalQuestions } = data;
  const { subjectWiseCounts, totalQuestionCount } = totalQuestions || {};

  const items: DescriptionsProps["items"] = [
    { label: "Name", children: user?.name },
    { label: "Email", children: user?.email },
    { label: "Total Questions Added", children: totalQuestionCount ?? 0 },
    { label: "", children: "Subject Wise Count" },
    ...(subjectWiseCounts?.map((subject) => ({
      label: properCase(subject?.subject),
      children: subject?.count,
    })) ?? []),
  ];

  return (
    <Card bordered={false} style={{ boxShadow: "none" }} extra={<Button type="link" children={"Edit Mentor"} icon={<EditOutlined />} disabled />}>
      <Descriptions colon={true} column={1} items={items} />
      <Divider />
      <Row justify="start">
        <Tooltip title="Currently we are working on this feature">
          <Button children={"View Questions Added"} type="primary" disabled />
        </Tooltip>
      </Row>
    </Card>
  );
};
