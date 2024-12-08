import { createBasicReducer } from "@/store/tempelate/basic-reducer";

const slice = createBasicReducer("quiz/update-score");

export const { setLoading, resetLoading, setError, resetError, resetSuccess, setSuccess } = slice.actions;
export default slice.reducer;
