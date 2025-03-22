import { createRepoReducer } from "@/store/tempelate/repo-reducer";
import { DetailedQuestion } from "../fetch/type";
import { FetchAllQuestionRequest } from "../fetch-all/type";

const slice = createRepoReducer<DetailedQuestion, FetchAllQuestionRequest>("mentor-added/repo", { subject: "physics" });
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
  setFetch,
} = slice.actions;
export default slice.reducer;
