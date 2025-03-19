import { Rules } from "@/helper/form/rules";
import { FormItemProps, Cascader, Input, Radio, Form, InputNumber, Row, Col, Typography } from "antd";
import { buildCascaderOptions, subjects, subjectData } from "./subjects";
import { AddQuestionsProps, AddQuestionKeys } from "./type";
import { UploadImage } from "./basic-image";

interface Props {
  showUpload: boolean;
}

export const BasicSection: React.FC<Props> = (props) => {
  const { showUpload } = props;
  const cascaderOptions = buildCascaderOptions(subjects, subjectData);

  const formItems: FormItemProps<AddQuestionsProps>[] = [
    {
      label: "Select Subject",
      name: AddQuestionKeys.subjectData,
      children: <Cascader options={cascaderOptions} showSearch placeholder="Select a subject and subtopic" />,
      rules: [Rules.required],
      normalize: (value: string[] | null) => {
        if (!value) return undefined;
        const [subjectUnit, chapter] = value;
        return [...subjectUnit.split("/"), chapter];
      },
    },
    {
      label: "Q. No.",
      name: AddQuestionKeys.questionNo,
      children: <InputNumber />,
      rules: [Rules.questionNoValidator],
    },
    {
      label: "Question",
      name: AddQuestionKeys.question,
      children: <Input.TextArea autoSize={{ maxRows: 4, minRows: 2 }} />,
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
      rules: [Rules.required],
      children: (
        <Radio.Group
          options={[
            { label: "A", value: "a" },
            { label: "B", value: "b" },
            { label: "C", value: "c" },
            { label: "D", value: "d" },
          ]}
        />
      ),
    },
    {
      label: "Explanation",
      name: AddQuestionKeys.explanation,
      children: <Input.TextArea autoSize={{ maxRows: 4, minRows: 2 }} />,
    },
  ];

  const images: FormItemProps<AddQuestionsProps>[] = [
    {
      label: "Question Image",
      name: AddQuestionKeys.qImage,
      children: <UploadImage forName="Question" formKey={AddQuestionKeys.qImage} />,
    },
    {
      label: "Option A Image",
      name: AddQuestionKeys.aImage,
      children: <UploadImage forName="Option A" formKey={AddQuestionKeys.aImage} />,
    },
    {
      label: "Option B Image",
      name: AddQuestionKeys.bImage,
      children: <UploadImage forName="Option B" formKey={AddQuestionKeys.bImage} />,
    },
    {
      label: "Option C Image",
      name: AddQuestionKeys.cImage,
      children: <UploadImage forName="Option C" formKey={AddQuestionKeys.cImage} />,
    },
    {
      label: "Option D Image",
      name: AddQuestionKeys.dImage,
      children: <UploadImage forName="Option D" formKey={AddQuestionKeys.dImage} />,
    },
    {
      label: "Explanation Image",
      name: AddQuestionKeys.eImage,
      children: <UploadImage forName="Explanation" formKey={AddQuestionKeys.eImage} />,
    },
  ];

  return (
    <Row>
      <Col span={24}>
        {formItems.map((item) => (
          <Row style={{ width: "100%" }}>
            <Col span={24}>
              <Form.Item
                {...item}
                labelCol={{ span: 6, md: 7, lg: 4 }}
                wrapperCol={{ span: 20, md: 16, lg: 15, style: { textAlign: "left" } }}
                key={item.name as string}
              />
            </Col>
          </Row>
        ))}
      </Col>

      {showUpload && (
        <Col span={12}>
          <Typography.Title level={4} style={{ textAlign: "left", marginBlock: 48 }}>
            Image Uploads
          </Typography.Title>
          {images.map((item) => (
            <Row style={{ width: "100%" }}>
              <Col span={24}>
                <Form.Item
                  {...item}
                  labelCol={{ span: 10, md: 12, lg: 6 }}
                  wrapperCol={{ span: 24, md: 20, lg: 18, style: { textAlign: "left" } }}
                  key={item.name as string}
                />
              </Col>
            </Row>
          ))}
        </Col>
      )}
    </Row>
  );
};
