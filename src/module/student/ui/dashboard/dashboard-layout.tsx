interface Props {
  welcomeCard: React.ReactNode;
  overallPerformanceTrendCard: React.ReactNode;
  totalTestsAttemptedCard: React.ReactNode;
  subjectWiseComparisonCard: React.ReactNode;
  rightWrongPieChartCard: React.ReactNode;
  overallPerformanceCard: React.ReactNode;
  subjectsProgressCard: React.ReactNode;
}

export const StudentDashboardLayout: React.FC<Props> = (props) => {
  const {
    welcomeCard,
    overallPerformanceCard,
    overallPerformanceTrendCard,
    rightWrongPieChartCard,
    subjectWiseComparisonCard,
    subjectsProgressCard,
    totalTestsAttemptedCard,
  } = props;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(16, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
        gridColumnGap: "8px",
        gridRowGap: "8px",
      }}
    >
      <div style={{ gridArea: "1 / 1 / 3 / 7" }}>{welcomeCard}</div>
      <div style={{ gridArea: "3 / 1 / 9 / 9" }}>{overallPerformanceTrendCard}</div>
      <div style={{ gridArea: "1 / 7 / 3 / 10" }}>{totalTestsAttemptedCard}</div>
      <div style={{ gridArea: "3 / 9 / 6 / 13" }}>{subjectWiseComparisonCard}</div>
      <div style={{ gridArea: "6 / 9 / 9 / 13" }}>{rightWrongPieChartCard}</div>
      <div style={{ gridArea: "1 / 10 / 3 / 13" }}>{overallPerformanceCard}</div>
      <div style={{ gridArea: "1 / 13 / 9 / 17" }}>{subjectsProgressCard}</div>
    </div>
  );
};

export const commonCardStyle: React.CSSProperties = {
  boxShadow: "0px 0 4px 2px rgba(0, 0, 0, 0.15)",
  height: "100%",
  textAlign: "start",
};
