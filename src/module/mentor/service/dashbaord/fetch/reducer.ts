import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { AdminDashboardData } from "./type";

const slice = createFetchReducer<AdminDashboardData>("count/question", {
  totalQuestions: {
    totalQuestionCount: 0,
    subjectWiseCounts: [],
  },
  questionMonthlyStat: [],
});

export const { setLoading, resetLoading, setSuccess, resetSuccess, setError, resetError, setData } = slice.actions;
export default slice.reducer;
