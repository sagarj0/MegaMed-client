import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { DashboardData } from "./type";

const slice = createFetchReducer<DashboardData>("student-dashboard/overall-performance", {
  totalQuizzes: 0,
  progress: {
    progressChangePercentage: 0,
    overallPerformance: 0,
  },
  lastQuizData: [],
  topFivePerformers: [],
  performanceTrend: [],
});

export const { setLoading, resetLoading, setError, resetError, resetSuccess, setData, setSuccess } = slice.actions;
export default slice.reducer;
