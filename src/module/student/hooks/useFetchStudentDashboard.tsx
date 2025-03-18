import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import useStatusMessage from "@/helper/hooks/use-message";
import { fetchSubjectsProgress } from "../services/dashboard/subject-progress/action";
import { fetchOverAll } from "../services/dashboard/overall/action";
import { resetError as resetSubjectError } from "../services/dashboard/subject-progress/reducer";
import { resetError as resetOverallError } from "../services/dashboard/overall/reducer";

const useFetchStudentDashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!Boolean(subjectSucc)) dispatch(fetchSubjectsProgress());
    if (!Boolean(overAllSucc)) dispatch(fetchOverAll());
  }, [dispatch]);

  const { subjectPerformance, overallPerformance } = useAppSelector((root) => ({
    subjectPerformance: root.FetchSubjectPerformance,
    overallPerformance: root.FetchOverallPerformance,
  }));

  const isLoading = subjectPerformance.isLoading || overallPerformance.isLoading;
  const data = { subjectPerformance: subjectPerformance.data, overallPerformance: overallPerformance.data };
  const { error: subjectError, success: subjectSucc } = subjectPerformance;
  const { error: overallError, success: overAllSucc } = overallPerformance;

  useStatusMessage({ error: subjectError, resetError: resetSubjectError });
  useStatusMessage({ error: overallError, resetError: resetOverallError });

  return { isLoading, data };
};

export default useFetchStudentDashboard;
