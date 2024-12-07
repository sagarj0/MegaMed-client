import { RuleObject } from "antd/es/form";

type RuleKey = "required" | "none" | "email" | "questionNoValidator";

export const Rules: Record<RuleKey, RuleObject> = {
  none: {},
  required: { required: true, message: "" },

  // Add more rules here
  email: { type: "email", message: "" },

  questionNoValidator: {
    validator: async (_, value) => {
      if (value && (value < 1 || value > 200)) {
        return Promise.reject("Question number should be between 1 and 200");
      }
      return Promise.resolve();
    },
  },
};
