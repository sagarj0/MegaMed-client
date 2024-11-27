import { createRepoReducer } from "@/store/tempelate/repo-reducer";
import { DetailedAdmin } from "../fetch/type";
import { FetchAllAdminReq } from "../fetch-all/type";

const slice = createRepoReducer<DetailedAdmin, FetchAllAdminReq>("admin/repo");
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
