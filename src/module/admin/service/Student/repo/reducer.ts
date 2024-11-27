import { createRepoReducer } from "@/store/tempelate/repo-reducer";
import { DetailedStudent } from "../fetch/type";
import { FetchAllStudentReq } from "../fetch-all/type";

const slice = createRepoReducer<DetailedStudent, FetchAllStudentReq>("Student/repo");
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
