import { createRepoReducer } from "@/store/tempelate/repo-reducer";
import { SaveQuizResponse } from "../add/type";
import { FetchAllQuizRequest } from "../fetch-all/type";

const slice = createRepoReducer<SaveQuizResponse, FetchAllQuizRequest>("quizes/repo", { type: "subject" });
export const {
  setData,
  setIsFetched,
  addDataList,
  removeData,
  resetRepoState,
  updateFilter,
  updatePagination,
  updateSearch,
  updateSort,
  updateSingleData,
} = slice.actions;
export default slice.reducer;
