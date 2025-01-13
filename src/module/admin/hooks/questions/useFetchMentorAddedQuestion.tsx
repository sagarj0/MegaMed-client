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
  const { pageSize, current, subject, search, mentorId, timeValue } = { ...filter, ...filterOption, ...pagination };

  useEffect(() => {
    if (fetch) dispatch(fetchAllMentorAddedAction({ pageSize, current, subject, mentorId, timeValue }));
  }, [dispatch, search, fetch, pageSize, current, subject, mentorId, timeValue, isFetched]);

  useStatusMessage({ error, resetError });

  const handleQueryChange = (pagination?: TablePaginationConfig, filters?: Partial<FetchAllQuestionRequest>) => {
    pagination && dispatch(updatePagination(pagination));
    filters && dispatch(updateFilter(filters));
  };
  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));

  return { isLoading, data, pagination, handleSearch, handleQueryChange, subject };
};

export default useFetchAllMentorAddedQuestions;
