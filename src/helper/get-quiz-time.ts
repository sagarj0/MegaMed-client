import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";
import { DetailedQuiz } from "@/module/admin/service/quizes/fetch/type";

interface Props {
  inMinute?: Boolean;
  inString?: Boolean;
  quiz: SaveQuizResponse | DetailedQuiz;
}

// This function is used to get the time of the quiz in minutes or milliseconds
// It takes the props object as an argument which contains the inMinute, inString, and quiz properties
export const getQuizTime = (props: Props) => {
  const { inMinute = false, quiz, inString = false } = props;
  const type = quiz.type;
  const { startTime, duration, bufferTime } = quiz;

  if (startTime && duration && bufferTime) {
    const durationInMilliSecond = duration * 60 * 1000;
    const bufferTimeInMilliSecond = bufferTime * 60 * 1000;
    const totalPeriod = durationInMilliSecond + bufferTimeInMilliSecond;

    if (inString && inMinute) return `${duration} Min + ${bufferTime} Min`;

    return inMinute ? totalPeriod / (60 * 1000) : totalPeriod;
  }

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

export const getQuizRemainingTime = (props: Props): number => {
  const { quiz } = props;
  const { startTime, duration, bufferTime } = quiz;

  if (startTime && duration && bufferTime) {
    const durationInMilliSecond = duration * 60 * 1000;
    const bufferTimeInMilliSecond = bufferTime * 60 * 1000;
    const totalPeriod = durationInMilliSecond + bufferTimeInMilliSecond;

    const currentTime = new Date().getTime();

    const quizEndTime = new Date(startTime).getTime() + totalPeriod;

    return Math.max(quizEndTime - currentTime, 0);
  }
  return 0;
};
