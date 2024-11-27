import { TablePaginationConfig } from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { FetchAllMentorReq } from "../service/Mentor/fetch-all/type";
import { fetchAllMentorAction } from "../service/Mentor/fetch-all/action";
import { DetailedMentor } from "../service/Mentor/fetch/type";
import { updateFilter, updatePagination, updateSearch, updateSort } from "../service/Mentor/repo/reducer";
import { resetError } from "../service/Mentor/fetch-all/reducer";

interface Props {
  filter: FetchAllMentorReq;
  fetch?: boolean;
}
const useFetchAllMentor = (props: Props) => {
  const { filter, fetch = true } = props;

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((root) => root.FetchAllMentor);
  const { data, pagination, search, sortOption, filterOption } = useAppSelector((root) => root.MentorRepo);
  const { sortField, sortOrder } = sortOption;
  const combinedFilter = { ...filterOption, ...filter };
  const { pageSize, current } = combinedFilter;

  useEffect(() => {
    fetch && dispatch(fetchAllMentorAction({ ...filter }));
  }, [dispatch, search, fetch, pageSize, current, sortField, sortOrder]);

  useStatusMessage({ error, resetError });

  const handleQueryChange = (
    pagination?: TablePaginationConfig,
    filters?: Partial<Record<keyof FetchAllMentorReq, FilterValue | FilterValue[0]>>,
    sorter?: SorterResult<DetailedMentor> | SorterResult<DetailedMentor>[],
  ) => {
    pagination && dispatch(updatePagination(pagination));
    filters && dispatch(updateFilter(filters));
    sorter && dispatch(updateSort(sorter));
  };

  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));
  return { isLoading, data, pagination, handleSearch, handleQueryChange };
};

export default useFetchAllMentor;
