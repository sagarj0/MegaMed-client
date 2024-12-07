import { Cascader } from "antd";
import { buildCascaderOptions, subjectData, subjects } from "./subjects";

export const SubjectSelector: React.FC = () => {
  const cascaderOptions = buildCascaderOptions(subjects, subjectData);

  return <Cascader options={cascaderOptions} placeholder="Select a subject and subtopic" />;
};
