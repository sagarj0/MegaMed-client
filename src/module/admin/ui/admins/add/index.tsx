import React, { useEffect } from "react";
import { Button, Form, FormProps } from "antd";
import FormDebug from "@/helper/form/form-debug";
import { AddAdminProps } from "./type";
import { customRequiredMark } from "@/helper/form/custom-required-mark";
import { FormLayout } from "@/helper/form/form-layout";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "@/module/admin/service/Users/Admins/add/reducer";
import { resetError as resetEditError, resetSuccess as resetEditSuccess } from "@/module/admin/service/Users/Admins/edit/reducer";
import { useNavigate, useParams } from "react-router-dom";
import { addAdmin } from "@/module/admin/service/Users/Admins/add/action";
import { editAdminAction } from "@/module/admin/service/Users/Admins/edit/action";
import { mapToForm } from "./helper";
import { BasicSection } from "./basic-section";
import useFetchUser from "@/module/admin/hooks/user/useFetchUser";
import { AdminUrls } from "@/module/admin/util/urls";

interface Props {
  mode: "New" | "Edit";
}

export const AddAdmin: React.FC<Props> = ({ mode }) => {
  const [form] = Form.useForm<AddAdminProps>();
  const dispatch = useAppDispatch();
  const title = "Admin";
  const navigate = useNavigate();

  const { id } = useParams();
  const { data: editData } = useFetchUser(id);

  useEffect(() => {
    if (mode === "Edit" && editData && id) form.setFieldsValue(mapToForm(editData.user));
  }, [editData, form]);

  const submitForm: FormProps<AddAdminProps>["onFinish"] = (values) => {
    if (mode === "New") dispatch(addAdmin(values));
    if (mode === "Edit" && id) dispatch(editAdminAction({ oldData: mapToForm(editData.user), newData: values }));
  };

  const onSuccessReset = () => navigate(AdminUrls.adminAdmin.viewAll);
  const { success, error, isLoading } = useAppSelector((root) => root.AddAdmin);
  useStatusMessage({ success, error, resetError, resetSuccess, onSuccessReset });
  const { success: successEdit, error: errorEdit } = useAppSelector((root) => root.EditAdmin);
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
      <Form onFinish={submitForm} form={form} name="AddAdmin" labelAlign="left" colon={false} requiredMark={customRequiredMark}>
        <BasicSection />
        <FormDebug />
      </Form>
    </FormLayout>
  );
};
