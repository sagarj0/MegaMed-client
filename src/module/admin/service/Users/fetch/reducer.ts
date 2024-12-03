import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { DetailedUser } from "./type";

const slice = createFetchReducer<DetailedUser>("invoice/fetch", {} as DetailedUser);

export const { setLoading, resetLoading, setData, setError, resetError } = slice.actions;
export default slice.reducer;
