import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { GeneralizedQuiz } from "./type";

const slice = createFetchReducer<GeneralizedQuiz>("quiz/generate", []);

export const { setLoading, resetLoading, setData, setError, resetError, resetSuccess, setSuccess } = slice.actions;
export default slice.reducer;
