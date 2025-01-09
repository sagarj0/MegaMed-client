import React, { useEffect, useState } from "react";
import { Button, Form, FormProps, Switch } from "antd";
import FormDebug from "@/helper/form/form-debug";
import { AddQuestionsProps } from "./type";
import { BasicSection } from "./basic-section";
import { customRequiredMark } from "@/helper/form/custom-required-mark";
import { FormLayout } from "@/helper/form/form-layout";
import { addQuestionAction } from "@/module/mentor/service/Questions/add/action";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "@/module/mentor/service/Questions/add/reducer";
import { resetError as resetEditError, resetSuccess as resetEditSuccess } from "@/module/mentor/service/Questions/edit/reducer";
import { Location, useLocation, useNavigate, useParams } from "react-router-dom";
import { mapToForm, resetFields } from "./helper";
import { editQuestionAction } from "@/module/mentor/service/Questions/edit/action";
import { UploadOutlined } from "@ant-design/icons";
import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { AllUrls } from "@/router/urls";

interface Props {
  mode: "New" | "Edit";
}

export const AddQuestions: React.FC<Props> = ({ mode }) => {
  const [form] = Form.useForm<AddQuestionsProps>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { state: editData }: Location<DetailedQuestion> = useLocation();
  if (mode === "Edit" && editData && id) form.setFieldsValue(mapToForm(editData));

  const [showUpload, setShowUpload] = useState(false);
  const handleShowUpload = (checked: boolean) => {
    setShowUpload((prev) => !prev);
    !checked && form.resetFields(["qImage", "aImage", "bImage", "cImage", "dImage", "eImage"]);
  };

  useEffect(() => {
    if (mode === "Edit" && editData && id) form.setFieldsValue(mapToForm(editData));
  }, [editData, form]);

  const submitForm: FormProps<AddQuestionsProps>["onFinish"] = (values) => {
    if (mode === "New") dispatch(addQuestionAction(values));
    if (mode === "Edit" && id) dispatch(editQuestionAction({ id, oldData: mapToForm(editData), newData: values }));
  };

  const { success, error, isLoading } = useAppSelector((root) => root.MentorAddQuestion);
  const onSuccessReset = () => form.resetFields(resetFields);
  useStatusMessage({ success, error, resetError, resetSuccess, onSuccessReset });

  const { success: successEdit, error: errorEdit } = useAppSelector((root) => root.MentorEditQuestion);
  const onSuccessEditReset = () => navigate(AllUrls.mentorquestions.viewAll);
  useStatusMessage({
    success: successEdit,
    error: errorEdit,
    resetError: resetEditError,
    resetSuccess: resetEditSuccess,
    onSuccessReset: onSuccessEditReset,
  });

  return (
    <FormLayout
      title={"Question"}
      mode={mode}
      loading={false}
      action={
        <>
          <Switch
            checked={showUpload}
            disabled={Boolean(id && editData)}
            onChange={handleShowUpload}
            unCheckedChildren={<UploadOutlined />}
            checkedChildren={<UploadOutlined />}
          />
          <Button loading={isLoading} type="primary" onClick={() => form.submit()}>
            Save
          </Button>
        </>
      }
    >
      <Form onFinish={submitForm} form={form} name="AddQuestion" labelAlign="left" colon={false} requiredMark={customRequiredMark}>
        <BasicSection showUpload={showUpload} />
        <FormDebug />
      </Form>
    </FormLayout>
  );
};
