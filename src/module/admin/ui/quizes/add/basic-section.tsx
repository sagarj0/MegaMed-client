import { Col, DatePicker, Form, FormItemProps, Input, InputNumber, Row, Select } from "antd";
import { SaveQuizProps, SaveQuizKeys } from "./type";
import { Rules } from "@/helper/form/rules";
import { quizTypeOptions } from "./helper";
import { getChapterGroups, getSubjects, getUnitGroups } from "../../questions/add/subjects";

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

  const qCount = Form.useWatch([SaveQuizKeys.pageSize], form);

  const formItems: FormItemProps<SaveQuizProps>[] = [
    {
      name: SaveQuizKeys.status,
      noStyle: true,
      hidden: true,
    },
    {
      name: SaveQuizKeys.title,
      label: "Name",
      rules: [Rules.required],
      children: <Input placeholder="Name of Quiz e.g. March|Mock|II|Sat" />,
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
      label: "Qsn. Count",
      rules: [Rules.required],
      children: <InputNumber min={0} max={200} disabled={isPageSizeDisabled} />,
    },
    {
      name: SaveQuizKeys.startTime,
      label: "Start Time",
      rules: [Rules.required],
      children: <DatePicker showTime />,
    },
    {
      name: SaveQuizKeys.duration,
      label: "Duration",
      rules: [Rules.quizDurationRule(qCount)],
      children: <InputNumber min={0} addonAfter={"Minute"} />,
    },
    { name: SaveQuizKeys.bufferTime, label: "Buffer Time", children: <InputNumber min={0} max={5} addonAfter={"Minute"} /> },
  ];

  return (
    <>
      {formItems.map((item) => (
        <Row style={{ width: "100%" }}>
          <Col span={24}>
            <Form.Item
              {...item}
              labelCol={{ span: 4, md: 4, lg: 3 }}
              wrapperCol={{ span: 16, md: 16, lg: 10, style: { textAlign: "left" } }}
              key={item.name as string}
            />
          </Col>
        </Row>
      ))}
    </>
  );
};
