import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { DashboardData } from "../type";

const slice = createFetchReducer<DashboardData>("count/question", {
  questionCount: {
    totalQuestionCount: 0,
    subjectWiseCounts: [],
  },
  studentCount: 0,
  mentorCount: 0,
  adminCount: 0,
});

export const { setLoading, resetLoading, setSuccess, resetSuccess, setError, resetError, setData } = slice.actions;
export default slice.reducer;
