import { Button, Divider, Form, FormItemProps, Input, Space, Typography } from "antd";
import FormDebug from "@/helper/form/form-debug";
import { ForgetPasswordFormKey, ForgetPasswordFormProps } from "./type";
import { Rules } from "@/helper/form/rules";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "../service/login/reducer";
import { config } from "@/util/config";
import { AuthEndpoint } from "../util/endpoint";
import { AllUrls } from "@/router/urls";
import { forgetPassword } from "../service/forget-password/action";

const style: React.CSSProperties = { height: 45 };

export const ForgetPassword: React.FC = () => {
  const [form] = Form.useForm<ForgetPasswordFormProps>();
  const dispatch = useAppDispatch();

  const submitForm = async (values: ForgetPasswordFormProps) => await dispatch(forgetPassword(values));
  const handleGoogleLogin = () => window.open(config.apiUrl + AuthEndpoint.googleLogin, "_self");

  const { isLoading, success, error } = useAppSelector((root) => root.ForgetPassword);
  useStatusMessage({ isNotification: true, success, error, resetSuccess, resetError });

  const formItem: FormItemProps[] = [
    {
      label: "Email",
      name: ForgetPasswordFormKey.email,
      rules: [Rules.required],
      children: <Input type="email" style={style} prefix={<MailOutlined />} placeholder="Enter Your Email" />,
    },
  ];

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }} size={"middle"}>
        <Typography.Title level={3} children="Sign in to Mega Med" />

        <Button onClick={handleGoogleLogin} size="large" style={style} block children="Google" icon={<GoogleOutlined />} />

        <Divider children={"or continue reseting your password "} style={{ marginBottom: 0 }} />

        <Form layout="vertical" name="login" colon={false} onFinish={submitForm} form={form}>
          {formItem.map((item) => (
            <Form.Item {...item} key={item.name} />
          ))}

          <Button type="primary" htmlType="submit" size="large" style={style} block children="Submit" loading={isLoading} />
          <FormDebug />
        </Form>
      </Space>

      <Typography.Text style={{ textAlign: "center", width: "100%", display: "block", padding: 12 }}>
        Don't have an account? <Typography.Link href={AllUrls.signUp} children="Create new account " />
      </Typography.Text>
    </>
  );
};
