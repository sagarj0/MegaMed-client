import { TablePaginationConfig } from "antd";
import { FetchAllQuizRequest } from "../../service/quizes/fetch-all/type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { fetchAllQuizAciton } from "../../service/quizes/fetch-all/action";
import useStatusMessage from "@/helper/hooks/use-message";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { updateFilter, updatePagination, updateSearch, updateSort } from "../../service/quizes/repo/reducer";
import { resetError } from "../../service/quizes/fetch-all/reducer";
import { SaveQuizResponse } from "../../service/quizes/add/type";

interface Props {
  filter: FetchAllQuizRequest;
  fetch?: boolean;
}
const useFetchAllQuiz = (props: Props) => {
  const { filter, fetch = true } = props;

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((root) => root.FetchAllQuiz);
  const { data, pagination, sortOption, filterOption, isFetched } = useAppSelector((root) => root.QuizRepo);
  const { pageSize, current, subject, sortField, sortOrder, chapter, unit, type } = { ...filter, ...filterOption, ...sortOption, ...pagination };

  useEffect(() => {
    if (fetch && !isFetched) dispatch(fetchAllQuizAciton({ pageSize, current, sortField, sortOrder, subject, chapter, unit, type }));
  }, [dispatch, fetch, pageSize, current, subject, sortField, sortOrder, chapter, unit, type]);

  useStatusMessage({ error, resetError });

  const handleQueryChange = (
    pagination?: TablePaginationConfig,
    filters?: Partial<Record<keyof FetchAllQuizRequest, FilterValue | FilterValue[0]>>,
    sorter?: SorterResult<SaveQuizResponse> | SorterResult<SaveQuizResponse>[],
  ) => {
    pagination && dispatch(updatePagination(pagination));
    filters && dispatch(updateFilter(filters));
    sorter && dispatch(updateSort(sorter));
  };

  const handleFilter = (filter: FetchAllQuizRequest) => dispatch(updateFilter(filter));
  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));

  return { isLoading, data, pagination, handleSearch, handleQueryChange, filterOption, handleFilter };
};

export default useFetchAllQuiz;
