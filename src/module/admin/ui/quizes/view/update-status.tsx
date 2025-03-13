import { editQuizAction } from "@/module/admin/service/quizes/edit/action";
import { resetSuccess, resetError } from "@/module/admin/service/quizes/edit/reducer";
import { setData } from "@/module/admin/service/quizes/fetch/reducer";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { RetweetOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { QuizStatus } from "../add/type";

export const UpdateQuizStatus: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((root) => root.FetchQuiz);
  const { isLoading, error, success } = useAppSelector((root) => root.EditQuiz);

  const toggleStatus = data.status === QuizStatus.Published ? QuizStatus.Draft : QuizStatus.Published;

  const handleUpdateStatus = () =>
    dispatch(
      editQuizAction({
        id: data.id,
        oldData: data,
        newData: { ...data, status: toggleStatus },
      }),
    );

  const onSuccessReset = () => dispatch(setData({ ...data, status: toggleStatus }));

  useStatusMessage({ error, success, resetError, resetSuccess, onSuccessReset });

  return (
    <Dropdown
      menu={{
        items: [
          { key: "published", label: "Published", disabled: data.status === QuizStatus.Published, onClick: handleUpdateStatus },
          { key: "draft", label: "Draft", disabled: data.status === QuizStatus.Draft, onClick: handleUpdateStatus },
        ],
      }}
    >
      <Button type="link" icon={<RetweetOutlined />} loading={isLoading} disabled={isLoading}>
        Update Status
      </Button>
    </Dropdown>
  );
};
