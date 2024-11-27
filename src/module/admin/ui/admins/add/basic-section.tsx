import { Rules } from "@/helper/form/form-rules";
import { FormItemProps, Input, Form } from "antd";
import { AddAdminProps, AddAdminKeys } from "./type";

export const BasicSection: React.FC = () => {
  const formItems: FormItemProps<AddAdminProps>[] = [
    {
      label: "Name",
      name: AddAdminKeys.name,
      children: <Input type="text" />,
      rules: [Rules.required],
    },
    {
      label: "Email",
      name: AddAdminKeys.email,
      children: <Input type="email" />,
      rules: [Rules.required, Rules.email],
    },
    {
      label: "Password",
      name: AddAdminKeys.password,
      children: <Input.Password />,
      rules: [Rules.required],
    },
  ];

  return (
    <>
      {formItems.map((item) => (
        <Form.Item {...item} labelCol={{ span: 2 }} wrapperCol={{ span: 8 }} key={item.name as string} />
      ))}
    </>
  );
};
