import React, { useEffect } from "react";
import { Button, Form, FormProps } from "antd";
import FormDebug from "@/helper/form/form-debug";
import { AddMentorProps } from "./type";
import { customRequiredMark } from "@/helper/form/custom-required-mark";
import { FormLayout } from "@/helper/form/form-layout";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "@/module/admin/service/Users/Mentor/add/reducer";
import { resetError as resetEditError, resetSuccess as resetEditSuccess } from "@/module/admin/service/Users/Mentor/edit/reducer";
import { useNavigate, useParams } from "react-router-dom";
import { mapToForm } from "./helper";
import { BasicSection } from "./basic-section";
import { addMentor } from "@/module/admin/service/Users/Mentor/add/action";
import { editMentorAction } from "@/module/admin/service/Users/Mentor/edit/action";
import useFetchUser from "@/module/admin/hooks/useFetchUser";
import { AdminUrls } from "@/module/admin/util/urls";

interface Props {
  mode: "New" | "Edit";
}

export const AddMentor: React.FC<Props> = ({ mode }) => {
  const [form] = Form.useForm<AddMentorProps>();
  const dispatch = useAppDispatch();
  const title = "Mentor";
  const navigate = useNavigate();

  const { id } = useParams();
  const { data: editData } = useFetchUser(id);

  useEffect(() => {
    if (mode === "Edit" && editData && id) form.setFieldsValue(mapToForm(editData.user));
  }, [editData, form]);

  const submitForm: FormProps<AddMentorProps>["onFinish"] = (values) => {
    if (mode === "New") dispatch(addMentor(values));
    if (mode === "Edit" && id) dispatch(editMentorAction({ oldData: mapToForm(editData.user), newData: values }));
  };

  const onSuccessReset = () => navigate(AdminUrls.adminMentor.viewAll);
  const { success, error, isLoading } = useAppSelector((root) => root.AddMentor);
  useStatusMessage({ success, error, resetError, resetSuccess, onSuccessReset });
  const { success: successEdit, error: errorEdit } = useAppSelector((root) => root.EditMentor);
  useStatusMessage({ success: successEdit, error: errorEdit, resetError: resetEditError, resetSuccess: resetEditSuccess, onSuccessReset });

  return (
    <FormLayout
      title={title}
      mode={mode}
      loading={false}
      footer={
        <Button loading={isLoading} type="primary" onClick={() => form.submit()}>
          Save
        </Button>
      }
    >
      <Form onFinish={submitForm} form={form} name="AddMentor" labelAlign="left" colon={false} requiredMark={customRequiredMark}>
        <BasicSection />
        <FormDebug />
      </Form>
    </FormLayout>
  );
};
