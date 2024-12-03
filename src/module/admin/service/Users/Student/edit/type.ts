import { PostQuestionResponse } from "../../../Questions/add/type";
import { PostStudentRequest } from "../add/type";

export type PatchStudentReq = Partial<PostStudentRequest>;
export type PatchStudentRes = PostQuestionResponse;
