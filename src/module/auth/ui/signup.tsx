import { Button, Divider, Form, FormItemProps, Input, Space, Typography } from "antd";
import FormDebug from "@/helper/form/form-debug";
import { SignupFormKey, SignupFormProps } from "./type";
import { Rules } from "@/helper/form/form-rules";
import { GoogleOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "../service/login/reducer";
import { config } from "@/util/config";
import { AuthEndpoint } from "../util/endpoint";
import { AllUrls } from "@/router/urls";
import { signUpWithCrednetial } from "../service/signup/action";

const style: React.CSSProperties = { height: 45 };

export const Signup: React.FC = () => {
  const [form] = Form.useForm<SignupFormProps>();
  const dispatch = useAppDispatch();

  const submitForm = async (values: SignupFormProps) => await dispatch(signUpWithCrednetial(values));
  const handleGoogleLogin = () => window.open(config.apiUrl + AuthEndpoint.googleLogin, "_self");

  const { isLoading, success, error } = useAppSelector((root) => root.AuthSignup);
  useStatusMessage({
    isNotification: true,
    success,
    error,
    resetSuccess,
    resetError,
  });

  const formItem: FormItemProps[] = [
    {
      label: "Full Name",
      name: SignupFormKey.name,
      rules: [Rules.required],
      children: <Input style={style} placeholder="Enter Your Full Name" />,
    },
    {
      label: "Email",
      name: SignupFormKey.email,
      rules: [Rules.required],
      children: <Input type="email" style={style} prefix={<MailOutlined />} placeholder="Enter Your Email" />,
    },
    {
      label: "Password",
      name: SignupFormKey.password,
      rules: [Rules.required],
      children: <Input.Password style={style} prefix={<LockOutlined />} placeholder="********" />,
    },
  ];

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }} size={"middle"}>
        <Typography.Title level={3} children="Sign in to Mega Med" />

        <Button onClick={handleGoogleLogin} size="large" style={style} block children="Google" icon={<GoogleOutlined />} />

        <Divider children={"or Continue Signing up with Email"} style={{ marginBottom: 0 }} />

        <Form layout="vertical" name="login" colon={false} onFinish={submitForm} form={form}>
          {formItem.map((item) => (
            <Form.Item {...item} key={item.name} />
          ))}

          <Button type="primary" htmlType="submit" size="large" style={style} block children="Sign Up" loading={isLoading} />
          <FormDebug />
        </Form>
      </Space>

      <Typography.Text style={{ textAlign: "center", width: "100%", display: "block", padding: 12 }}>
        Already have an account? <Typography.Link href={AllUrls.login} children="Continue to Login" />
      </Typography.Text>
    </>
  );
};
