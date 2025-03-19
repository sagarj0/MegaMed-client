import { Card } from "antd";
import { tabList } from "./tabs";
import { useParams } from "react-router-dom";
import useFetchMentor from "@/module/admin/hooks/user/useFetchUser";

export const ViewMentor: React.FC = () => {
  const { id } = useParams();
  useFetchMentor(id);

  return <Card bordered={false} style={{ boxShadow: "none" }} styles={{ header: { border: "none" } }} tabList={tabList} />;
};
