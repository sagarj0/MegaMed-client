import { Route } from "react-router-dom";
import { QuizUrls } from "./url";
import { QuizPage } from "../ui";
import { ViewAllChapterWiseTestPage } from "../ui/chapter-wise/view-all";
import { ViewAllSubjectWiseTestPage } from "../ui/subject-wise/view-all";
import { ViewAllUnitWiseTestPage } from "../ui/unit-wise/view-all";
import { ViewAllMockTestPage } from "../ui/mock/view-all";
import { ChapterWiseTestPage } from "../ui/chapter-wise/mcqs";
import { SubjectWiseTestPage } from "../ui/subject-wise/mcqs";
import { UnitWiseTestPage } from "../ui/unit-wise/mcqs";
import { MockTestPage } from "../ui/mock/mcqs";
import { QuizLayout } from "./layout";

export const QuizRoutes = (
  <Route element={<QuizLayout />}>
    <Route path={QuizUrls.quiz} element={<QuizPage />} />
    <Route path={QuizUrls.chapterWise + ":chapter"} element={<ViewAllChapterWiseTestPage />} />
    <Route path={QuizUrls.subjectWise + ":subject"} element={<ViewAllSubjectWiseTestPage />} />
    <Route path={QuizUrls.unitWise + ":unit"} element={<ViewAllUnitWiseTestPage />} />
    <Route path={QuizUrls.mockTest} element={<ViewAllMockTestPage />} />

    <Route path={QuizUrls.giveChapterWiseTest + ":id"} element={<ChapterWiseTestPage />} />
    <Route path={QuizUrls.giveSubjectWiseTest + ":id"} element={<SubjectWiseTestPage />} />
    <Route path={QuizUrls.giveUnitWiseTest + ":id"} element={<UnitWiseTestPage />} />
    <Route path={QuizUrls.giveMockTest + ":id"} element={<MockTestPage />} />
  </Route>
);
