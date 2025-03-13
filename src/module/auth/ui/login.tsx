import { Button, Divider, Form, FormItemProps, Input, Space, Typography } from "antd";
import FormDebug from "@/helper/form/form-debug";
import { LoginFormKey, LoginFormProps } from "./type";
import { Rules } from "@/helper/form/rules";
import { GoogleOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { loginWithCredential } from "../service/login/action";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "../service/login/reducer";
import { config } from "@/util/config";
import { AuthEndpoint } from "../util/endpoint";
import { useNavigate } from "react-router-dom";
import { AllUrls } from "@/router/urls";

const style: React.CSSProperties = { height: 45 };

export const Login: React.FC = () => {
  const [form] = Form.useForm<LoginFormProps>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitForm = async (values: LoginFormProps) => await dispatch(loginWithCredential(values));
  const handleGoogleLogin = () => window.open(config.apiUrl + AuthEndpoint.googleLogin, "_self");

  const { isLoading, success, error } = useAppSelector((root) => root.AuthLogin);
  const { accessToken } = useAppSelector((root) => root.AuthRepo);
  const onLoginSuccess = () => navigate(AllUrls.authSuccess + "?token=" + accessToken);
  useStatusMessage({ success, error, resetSuccess, resetError, onSuccessReset: onLoginSuccess });

  const formItem: FormItemProps[] = [
    {
      label: "Email",
      name: LoginFormKey.email,
      rules: [Rules.required],
      children: <Input type="email" style={style} prefix={<MailOutlined />} placeholder="Enter Your Email" />,
    },
    {
      label: "Password",
      name: LoginFormKey.password,
      rules: [Rules.required],
      children: <Input.Password style={style} prefix={<LockOutlined />} placeholder="********" />,
    },
  ];

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }} size={"middle"}>
        <Typography.Title level={3} children="Sign in to Mega Med" />

        <Button onClick={handleGoogleLogin} size="large" block style={style} children="Google" icon={<GoogleOutlined />} />

        <Divider children={"or Login with email"} style={{ marginBottom: 0 }} />

        <Form layout="vertical" name="login" colon={false} onFinish={submitForm} form={form}>
          {formItem.map((item) => (
            <Form.Item {...item} key={item.name} />
          ))}

          <Button type="link" children="Forgot Password?" style={{ padding: 0, ...style }} href={AllUrls.forgotPassword} />

          <Button type="primary" htmlType="submit" size="large" style={style} block children="Login" loading={isLoading} />
          <FormDebug />
        </Form>
      </Space>

      <Typography.Text style={{ textAlign: "center", width: "100%", display: "block", padding: 12 }}>
        Don't have an account? <Typography.Link href={AllUrls.signUp} children="Create new account " />
      </Typography.Text>
    </>
  );
};
