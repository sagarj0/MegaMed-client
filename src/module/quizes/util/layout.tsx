import { Outlet } from "react-router-dom";

export const QuizLayout: React.FC = () => {
  return (
    <div style={{ minHeight: "75vh", width: "100%", margin: "auto" }}>
      <Outlet />
    </div>
  );
};
