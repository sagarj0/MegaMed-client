import { OverallPerformance } from "./chart-components/overallperformance";
import { OverallPerformanceTrend } from "./chart-components/overallperformance-trend";
import { RightWronPie } from "./chart-components/rightwrong-pie";
import { SubjectWiseComparison } from "./chart-components/subjectwise-comparison";
import { SubjectWiseProgress } from "./chart-components/subjectwise-progress";
import { TotalTestCount } from "./chart-components/totaltest";
import { WelcomeCard } from "./chart-components/welcome";
import { StudentDashboardLayout } from "./dashboard-layout";

export const StudentDashboard: React.FC = () => {
  return (
    <StudentDashboardLayout
      welcomeCard={<WelcomeCard />}
      totalTestsAttemptedCard={<TotalTestCount />}
      overallPerformanceCard={<OverallPerformance />}
      overallPerformanceTrendCard={<OverallPerformanceTrend />}
      subjectWiseComparisonCard={<SubjectWiseComparison />}
      rightWrongPieChartCard={<RightWronPie />}
      subjectsProgressCard={<SubjectWiseProgress />}
    />
  );
};
