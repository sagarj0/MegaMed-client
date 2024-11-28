import { Route } from "react-router-dom";
import { QuizUrls } from "./url";
import { QuizPage } from "../ui";
import { ChapterWiseTestPage } from "../ui/chapter-wise";
import { SubjectWiseTestPage } from "../ui/subject-wise";
import { MockTestPage } from "../ui/mock";
import { UnitWiseTestPage } from "../ui/unit-wise";

export const QuizRoutes = (
  <Route>
    <Route path={QuizUrls.quiz} element={<QuizPage />} />
    <Route path={QuizUrls.chapterWise + ":chapter"} element={<ChapterWiseTestPage />} />
    <Route path={QuizUrls.subjectWise + ":subject"} element={<SubjectWiseTestPage />} />
    <Route path={QuizUrls.unitWise + ":unit"} element={<UnitWiseTestPage />} />
    <Route path={QuizUrls.mockTest} element={<MockTestPage />} />
  </Route>
);
