import { TablePaginationConfig } from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { updateFilter, updatePagination, updateSearch } from "../../service/Questions/repo/mentor-added-qs-repo";
import { resetError } from "../../service/Questions/fetch-all-mentor-added/reducer";
import { FetchAllQuestionRequest } from "../../service/Questions/fetch-all/type";
import { fetchAllMentorAddedAction } from "../../service/Questions/fetch-all-mentor-added/action";

interface Props {
  filter: FetchAllQuestionRequest;
  fetch?: boolean;
}
const useFetchAllMentorAddedQuestions = (props: Props) => {
  const { filter, fetch = true } = props;

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((root) => root.FetchAllMentorAddedQuestions);
  const { data, pagination, filterOption, isFetched } = useAppSelector((root) => root.MentorAddedQuestionRepo);
  const { pageSize, current, subject, unit, chapter, search, userId } = { ...filter, ...filterOption, ...pagination };

  useEffect(() => {
    if (fetch) dispatch(fetchAllMentorAddedAction({ pageSize, current, subject, userId, unit, chapter }));
  }, [dispatch, search, fetch, pageSize, current, subject, userId, isFetched, unit, chapter]);

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

  return { isLoading, data, pagination, handleSearch, handleQueryChange, subject };
};

export default useFetchAllMentorAddedQuestions;
