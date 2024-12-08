import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { DetailedQuiz } from "./type";

const slice = createFetchReducer<DetailedQuiz>("quiz/generate", []);

export const { setLoading, resetLoading, setData, setError, resetError, resetSuccess, setSuccess } = slice.actions;
export default slice.reducer;
