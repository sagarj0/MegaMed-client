import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { QuizDataType } from "@/module/student/ui/quizes/type";

export type UpdateScore = {
  quizId: string;
  score: number;
  answers: Omit<QuizDataType, "correctAnswer">[];
  timeTaken: number;
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
      timeTaken: number;
    };
    message: string;
  };
};
