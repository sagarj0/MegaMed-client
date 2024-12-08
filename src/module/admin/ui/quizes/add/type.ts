export type SaveQuizProps = {
  title: string;
  type?: "subject" | "mock_test" | "chapter" | "unit" | "custom";
  subject?: string;
  unit?: string;
  chapter?: string;
  score?: number;
  questionIds: string[];
};

export const SaveQuizKeys: Required<{ [K in keyof SaveQuizProps]: K }> = {
  title: "title",
  type: "type",
  subject: "subject",
  unit: "unit",
  chapter: "chapter",
  score: "score",
  questionIds: "questionIds",
};
