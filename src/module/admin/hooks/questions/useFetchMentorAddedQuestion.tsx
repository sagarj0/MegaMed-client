import { TablePaginationConfig } from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { updateFilter, updatePagination, updateSearch } from "../../service/Questions/repo/reducer";
import { resetError, resetSuccess } from "../../service/Questions/fetch-all-mentor-added/reducer";
import { FetchAllQuestionRequest } from "../../service/Questions/fetch-all/type";
import { fetchAllMentorAddedAction } from "../../service/Questions/fetch-all-mentor-added/action";
import { setFetch } from "../../service/Questions/repo/mentor-added-qs-repo";

interface Props {
  filter: FetchAllQuestionRequest;
}
const useFetchAllMentorAddedQuestions = (props: Props) => {
  const { filter } = props;

  const dispatch = useAppDispatch();

  const { isLoading, error, success } = useAppSelector((root) => root.FetchAllMentorAddedQuestions);
  const { data, pagination, filterOption, isFetched, fetch } = useAppSelector((root) => root.MentorAddedQuestionRepo);
  const { pageSize, current, subject, search, mentorId, timeValue } = { ...filter, ...filterOption, ...pagination };

  useEffect(() => {
    if (fetch && !isFetched) dispatch(fetchAllMentorAddedAction({ pageSize, current, subject, mentorId, timeValue }));
  }, [dispatch, search, fetch, pageSize, current, subject, mentorId, timeValue, isFetched]);

  const onReset = () => dispatch(setFetch(false));
  useStatusMessage({ error, resetError, onErrorReset: onReset });
  useStatusMessage({ success, resetSuccess, onSuccessReset: onReset });

  const handleQueryChange = (pagination?: TablePaginationConfig, filters?: Partial<FetchAllQuestionRequest>) => {
    pagination && dispatch(updatePagination(pagination));
    filters && dispatch(updateFilter(filters));
  };
  const handleSearch = (searchText?: string) => dispatch(updateSearch(searchText));

  return { isLoading, data, pagination, handleSearch, handleQueryChange, subject };
};

export default useFetchAllMentorAddedQuestions;
