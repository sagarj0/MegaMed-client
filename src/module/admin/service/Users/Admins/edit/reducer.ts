import { createBasicReducer } from "@/store/tempelate/basic-reducer";

const slice = createBasicReducer("update/admin");

export const { setLoading, resetLoading, setSuccess, resetSuccess, setError, resetError } = slice.actions;
export default slice.reducer;
