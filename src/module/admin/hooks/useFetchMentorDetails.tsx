import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError } from "../service/Users/fetch/reducer";
import { fetchMentorDetails } from "../service/Users/Mentor/fetch-details/action";
import { FetchMentorDetailsReq } from "../service/Users/Mentor/fetch-details/type";

const useFetchMentorDetails = (id: string | undefined, timeValue: FetchMentorDetailsReq["timeValue"]) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && timeValue) dispatch(fetchMentorDetails({ id, timeValue }));
  }, [dispatch, id, timeValue]);

  const { data, error, isLoading } = useAppSelector((root) => root.FetchMentorDetails);

  useStatusMessage({ error, resetError });

  return { isLoading, data };
};

export default useFetchMentorDetails;
