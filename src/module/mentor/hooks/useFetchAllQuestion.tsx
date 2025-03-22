import { TablePaginationConfig } from "antd";
import { FetchAllQuestionRequest } from "../service/Questions/fetch-all/type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { fetchAllQuestionAciton } from "../service/Questions/fetch-all/action";
import useStatusMessage from "@/helper/hooks/use-message";
import { updateFilter, updatePagination, updateSearch } from "../service/Questions/repo/reducer";
import { resetError } from "../service/Questions/fetch-all/reducer";

interface Props {
  filter: FetchAllQuestionRequest;
  fetch?: boolean;
}
const useFetchAllQuestion = (props: Props) => {
  const { filter, fetch = true } = props;

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((root) => root.MentorFetchAllQuestion);
  const { data, pagination, sortOption, filterOption, isFetched } = useAppSelector((root) => root.MentorQuestionRepo);
  const { pageSize, current, subject, search, me, unit, chapter } = { ...filter, ...filterOption, ...sortOption, ...pagination };

  useEffect(() => {
    if (fetch && !isFetched) dispatch(fetchAllQuestionAciton({ pageSize, current, subject, unit, chapter, search, me }));
  }, [dispatch, search, fetch, pageSize, current, subject, unit, chapter, me]);

  useStatusMessage({ error, resetError });

  const handleQueryChange = (pagination?: TablePaginationConfig, filters?: Partial<FetchAllQuestionRequest>) => {
    if (pagination) dispatch(updatePagination(pagination));
    if (filters) {
      let filterObject = { ...filterOption, ...filters };
      if (filters.subject) filterObject = { ...filterObject, unit: undefined, chapter: undefined }; // reset unit and chapter if subject is changed
      dispatch(updateFilter(filterObject));
    }
  };
  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));

  return { isLoading, data, pagination, handleSearch, handleQueryChange, subject, me };
};

export default useFetchAllQuestion;
