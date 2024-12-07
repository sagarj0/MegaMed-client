import { TablePaginationConfig } from "antd";
import { FetchAllQuestionRequest } from "../service/Questions/fetch-all/type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { fetchAllQuestionAciton } from "../service/Questions/fetch-all/action";
import useStatusMessage from "@/helper/hooks/use-message";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { DetailedQuestion } from "../service/Questions/fetch/type";
import { updateFilter, updatePagination, updateSearch, updateSort } from "../service/Questions/repo/reducer";
import { resetError } from "../service/Questions/fetch-all/reducer";

interface Props {
  filter: FetchAllQuestionRequest;
  fetch?: boolean;
}
const useFetchAllQuestion = (props: Props) => {
  const { filter, fetch = true } = props;

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((root) => root.MentorFetchAllQuestion);
  const { data, pagination, sortOption, filterOption } = useAppSelector((root) => root.MentorQuestionRepo);
  const { pageSize, current, subject, sortField, sortOrder, search } = { ...filter, ...filterOption, ...sortOption, ...pagination };

  useEffect(() => {
    fetch && dispatch(fetchAllQuestionAciton({ pageSize, current, subject, sortField, sortOrder, search }));
  }, [dispatch, search, fetch, pageSize, current, subject, sortField, sortOrder]);

  useStatusMessage({ error, resetError });

  const handleQueryChange = (
    pagination?: TablePaginationConfig,
    filters?: Partial<Record<keyof FetchAllQuestionRequest, FilterValue | FilterValue[0]>>,
    sorter?: SorterResult<DetailedQuestion> | SorterResult<DetailedQuestion>[],
  ) => {
    pagination && dispatch(updatePagination(pagination));
    filters && dispatch(updateFilter(filters));
    sorter && dispatch(updateSort(sorter));
  };
  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));

  return { isLoading, data, pagination, handleSearch, handleQueryChange };
};

export default useFetchAllQuestion;
