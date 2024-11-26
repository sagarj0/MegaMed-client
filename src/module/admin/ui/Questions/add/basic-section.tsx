import { Rules } from "@/helper/form/form-rules";
import { FormItemProps, Cascader, Input, Radio, Form } from "antd";
import { buildCascaderOptions, subjects, subjectData } from "./subjects";
import { AddQuestionsProps, AddQuestionKeys } from "./type";

export const BasicSection: React.FC = () => {
  const cascaderOptions = buildCascaderOptions(subjects, subjectData);

  const formItems: FormItemProps<AddQuestionsProps>[] = [
    {
      label: "Select Subject",
      name: AddQuestionKeys.subjectData,
      children: (
        <Cascader
          options={cascaderOptions}
          dropdownMenuColumnStyle={{ height: "auto" }}
          showSearch
          placeholder="Select a subject and subtopic"
        />
      ),
      normalize: (value: string[] | null) => {
        if (!value) return undefined;
        const [subjectUnit, chapter] = value;
        return [...subjectUnit.split("/"), chapter];
      },
      rules: [Rules.required],
    },
    {
      label: "Question",
      name: AddQuestionKeys.question,
      children: <Input type="text" />,
      rules: [Rules.required],
    },
    {
      label: "Option A",
      name: AddQuestionKeys.optionA,
      children: <Input type="text" />,
      rules: [Rules.required],
    },
    {
      label: "Option B",
      name: AddQuestionKeys.optionB,
      children: <Input type="text" />,
      rules: [Rules.required],
    },
    {
      label: "Option C",
      name: AddQuestionKeys.optionC,
      children: <Input type="text" />,
      rules: [Rules.required],
    },
    {
      label: "Option D",
      name: AddQuestionKeys.optionD,
      children: <Input type="text" />,
      rules: [Rules.required],
    },
    {
      label: "Correct Answer",
      name: AddQuestionKeys.correctAnswer,
      children: (
        <Radio.Group>
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
          <Radio value="c">C</Radio>
          <Radio value="d">D</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Explanation",
      name: AddQuestionKeys.explanation,
      children: <Input.TextArea autoSize={{ maxRows: 4, minRows: 2 }} />,
    },
  ];

  return (
    <>
      {formItems.map((item) => (
        <Form.Item {...item} labelCol={{ span: 3 }} wrapperCol={{ span: 10 }} key={item.name as string} />
      ))}
    </>
  );
};
