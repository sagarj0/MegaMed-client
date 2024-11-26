import { TablePaginationConfig } from "antd";
import { FetchAllQuestionRequest } from "../service/Questions/fetch-all/type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { fetchAllQuestionAciton } from "../service/Questions/fetch-all/action";
import useStatusMessage from "@/helper/hooks/use-message";
import { SorterResult } from "antd/es/table/interface";
import { DetailedQuestion } from "../service/Questions/fetch/type";
import { updateFilter, updatePagination, updateSearch, updateSort } from "../service/Questions/repo/reducer";
import { resetError } from "../service/Questions/fetch-all/reducer";

interface Props {
  filter: FetchAllQuestionRequest;
  fetch?: boolean;
}
const useFetchAllQuestion = (props: Props) => {
  const { filter, fetch = true } = props;
  const {} = filter;

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((root) => root.FetchAllQuestion);
  const { data, pagination, search } = useAppSelector((root) => root.QuestionRepo);

  useEffect(() => {
    fetch && dispatch(fetchAllQuestionAciton({}));
  }, [dispatch, search, fetch]);

  useStatusMessage({ error, resetError });

  const handleQueryChange = (pagination: TablePaginationConfig, filter: any, sorter: SorterResult<DetailedQuestion>) => {
    dispatch(updatePagination(pagination));
    dispatch(updateSort(sorter));
    dispatch(updateFilter(filter));
  };

  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));
  return { isLoading, data, pagination, handleSearch, handleQueryChange };
};

export default useFetchAllQuestion;
