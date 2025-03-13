import { Rules } from "@/helper/form/rules";
import { FormItemProps, Input, Form } from "antd";
import { AddStudentProps, AddStudentKeys } from "./type";

export const BasicSection: React.FC = () => {
  const formItems: FormItemProps<AddStudentProps>[] = [
    {
      label: "Name",
      name: AddStudentKeys.name,
      children: <Input type="text" />,
      rules: [Rules.required],
    },
    {
      label: "Email",
      name: AddStudentKeys.email,
      children: <Input type="email" />,
      rules: [Rules.required, Rules.email],
    },
    {
      label: "Password",
      name: AddStudentKeys.password,
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
