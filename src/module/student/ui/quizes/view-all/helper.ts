import { getQuizTime } from "@/helper/get-quiz-time";
import { properCase } from "@/helper/proper-case";
import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { CardProps, DescriptionsProps } from "antd";

export const tabList: CardProps["tabList"] = [
  { key: "subject", tab: "Subject" },
  { key: "unit", tab: "Unit" },
  { key: "chapter", tab: "Chapter" },
  { key: "mock_test", tab: "Mock Test" },
  { key: "custom", tab: "Custom" },
];

export const getDescriptionItems = (quiz: SaveQuizResponse): DescriptionsProps["items"] => {
  switch (quiz.type) {
    case "subject":
      return [
        { label: "Subject", children: properCase(quiz.subject) },
        { label: "Question Count", children: quiz.questionCount },
        { label: "Time", children: getQuizTime(quiz.type, true) + " Min" },
        { label: "Score Obtained", children: quiz.score ? quiz.score : "-" },
      ];
    case "chapter":
      return [
        { label: "Chapter", children: properCase(quiz.chapter) },
        { label: "Question Count", children: quiz.questionCount },
        { label: "Time", children: getQuizTime(quiz.type, true) + " Min" },
        { label: "Score Obtained", children: quiz.score ? quiz.score : "-" },
      ];
    case "unit":
      return [
        { label: "Unit", children: properCase(quiz.unit) },
        { label: "Question Count", children: quiz.questionCount },
        { label: "Time", children: getQuizTime(quiz.type, true) + " Min" },
        { label: "Score Obtained", children: quiz.score ? quiz.score : "-" },
      ];
    case "mock_test":
      return [
        { label: "Question Count", children: quiz.questionCount },
        { label: "Time", children: getQuizTime(quiz.type, true) + " Min" },
        { label: "Score Obtained", children: quiz.score ? quiz.score : "-" },
      ];
    case "custom":
      return [
        { label: "Question Count", children: quiz.questionCount },
        { label: "Time", children: getQuizTime(quiz.type, true) + " Min" },
        { label: "Score Obtained", children: quiz.score ? quiz.score : "-" },
      ];
    default:
      return [];
  }
};
