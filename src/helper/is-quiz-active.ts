import { DetailedQuiz } from "@/module/admin/service/quizes/fetch/type";

type IsQuizActiveProp = Pick<DetailedQuiz, "startTime" | "duration" | "bufferTime" | "status">;

export const isQuizActive = (quiz: IsQuizActiveProp): boolean => {
  if (quiz.status !== "Published") return false;
  const currentTime = new Date();
  const startTime = new Date(quiz.startTime!);
  const endTime = new Date(startTime.getTime() + quiz.duration! * 60 * 1000 + quiz.bufferTime! * 60 * 1000);
  return currentTime >= startTime && currentTime <= endTime;
};

export const isQuizFinished = (quiz: IsQuizActiveProp): boolean => {
  const currentTime = new Date();
  const startTime = new Date(quiz.startTime!);
  const endTime = new Date(startTime.getTime() + quiz.duration! * 60 * 1000 + quiz.bufferTime! * 60 * 1000);
  return currentTime > endTime;
};

export const isQuizStarted = (quiz: IsQuizActiveProp): boolean => {
  const currentTime = new Date();
  const startTime = new Date(quiz.startTime!);
  return currentTime >= startTime;
};
