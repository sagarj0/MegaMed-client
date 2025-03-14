import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { ViewQuizReport } from "./type";

const slice = createFetchReducer<ViewQuizReport>("quiz/report", {
  id: "",
  title: "",
  type: "subject",
  createdAt: "",
  createdBy: "",
  questionCount: 0,
  scores: [],
});

export const { setLoading, resetLoading, setSuccess, resetSuccess, setError, resetError, setData } = slice.actions;
export default slice.reducer;
