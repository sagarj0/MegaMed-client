import { PostQuestionRequest, PostQuestionResponse } from "../add/type";

export type PatchQuestionRequest = Partial<PostQuestionRequest>;
export type PatchQuestionResponse = PostQuestionResponse;
