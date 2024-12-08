import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { DetailedQuiz } from "./type";

const slice = createFetchReducer<DetailedQuiz>("invoice/fetch", {} as DetailedQuiz);

export const { setLoading, resetLoading, setData, setError, resetError, resetSuccess } = slice.actions;
export default slice.reducer;
