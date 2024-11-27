import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { DetailedAdmin } from "./type";

const slice = createFetchReducer<DetailedAdmin>("invoice/fetch", {} as DetailedAdmin);

export const { setLoading, resetLoading, setData, setError, resetError } = slice.actions;
export default slice.reducer;
