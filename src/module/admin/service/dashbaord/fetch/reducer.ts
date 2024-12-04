import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { AdminDashboardData } from "./type";

const slice = createFetchReducer<AdminDashboardData>("count/question", {
  totalUsers: {
    totalUserCount: 0,
    roleWiseCounts: [],
  },
  totalQuestions: {
    totalQuestionCount: 0,
    subjectWiseCounts: [],
  },
  userMonthlyStat: [],
});

export const { setLoading, resetLoading, setSuccess, resetSuccess, setError, resetError, setData } = slice.actions;
export default slice.reducer;
