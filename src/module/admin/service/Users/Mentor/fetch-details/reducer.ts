import { createFetchReducer } from "@/store/tempelate/fetch-reducer";
import { FetchMentorDetails } from "./type";

const slice = createFetchReducer<FetchMentorDetails>("mentor-details/fetch", {} as FetchMentorDetails);

export const { setLoading, resetLoading, setData, setError, resetError } = slice.actions;
export default slice.reducer;
