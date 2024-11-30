import { Button, Divider, Form, FormItemProps, Input, Row, Space, Typography } from "antd";
import FormDebug from "@/helper/form/form-debug";
import { LoginFormKey, LoginFormProps } from "./type";
import { Rules } from "@/helper/form/form-rules";
import { FacebookOutlined, GoogleOutlined, LinkedinOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
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

        <Row justify={"space-between"}>
          <Button onClick={handleGoogleLogin} size="large" style={{ width: 160, ...style }} children="Google" icon={<GoogleOutlined />} />
          <Button size="large" style={{ width: 160, ...style }} children="Linked In " icon={<LinkedinOutlined />} />
          <Button size="large" style={{ width: 160, ...style }} children="Facebook" icon={<FacebookOutlined />} />
        </Row>

        <Divider children={"or Login with email"} style={{ marginBottom: 0 }} />

        <Form layout="vertical" name="login" colon={false} onFinish={submitForm} form={form}>
          {formItem.map((item) => (
            <Form.Item {...item} key={item.name} />
          ))}

          <Button
            type="link"
            children="Forgot Password?"
            style={{ padding: 0, ...style }}
            onClick={() => navigate(AllUrls.forgotPassword)}
          />

          <Button type="primary" htmlType="submit" size="large" style={{ width: "100%", ...style }} children="Login" loading={isLoading} />
          <FormDebug />
        </Form>
      </Space>

      <Typography.Text style={{ textAlign: "center", width: "100%", display: "block", padding: 12 }}>
        Don't have an account?{" "}
        <Button type="link" onClick={() => navigate(AllUrls.signUp)} style={{ padding: 0 }} children="Create new account " />
      </Typography.Text>
    </>
  );
};
