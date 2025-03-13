import { Card } from "antd";
import { tabList } from "./helper";
import useFetchAllQuiz from "@/module/admin/hooks/quizes/useFetchAllQuiz";
import { ViewAllQuizes } from "./render-all";
import { QuizStatus, SaveQuizProps } from "@/module/admin/ui/quizes/add/type";

export const QuizPage: React.FC = () => {
  const { data, isLoading, filterOption, handleFilter } = useFetchAllQuiz({ filter: { type: "subject", status: QuizStatus.Published } });

  return (
    <Card
      tabList={tabList}
      bordered={false}
      style={{ boxShadow: "none" }}
      styles={{ header: { border: "none", paddingInline: 12 }, body: { paddingInline: 12 } }}
      loading={isLoading}
      activeTabKey={filterOption.type}
      onTabChange={(key) => handleFilter({ type: key as SaveQuizProps["type"] })}
      children={<ViewAllQuizes data={data} />}
    />
  );
};
