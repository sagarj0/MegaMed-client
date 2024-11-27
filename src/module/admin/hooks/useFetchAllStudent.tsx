import { TablePaginationConfig } from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { FetchAllStudentReq } from "../service/Student/fetch-all/type";
import { fetchAllStudentAction } from "../service/Student/fetch-all/action";
import { DetailedStudent } from "../service/Student/fetch/type";
import { updateFilter, updatePagination, updateSearch, updateSort } from "../service/Student/repo/reducer";
import { resetError } from "../service/Student/fetch-all/reducer";

interface Props {
  filter: FetchAllStudentReq;
  fetch?: boolean;
}
const useFetchAllStudent = (props: Props) => {
  const { filter, fetch = true } = props;

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((root) => root.FetchAllStudent);
  const { data, pagination, search, sortOption, filterOption } = useAppSelector((root) => root.StudentRepo);
  const { sortField, sortOrder } = sortOption;
  const combinedFilter = { ...filterOption, ...filter };
  const { pageSize, current } = combinedFilter;

  useEffect(() => {
    fetch && dispatch(fetchAllStudentAction({ ...filter }));
  }, [dispatch, search, fetch, pageSize, current, sortField, sortOrder]);

  useStatusMessage({ error, resetError });

  const handleQueryChange = (
    pagination?: TablePaginationConfig,
    filters?: Partial<Record<keyof FetchAllStudentReq, FilterValue | FilterValue[0]>>,
    sorter?: SorterResult<DetailedStudent> | SorterResult<DetailedStudent>[],
  ) => {
    pagination && dispatch(updatePagination(pagination));
    filters && dispatch(updateFilter(filters));
    sorter && dispatch(updateSort(sorter));
  };

  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));
  return { isLoading, data, pagination, handleSearch, handleQueryChange };
};

export default useFetchAllStudent;
