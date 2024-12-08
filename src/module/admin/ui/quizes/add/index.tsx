import React from "react";
import { Button, Form, FormProps } from "antd";
import FormDebug from "@/helper/form/form-debug";
import { SaveQuizProps } from "./type";
import { customRequiredMark } from "@/helper/form/custom-required-mark";
import { FormLayout } from "@/helper/form/form-layout";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "@/module/admin/service/quizes/add/reducer";
import { addQuizAction } from "@/module/admin/service/quizes/add/action";
import { BasicSection } from "./basic-section";
import { GenerateQuiz } from "../components/generate-quiz";
import { AllUrls } from "@/router/urls";
import { useNavigate } from "react-router-dom";

interface Props {
  mode: "New" | "Edit";
}

export const AddQuiz: React.FC<Props> = ({ mode }) => {
  const [form] = Form.useForm<SaveQuizProps>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const title = "Quizes";

  const submitForm: FormProps<SaveQuizProps>["onFinish"] = (values) => {
    if (mode === "New") dispatch(addQuizAction(values));
  };

  const { success, error, isLoading } = useAppSelector((root) => root.AddQuiz);
  const onSuccessReset = () => navigate(AllUrls.adminquizes.viewAll);
  useStatusMessage({ success, error, resetError, resetSuccess, onSuccessReset });

  return (
    <FormLayout
      title={title}
      mode={mode}
      isFooterOnTop
      loading={false}
      footer={
        <>
          <Button loading={isLoading} type="primary" onClick={() => form.submit()}>
            Save and Publish
          </Button>
        </>
      }
    >
      <Form onFinish={submitForm} form={form} name="AddQuestion" labelAlign="left" colon={false} requiredMark={customRequiredMark}>
        <BasicSection />
        <GenerateQuiz />
        <FormDebug />
      </Form>
    </FormLayout>
  );
};
