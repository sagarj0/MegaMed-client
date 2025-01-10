import { DetailedQuiz } from "@/module/admin/service/quizes/fetch/type";

export const getQuizTime = (type: DetailedQuiz["type"], inMinute: Boolean = false) => {
  switch (type) {
    case "chapter":
      return inMinute ? 40 : 40 * 60 * 1000;
    case "subject":
      return inMinute ? 40 : 40 * 60 * 1000;
    case "unit":
      return inMinute ? 40 : 40 * 60 * 1000;
    case "mock_test":
      return inMinute ? 180 : 180 * 60 * 1000;
    case "custom":
      return inMinute ? 60 : 60 * 60 * 1000;
    default:
      return inMinute ? 40 : 40 * 60 * 1000;
  }
};
