import React, { useEffect } from "react";
import { Button, Form, FormProps } from "antd";
import FormDebug from "@/helper/form/form-debug";
import { AddStudentProps } from "./type";
import { customRequiredMark } from "@/helper/form/custom-required-mark";
import { FormLayout } from "@/helper/form/form-layout";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "@/module/admin/service/Questions/add/reducer";
import { resetError as resetEditError, resetSuccess as resetEditSuccess } from "@/module/admin/service/Questions/edit/reducer";
import { useParams } from "react-router-dom";
import { mapToForm } from "./helper";
import { BasicSection } from "./basic-section";
import useFetchStudent from "@/module/admin/hooks/useFetchStudent";
import { addStudent } from "@/module/admin/service/Student/add/action";
import { editStudentAction } from "@/module/admin/service/Student/edit/action";

interface Props {
  mode: "New" | "Edit";
}

export const AddStudent: React.FC<Props> = ({ mode }) => {
  const [form] = Form.useForm<AddStudentProps>();
  const dispatch = useAppDispatch();
  const title = "Question";

  const { id } = useParams();
  const { data: editData } = useFetchStudent(id);

  useEffect(() => {
    if (mode === "Edit" && editData && id) form.setFieldsValue(mapToForm(editData));
  }, [editData, form]);

  const submitForm: FormProps<AddStudentProps>["onFinish"] = (values) => {
    if (mode === "New") dispatch(addStudent(values));
    if (mode === "Edit" && id) dispatch(editStudentAction({ oldData: mapToForm(editData), newData: values }));
  };

  const { success, error, isLoading } = useAppSelector((root) => root.AddQuestion);
  useStatusMessage({ success, error, resetError, resetSuccess });

  const { success: successEdit, error: errorEdit } = useAppSelector((root) => root.EditQuestion);
  useStatusMessage({ success: successEdit, error: errorEdit, resetError: resetEditError, resetSuccess: resetEditSuccess });

  return (
    <FormLayout
      title={title}
      mode={mode}
      isFooterOnTop
      loading={false}
      footer={
        <Button loading={isLoading} type="primary" onClick={() => form.submit()}>
          Save
        </Button>
      }
    >
      <Form onFinish={submitForm} form={form} name="AddStudent" labelAlign="left" colon={false} requiredMark={customRequiredMark}>
        <BasicSection />
        <FormDebug />
      </Form>
    </FormLayout>
  );
};
