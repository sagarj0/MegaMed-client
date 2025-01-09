import { TablePaginationConfig } from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { SorterResult } from "antd/es/table/interface";
import { FetchAllUserReq } from "../../service/Users/fetch-all/type";
import { fetchAllUserAction } from "../../service/Users/fetch-all/action";
import { DetailedUser } from "../../service/Users/fetch/type";
import { updateFilter, updatePagination, updateSearch, updateSort } from "../../service/Users/repo/reducer";
import { resetError } from "../../service/Users/fetch-all/reducer";

interface Props {
  filter: FetchAllUserReq;
  fetch?: boolean;
}
const useFetchAllUser = (props: Props) => {
  const { filter, fetch = true } = props;

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((root) => root.FetchAllUser);
  const { data, pagination, filterOption } = useAppSelector((root) => root.UserRepo);
  const { success } = useAppSelector((root) => root.BulkEditUser);
  const { pageSize, current, role, isPaidUser } = { ...filter, ...filterOption, ...pagination };

  useEffect(() => {
    if (fetch) dispatch(fetchAllUserAction({ pageSize, current, role, isPaidUser }));
  }, [dispatch, fetch, pageSize, current, success]);

  useStatusMessage({ error, resetError });

  const handleQueryChange = (
    pagination?: TablePaginationConfig,
    filters?: Partial<FetchAllUserReq>,
    sorter?: SorterResult<DetailedUser> | SorterResult<DetailedUser>[],
  ) => {
    pagination && dispatch(updatePagination(pagination));
    filters && dispatch(updateFilter(filters));
    sorter && dispatch(updateSort(sorter));
  };

  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));
  return { isLoading, data, pagination, handleSearch, handleQueryChange };
};

export default useFetchAllUser;
