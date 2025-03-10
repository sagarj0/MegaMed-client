import useFetchQuiz from "@/module/admin/hooks/quizes/useFetchQuiz";
import { Button, Card, Descriptions } from "antd";
import { useParams } from "react-router-dom";
import { getDescriptionItems } from "../view-all/helper";
import { RenderQuiz } from "@/module/admin/ui/quizes/components/render-quiz";
import { RedoOutlined } from "@ant-design/icons";

export const ViewAttemptedQuiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchQuiz(id);

  // const extraItems: DescriptionsProps["items"] = [
  //   { label: "Time Taken", children: data.timeTaken + " Min" },
  //   { label: "Average Time Taken", children: data.averageTime + " Min" },
  //   { label: "Average Score", children: data.averageScore },
  // ];

  return (
    <Card
      bordered={false}
      style={{ boxShadow: "none" }}
      loading={isLoading}
      title={"Test Result For " + data.title}
      styles={{ header: { textAlign: "left" } }}
      extra={<Button type="primary" children={"Redo Test"} icon={<RedoOutlined />} disabled />}
    >
      <Descriptions contentStyle={{ textAlign: "left" }} size="small" column={1} items={getDescriptionItems(data)} />
      <RenderQuiz data={data?.questions} noStyle showAnswers />
    </Card>
  );
};
