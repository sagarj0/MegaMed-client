import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { FetchUserData } from "./type";

const slice = createFetchReducer<FetchUserData>("invoice/fetch", {} as FetchUserData);

export const { setLoading, resetLoading, setData, setError, resetError } = slice.actions;
export default slice.reducer;
