import { TablePaginationConfig } from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { FetchAllAdminReq } from "../service/Admins/fetch-all/type";
import { DetailedAdmin } from "../service/Admins/fetch/type";
import { fetchAllAdminAction } from "../service/Admins/fetch-all/action";
import { updateFilter, updatePagination, updateSearch, updateSort } from "../service/Admins/repo/reducer";
import { resetError } from "../service/Admins/fetch-all/reducer";

interface Props {
  filter: FetchAllAdminReq;
  fetch?: boolean;
}
const useFetchAllAdmin = (props: Props) => {
  const { filter, fetch = true } = props;

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((root) => root.FetchAllAdmin);
  const { data, pagination, search, sortOption, filterOption } = useAppSelector((root) => root.AdminRepo);
  const { sortField, sortOrder } = sortOption;
  const combinedFilter = { ...filterOption, ...filter };
  const { pageSize, current } = combinedFilter;

  useEffect(() => {
    fetch && dispatch(fetchAllAdminAction({ ...filter }));
  }, [dispatch, search, fetch, pageSize, current, sortField, sortOrder]);

  useStatusMessage({ error, resetError });

  const handleQueryChange = (
    pagination?: TablePaginationConfig,
    filters?: Partial<Record<keyof FetchAllAdminReq, FilterValue | FilterValue[0]>>,
    sorter?: SorterResult<DetailedAdmin> | SorterResult<DetailedAdmin>[],
  ) => {
    pagination && dispatch(updatePagination(pagination));
    filters && dispatch(updateFilter(filters));
    sorter && dispatch(updateSort(sorter));
  };

  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));
  return { isLoading, data, pagination, handleSearch, handleQueryChange };
};

export default useFetchAllAdmin;
