import { SelectProps } from "antd";
import { SaveQuizProps } from "./type";

export const quizTypeOptions: SelectProps["options"] = [
  { label: "Mock Test", value: "mock_test" },
  { label: "Subject Wise", value: "subject" },
  { label: "Unit Wise", value: "unit" },
  { label: "Chapter Wise", value: "chapter" },
  { label: "Custom", value: "custom" },
] as Array<{ label: string; value: SaveQuizProps["type"] }>;
