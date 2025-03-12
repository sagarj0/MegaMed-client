import { SaveQuizProps } from "@/module/admin/ui/quizes/add/type";

export type PostQuizRequest = SaveQuizProps;

export type SaveQuizResponse = Omit<SaveQuizProps, "questionIds"> & {
  id: string;
  createdBy: string;
  questionCount: number;
  createdAt: string;
  score?: number;
};

export type PostQuizResponse = {
  data: {
    data: SaveQuizResponse;
    message: string;
  };
};
