import { RuleObject } from "antd/es/form";

type RuleKey = "required" | "none" | "email";

export const Rules: Record<RuleKey, RuleObject> = {
  none: {},
  required: { required: true, message: "" },

  // Add more rules here
  email: { type: "email", message: "" },
};
