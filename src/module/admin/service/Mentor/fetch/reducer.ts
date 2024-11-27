import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { DetailedMentor } from "./type";

const slice = createFetchReducer<DetailedMentor>("invoice/fetch", {} as DetailedMentor);

export const { setLoading, resetLoading, setData, setError, resetError } = slice.actions;
export default slice.reducer;
