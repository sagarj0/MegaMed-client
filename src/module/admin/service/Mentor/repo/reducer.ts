import { createRepoReducer } from "@/store/tempelate/repo-reducer";
import { DetailedMentor } from "../fetch/type";
import { FetchAllMentorReq } from "../fetch-all/type";

const slice = createRepoReducer<DetailedMentor, FetchAllMentorReq>("Mentor/repo");
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
