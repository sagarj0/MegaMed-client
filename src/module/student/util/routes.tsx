import { Route } from "react-router-dom";
import { StudentLayout } from "./layout";
import { StudentUrls } from "./urls";
import { StudentDashboard } from "../ui/dashboard";
import { ProfileComponent } from "@/module/auth/ui/profile";
import { QuizPage } from "../ui/quizes/view-all";
import { InteractiveQuizPage } from "../ui/quizes/interactive-quiz";
import { ViewAttemptedQuiz } from "../ui/quizes/view-attempted-quiz";

export const StudentRoutes = (
  <Route element={<StudentLayout />}>
    <Route path={StudentUrls.student} element={<StudentDashboard />} />
    <Route path={StudentUrls.studentProfile} element={<ProfileComponent />} />
    <Route path={StudentUrls.studentQuizes} element={<QuizPage />} />
    <Route path={StudentUrls.studentQuizes + ":id"} element={<InteractiveQuizPage />} />
    <Route path={StudentUrls.studentAttemptedQuizes + ":id"} element={<ViewAttemptedQuiz />} />
  </Route>
);
