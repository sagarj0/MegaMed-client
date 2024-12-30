import React from "react";
import { Select, SelectProps } from "antd";

const { Option, OptGroup } = Select;

interface OptionType {
  label: string;
  value: string | number;
}

export interface GroupType {
  label: string;
  options: OptionType[];
}

interface GroupedSelectProps extends Omit<SelectProps, "options"> {
  options: GroupType[];
}

const GroupedSelect: React.FC<GroupedSelectProps> = ({ options, ...rest }) => {
  return (
    <Select {...rest}>
      {options.map((group) => (
        <OptGroup key={group.label} label={group.label}>
          {group.options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </OptGroup>
      ))}
    </Select>
  );
};

export default GroupedSelect;
