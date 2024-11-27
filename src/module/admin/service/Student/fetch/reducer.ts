import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { DetailedStudent } from "./type";

const slice = createFetchReducer<DetailedStudent>("invoice/fetch", {} as DetailedStudent);

export const { setLoading, resetLoading, setData, setError, resetError } = slice.actions;
export default slice.reducer;
