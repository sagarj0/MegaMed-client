import { Card } from "antd";
import { tabList } from "./helper";
import useFetchAllQuiz from "@/module/admin/hooks/quizes/useFetchAllQuiz";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hook";
import { ViewAllQuizes } from "./render-all";

export const QuizPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, filterOption, handleFilter } = useFetchAllQuiz({ filter: {} });
  useEffect(() => {
    dispatch(handleFilter({ type: "subject" }));
  }, []);

  return (
    <Card
      tabList={tabList}
      bordered={false}
      style={{ boxShadow: "none" }}
      styles={{ header: { border: "none", paddingInline: 12 }, body: { paddingInline: 12 } }}
      loading={isLoading}
      activeTabKey={filterOption.type}
      onTabChange={(key) => handleFilter({ type: key })}
      children={<ViewAllQuizes data={data} />}
    />
  );
};
