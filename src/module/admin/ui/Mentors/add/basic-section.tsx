import { Rules } from "@/helper/form/rules";
import { FormItemProps, Input, Form } from "antd";
import { AddMentorProps, AddMentorKeys } from "./type";

export const BasicSection: React.FC = () => {
  const formItems: FormItemProps<AddMentorProps>[] = [
    {
      label: "Name",
      name: AddMentorKeys.name,
      children: <Input type="text" />,
      rules: [Rules.required],
    },
    {
      label: "Email",
      name: AddMentorKeys.email,
      children: <Input type="email" />,
      rules: [Rules.required, Rules.email],
    },
    {
      label: "Password",
      name: AddMentorKeys.password,
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
