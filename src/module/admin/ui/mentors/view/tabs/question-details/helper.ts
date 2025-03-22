import { FetchAllQuestionRequest } from "@/module/admin/service/Questions/fetch-all/type";
import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { CardProps, TableProps } from "antd";
import { getAllChapters } from "@/module/admin/ui/questions/add/subjects";

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

export const getColumns = (subject: FetchAllQuestionRequest["subject"]): TableProps<DetailedQuestion>["columns"] => {
  return [
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
      hidden: subject === "chemistry" || subject === "physics",
      filters: getAllChapters(subject!).map((unit) => ({ text: unit, value: unit })),
      filterMultiple: false,
    },
    {
      title: "Chapter",
      dataIndex: "chapter",
      key: "chapter",
      hidden: subject === "MAT" || subject === "zoology" || subject === "botany",
      filters: getAllChapters(subject!).map((chapter) => ({ text: chapter, value: chapter })),
      filterMultiple: false,
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
};
