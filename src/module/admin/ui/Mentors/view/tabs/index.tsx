import { CardProps } from "antd";
import { BasicInfo } from "./basic";
import { QuestionAddedDetails } from "./question-details";

export const tabList: CardProps["tabList"] = [
  {
    key: "Questions Added",
    tab: "Questions Added",
    children: <QuestionAddedDetails />,
  },
  {
    key: "Basic Info",
    tab: "Basic Info",
    children: <BasicInfo />,
  },
];
