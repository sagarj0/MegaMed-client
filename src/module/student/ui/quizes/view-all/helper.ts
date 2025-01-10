import { getQuizTime } from "@/helper/get-quiz-time";
import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { CardProps, DescriptionsProps } from "antd";

export const tabList: CardProps["tabList"] = [
  {
    key: "subject",
    tab: "Subject",
  },
  {
    key: "unit",
    tab: "Unit",
  },
  {
    key: "chapter",
    tab: "Chapter",
  },
  {
    key: "mock_test",
    tab: "Mock Test",
  },
  {
    key: "custom",
    tab: "Custom",
  },
];

export const getDescriptionItems = (quiz: SaveQuizResponse): DescriptionsProps["items"] => {
  switch (quiz.type) {
    case "subject":
      return [
        { label: "Subject", children: quiz.subject },
        { label: "Question Count", children: quiz.questionCount },
        { label: "Time", children: getQuizTime(quiz.type, true) + " Min" },
        { label: "Marks Obtained", children: quiz.score ? quiz.score : "Not Attempted" },
      ];
    case "chapter":
      return [
        { label: "Chapter", children: quiz.chapter },
        { label: "Question Count", children: quiz.questionCount },
        { label: "Time", children: getQuizTime(quiz.type, true) + " Min" },
        { label: "Marks Obtained", children: quiz.score ? quiz.score : "Not Attempted" },
      ];
    case "unit":
      return [
        { label: "Unit", children: quiz.unit },
        { label: "Question Count", children: quiz.questionCount },
        { label: "Time", children: getQuizTime(quiz.type, true) + " Min" },
        { label: "Marks Obtained", children: quiz.score ? quiz.score : "Not Attempted" },
      ];
    case "mock_test":
      return [
        { label: "Question Count", children: quiz.questionCount },
        { label: "Time", children: getQuizTime(quiz.type, true) + " Min" },
        { label: "Marks Obtained", children: quiz.score ? quiz.score : "Not Attempted" },
      ];
    case "custom":
      return [
        { label: "Question Count", children: quiz.questionCount },
        { label: "Time", children: getQuizTime(quiz.type, true) + " Min" },
        { label: "Marks Obtained", children: quiz.score ? quiz.score : "Not Attempted" },
      ];
    default:
      return [];
  }
};
