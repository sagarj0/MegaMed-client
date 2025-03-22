import { TablePaginationConfig } from "antd";
import { FetchAllQuestionRequest } from "../../service/Questions/fetch-all/type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { fetchAllQuestionAciton } from "../../service/Questions/fetch-all/action";
import useStatusMessage from "@/helper/hooks/use-message";
import { SorterResult } from "antd/es/table/interface";
import { DetailedQuestion } from "../../service/Questions/fetch/type";
import { updateFilter, updatePagination, updateSearch, updateSort } from "../../service/Questions/repo/reducer";
import { resetError } from "../../service/Questions/fetch-all/reducer";

interface Props {
  filter: FetchAllQuestionRequest;
  fetch?: boolean;
}
const useFetchAllQuestion = (props: Props) => {
  const { filter, fetch = true } = props;

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((root) => root.FetchAllQuestion);
  const { data, pagination, sortOption, filterOption, isFetched } = useAppSelector((root) => root.QuestionRepo);
  const { pageSize, current, subject, unit, chapter, search } = { ...filter, ...filterOption, ...sortOption, ...pagination };

  useEffect(() => {
    if (fetch && !isFetched) dispatch(fetchAllQuestionAciton({ pageSize, current, subject, unit, chapter, search }));
  }, [dispatch, search, fetch, pageSize, current, subject, unit, chapter]);

  useStatusMessage({ error, resetError });

  const handleQueryChange = (
    pagination?: TablePaginationConfig,
    filters?: Partial<FetchAllQuestionRequest>,
    sorter?: SorterResult<DetailedQuestion> | SorterResult<DetailedQuestion>[],
  ) => {
    pagination && dispatch(updatePagination(pagination));
    filters && dispatch(updateFilter(filters));
    sorter && dispatch(updateSort(sorter));
  };
  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));

  return { isLoading, data, pagination, handleSearch, handleQueryChange, subject };
};

export default useFetchAllQuestion;
