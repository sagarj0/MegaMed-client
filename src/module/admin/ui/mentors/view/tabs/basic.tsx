import { BasicProfile } from "@/module/auth/ui/profile/tabs/basic-profile";
import { useAppSelector } from "@/store/hook";

export const BasicInfo: React.FC = () => {
  const { data, isLoading } = useAppSelector((root) => root.FetchUser);

  return <BasicProfile userData={data?.user} profileOnly isLoading={isLoading} />;
};
