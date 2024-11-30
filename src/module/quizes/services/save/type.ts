export type SaveQuizReq = {
  title: string;
  type: string;
  subject: string;
  score: number;
  questionIds: string[];
};

export type SaveQuizRes = {
  data: {
    data: {
      createdBy: string;
      title: string;
      type: string;
      subject: string;
      unit: string;
      chapter: string;
      id: string;
      createdAt: string; // ISO date string
      updatedAt: string; // ISO date string
      deletedAt: string | null; // Nullable field
      questionCount: number;
      score: number;
    };
    message: string;
  };
};
