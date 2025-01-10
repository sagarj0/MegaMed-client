import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";

export type UpdateScore = {
  quizId: string;
  score: number;
};

export type UpdateScoreRes = {
  data: {
    data: {
      id: string;
      createdBy: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null; // Nullable field
      score: number;
      quiz: SaveQuizResponse;
    };
    message: string;
  };
};
