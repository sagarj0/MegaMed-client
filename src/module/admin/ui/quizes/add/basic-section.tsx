import { Col, Form, FormItemProps, Input, InputNumber, Row, Select } from "antd";
import { SaveQuizProps, SaveQuizKeys } from "./type";
import { Rules } from "@/helper/form/form-rules";
import { quizTypeOptions } from "./helper";
import { getChapterGroups, getSubjects, getUnitGroups } from "../../Questions/add/subjects";

export const BasicSection: React.FC = () => {
  const form = Form.useFormInstance<SaveQuizProps>();
  const { subject, unit, type } = Form.useWatch<SaveQuizProps>([], form) || {};
  const isSubjectDisabled = type === undefined || type === "mock_test" || type === "custom";
  const isUnitDisabled = isSubjectDisabled || type === "subject";
  const isChapterDisabled = isUnitDisabled || type === "unit";
  const isPageSizeDisabled = type === undefined || type === "custom" || type === "mock_test";

  const onTypeChange = (value: string) => {
    const isLargePageSize = value === "mock_test" || value === "custom";
    form.resetFields([SaveQuizKeys.subject, SaveQuizKeys.unit, SaveQuizKeys.chapter]);
    form.setFieldValue(SaveQuizKeys.pageSize, isLargePageSize ? 200 : 50);
  };

  const formItems: FormItemProps<SaveQuizProps>[] = [
    {
      name: SaveQuizKeys.title,
      label: "Name",
      rules: [Rules.required],
      children: <Input placeholder="Name of Quiz e.g. Mangshir 2nd Week Quiz" />,
    },
    {
      name: SaveQuizKeys.type,
      label: "Type",
      rules: [Rules.required],
      children: <Select options={quizTypeOptions} placeholder="Select Type" onChange={onTypeChange} />,
    },
    {
      name: SaveQuizKeys.subject,
      label: "Subject",
      // rules: [Rules.required],
      children: <Select options={getSubjects()} placeholder=" Select Subject" disabled={isSubjectDisabled} />,
    },
    {
      name: SaveQuizKeys.unit,
      label: "Unit",
      // rules: [Rules.required],
      children: <Select options={getUnitGroups(subject)} placeholder=" Select Unit" disabled={isUnitDisabled} />,
    },
    {
      name: SaveQuizKeys.chapter,
      label: "Chapter",
      // rules: [Rules.required],
      children: <Select options={getChapterGroups(unit)} placeholder=" Select Chapter" disabled={isChapterDisabled} />,
    },
    {
      name: SaveQuizKeys.pageSize,
      label: "Count",
      rules: [Rules.required],
      children: <InputNumber min={0} max={200} disabled={isPageSizeDisabled} />,
    },
    // {
    //   name: SaveQuizKeys.startTime,
    //   label: "Start Time",
    //   children: <Input type="datetime-local" />,
    // },
    // {
    //   name: SaveQuizKeys.duration,
    //   label: "Duration",
    //   children: <InputNumber min={0} addonAfter={"Minute"} />,
    // },
    // {
    //   name: SaveQuizKeys.bufferTime,
    //   label: "Buffer Time",
    //   children: <InputNumber min={0} addonAfter={"Minute"} />,
    // },
  ];

  return (
    <>
      {formItems.map((item) => (
        <Row style={{ width: "100%" }}>
          <Col span={24}>
            <Form.Item
              {...item}
              labelCol={{ span: 4, md: 3 }}
              wrapperCol={{ span: 20, md: 16, lg: 12, style: { textAlign: "left" } }}
              key={item.name as string}
            />
          </Col>
        </Row>
      ))}
    </>
  );
};
