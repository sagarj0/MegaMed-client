import useFetchMentor from "@/module/admin/hooks/useFetchUser";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import { tabList } from "./tabs";

export const ViewMentor: React.FC = () => {
  const { id } = useParams();
  useFetchMentor(id);

  return <Card bordered={false} style={{ boxShadow: "none" }} styles={{ header: { border: "none" } }} tabList={tabList} />;
};
