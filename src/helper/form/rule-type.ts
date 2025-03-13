import { Rule } from "antd/es/form";

export interface SimpleRule {
  none: Rule;
  required: Rule;
  email: Rule;
  questionNoValidator: Rule;
}

export interface RuleWithParams {
  quizDurationRule: (qCount: number | undefined) => Rule;
}

export type RulesType = SimpleRule & RuleWithParams;
