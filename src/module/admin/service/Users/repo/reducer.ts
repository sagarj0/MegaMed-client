import { createRepoReducer } from "@/store/tempelate/repo-reducer";
import { DetailedUser } from "../fetch/type";
import { FetchAllUserReq } from "../fetch-all/type";

const slice = createRepoReducer<DetailedUser, FetchAllUserReq>("User/repo");
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
