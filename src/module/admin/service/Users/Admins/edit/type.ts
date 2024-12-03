import { PostQuestionResponse } from "../../../Questions/add/type";
import { PostAdminRequest } from "../add/type";

export type PatchAdminReq = Partial<PostAdminRequest>;
export type PatchAdminRes = PostQuestionResponse;
