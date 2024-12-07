import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { DetailedQuestion } from "./type";

const slice = createFetchReducer<DetailedQuestion>("invoice/fetch", {} as DetailedQuestion);

export const { setLoading, resetLoading, setData, setError, resetError } = slice.actions;
export default slice.reducer;
