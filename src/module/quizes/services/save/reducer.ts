import { createBasicReducer } from "@/store/tempelate/basic-reducer";

const slice = createBasicReducer("quiz/save");

export const { setLoading, resetLoading, setError, resetError, resetSuccess, setSuccess } = slice.actions;
export default slice.reducer;
