import { ProfileComponent } from "@/module/auth/ui/profile";
import { useAppSelector } from "@/store/hook";

export const BasicInfo: React.FC = () => {
  const { data, isLoading } = useAppSelector((root) => root.FetchUser);

  return <ProfileComponent userData={data?.user} profileOnly isLoading={isLoading} />;
};
