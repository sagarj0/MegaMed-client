import { Button, Divider, Form, FormItemProps, Input, Row, Space, Typography } from "antd";
import FormDebug from "@/helper/form/form-debug";
import { ForgetPasswordFormKey, ResetFormKey, ResetPasswordFormProps } from "./type";
import { Rules } from "@/helper/form/form-rules";
import { GoogleOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "../service/login/reducer";
import { config } from "@/util/config";
import { AuthEndpoint } from "../util/endpoint";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AllUrls } from "@/router/urls";
import { resetPassword } from "../service/reset-password/action";
import { useEffect } from "react";

const style: React.CSSProperties = { height: 45 };

export const ResetPassword: React.FC = () => {
  const [form] = Form.useForm<ResetPasswordFormProps>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    form.setFieldValue(ResetFormKey.token, token);
  }, [token]);

  const submitForm = async (values: ResetPasswordFormProps) => await dispatch(resetPassword(values));
  const handleGoogleLogin = () => window.open(config.apiUrl + AuthEndpoint.googleLogin, "_self");

  const { isLoading, success, error } = useAppSelector((root) => root.ResetPassword);
  const onSuccessReset = () => navigate(AllUrls.login);
  useStatusMessage({ success, error, resetSuccess, resetError, onSuccessReset });

  const formItem: FormItemProps<ResetPasswordFormProps>[] = [
    {
      label: "Email",
      name: ForgetPasswordFormKey.email,
      rules: [Rules.required],
      children: <Input type="email" style={style} prefix={<MailOutlined />} placeholder="Enter Your Email" />,
    },
    {
      label: "New Password",
      name: ResetFormKey.newPassword,
      children: <Input.Password style={style} prefix={<LockOutlined />} placeholder="********" />,
    },
    {
      name: ResetFormKey.token,
      hidden: true,
    },
  ];

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }} size={"middle"}>
        <Typography.Title level={3} children="Sign in to Mega Med" />

        <Row justify={"space-between"}>
          <Button onClick={handleGoogleLogin} size="large" style={{ width: "100%", ...style }} children="Google" icon={<GoogleOutlined />} />
        </Row>

        <Divider children={"or conitnue resetting your password "} style={{ marginBottom: 0 }} />

        <Form layout="vertical" name="login" colon={false} onFinish={submitForm} form={form}>
          {formItem.map((item) => (
            <Form.Item {...item} key={item.name as string} />
          ))}

          <Button type="primary" htmlType="submit" size="large" style={{ width: "100%", ...style }} children="Submit" loading={isLoading} />
          <FormDebug />
        </Form>
      </Space>

      <Typography.Text style={{ textAlign: "center", width: "100%", display: "block", padding: 12 }}>
        Don't have an account? <Button type="link" onClick={() => navigate(AllUrls.signUp)} style={{ padding: 0 }} children="Create new account " />
      </Typography.Text>
    </>
  );
};
