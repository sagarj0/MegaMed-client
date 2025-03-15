import { Tag, TagProps } from "antd";

export type GlobalTags = "Draft" | "Published" | "New" | "Attempted" | "Not Attempted" | undefined;

export const renderTag = (name: GlobalTags) => {
  let color: TagProps["color"];

  switch (name) {
    case "Draft":
      color = "gray";
      break;

    case "Published":
      color = "green";
      break;

    case "Attempted":
      color = "green";
      break;

    case "New":
      color = "red";
      break;

    case "Not Attempted":
      color = "orange";
      break;

    default:
      color = "gray";
      break;
  }

  return (
    <Tag color={color} key={name} style={{ fontSize: 9, paddingInline: "0.8em", borderRadius: "1em", margin: 0, whiteSpace: "nowrap" }}>
      {name?.toUpperCase()}
    </Tag>
  );
};
