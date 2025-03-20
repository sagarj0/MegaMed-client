import { Grid } from "antd";

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

  const { md, xl } = Grid.useBreakpoint();

  // XL and above layout (≥1200px)
  if (xl) {
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
        <div style={{ gridArea: "1 / 7 / 3 / 10" }}>{totalTestsAttemptedCard}</div>
        <div style={{ gridArea: "1 / 10 / 3 / 13" }}>{overallPerformanceCard}</div>
        <div style={{ gridArea: "3 / 1 / 9 / 9" }}>{overallPerformanceTrendCard}</div>
        <div style={{ gridArea: "3 / 9 / 6 / 13" }}>{subjectWiseComparisonCard}</div>
        <div style={{ gridArea: "6 / 9 / 9 / 13" }}>{rightWrongPieChartCard}</div>
        <div style={{ gridArea: "1 / 13 / 9 / 17" }}>{subjectsProgressCard}</div>
      </div>
    );
  }

  // MD to XL layout (768px-1199px)
  if (md) {
    return (
      <div
        style={{
          width: "100%",
          height: "120vh",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(12, 1fr)",
          gridColumnGap: "16px",
          gridRowGap: "16px",
        }}
      >
        <div style={{ gridArea: "1 / 1 / 3 / 7" }}>{welcomeCard}</div>
        <div style={{ gridArea: "1 / 7 / 3 / 10" }}>{totalTestsAttemptedCard}</div>
        <div style={{ gridArea: "1 / 10 / 3 / 13" }}>{overallPerformanceCard}</div>
        <div style={{ gridArea: "3 / 1 / 9 / 8" }}>{overallPerformanceTrendCard}</div>
        <div style={{ gridArea: "3 / 8 / 6 / 13" }}>{subjectWiseComparisonCard}</div>
        <div style={{ gridArea: "6 / 8 / 9 / 13" }}>{rightWrongPieChartCard}</div>

        <div style={{ gridArea: "9 / 1 / 13 / 13" }}>{subjectsProgressCard}</div>
      </div>
    );
  }

  // Small screens and below (<768px) - Stacked layout
  return (
    <div
      style={{
        maxWidth: "100%",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "16px",
      }}
    >
      <div style={{ height: "20vh" }}>{welcomeCard}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", height: "20vh" }}>
        <div>{totalTestsAttemptedCard}</div>
        <div>{overallPerformanceCard}</div>
      </div>
      <div>{overallPerformanceTrendCard}</div>
      <div>{subjectWiseComparisonCard}</div>
      <div>{rightWrongPieChartCard}</div>
      <div>{subjectsProgressCard}</div>
    </div>
  );
};

export const commonCardStyle: React.CSSProperties = {
  boxShadow: "0px 0 4px 2px rgba(0, 0, 0, 0.15)",
  height: "100%",
  textAlign: "start",
};
