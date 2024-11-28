import React from "react";
import { Select, SelectProps } from "antd";

const { Option, OptGroup } = Select;

// Define types for props
interface OptionType {
  label: string; // Displayed text
  value: string | number; // Value associated with the option
}

export interface GroupType {
  label: string; // Group label
  options: OptionType[]; // Options within the group
}

interface GroupedSelectProps extends Omit<SelectProps, "options"> {
  options: GroupType[]; // Array of groups with options
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
