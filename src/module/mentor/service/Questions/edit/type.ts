import { PostQuestionRequest, PostQuestionResponse } from "../add/type";

export type PatchQuestionRequest = Partial<PostQuestionRequest> & { id: string };
export type PatchQuestionResponse = PostQuestionResponse;
