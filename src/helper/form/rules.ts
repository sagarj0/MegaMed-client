import { RulesType } from "./rule-type";

export const Rules: RulesType = {
  none: {},
  required: { required: true, message: "This field is required" },
  email: { type: "email", message: "Please enter a valid email address" },

  questionNoValidator: {
    required: true,
    message: "This field is required",
    validator: async (_, value) => {
      if (value && (value < 1 || value > 200)) return Promise.reject("Question number should be between 1 and 200");
      return Promise.resolve();
    },
  },

  quizDurationRule: (qCount: number | undefined) => ({
    required: true,
    message: "This field is required",
    validator: async (_, value) => {
      if (!qCount || !value) return Promise.resolve();

      // Calculate expected duration bounds
      const usualTime = qCount * 0.9;
      const expectedMaxTime = usualTime * 1.5;
      const expectedMinTime = usualTime * 0.5;

      // Validate against bounds
      if (value > expectedMaxTime) return Promise.reject("Duration is too long for the number of questions");
      if (value < expectedMinTime) return Promise.reject("Duration is too short for the number of questions");

      return Promise.resolve();
    },
  }),
};
