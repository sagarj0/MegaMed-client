import { PostQuestionResponse } from "../../Questions/add/type";
import { PostMentorRequest } from "../add/type";

export type PatchMentorReq = Partial<PostMentorRequest>;
export type PatchMentorRes = PostQuestionResponse;
