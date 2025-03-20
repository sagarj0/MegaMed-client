import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { CardProps, TableProps } from "antd";

export const tablist: CardProps["tabList"] = [
  {
    key: "physics",
    tab: "Physics",
  },
  {
    key: "chemistry",
    tab: "Chemistry",
  },
  {
    key: "zoology",
    tab: "Zoology",
  },
  {
    key: "botany",
    tab: "Botany",
  },
  {
    key: "MAT",
    tab: "MAT",
  },
];

export const columns: TableProps<DetailedQuestion>["columns"] = [
  {
    title: "Question",
    dataIndex: "question",
    key: "question",
  },
  {
    title: "Option A",
    dataIndex: "optionA",
    key: "optionA",
  },
  {
    title: "Option B",
    dataIndex: "optionB",
    key: "optionB",
  },
  {
    title: "Option C",
    dataIndex: "optionC",
    key: "optionC",
  },
  {
    title: "Option D",
    dataIndex: "optionD",
    key: "optionD",
  },
  {
    title: "Answer",
    dataIndex: "correctAnswer",
    key: "answer",
  },
  {
    title: "Explanation",
    dataIndex: "explanation",
    key: "explanation",
  },
];
