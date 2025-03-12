export type SaveQuizProps = {
  title: string;
  type?: "subject" | "mock_test" | "chapter" | "unit" | "custom";
  subject?: string;
  unit?: string;
  chapter?: string;
  questionIds: string[];

  pageSize?: number;

  startTime?: string;
  duration?: number; // in minutes
  bufferTime?: number; // in minutes
};

export const SaveQuizKeys: Required<{ [K in keyof SaveQuizProps]: K }> = {
  title: "title",
  type: "type",
  subject: "subject",
  unit: "unit",
  chapter: "chapter",
  questionIds: "questionIds",

  pageSize: "pageSize",

  startTime: "startTime",
  duration: "duration",
  bufferTime: "bufferTime",
};
