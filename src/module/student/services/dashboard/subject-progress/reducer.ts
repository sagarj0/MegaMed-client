import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { SubjectPerformance } from "./type";

const slice = createFetchReducer<SubjectPerformance[]>("student-dashboard/subject-progress", []);

export const { setLoading, resetLoading, setError, resetError, resetSuccess, setData, setSuccess } = slice.actions;
export default slice.reducer;
