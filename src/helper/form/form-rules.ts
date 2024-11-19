import { RuleObject } from "antd/es/form";

type RuleKey = "required" | "none";

export const Rules: Record<RuleKey, RuleObject> = {
  none: {},
  required: { required: true, message: "" },
};
