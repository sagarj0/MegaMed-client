import { createRepoReducer } from "@/store/tempelate/repo-reducer";
import { DetailedQuestion } from "../fetch/type";

const slice = createRepoReducer<DetailedQuestion>("invoice/repo");
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
