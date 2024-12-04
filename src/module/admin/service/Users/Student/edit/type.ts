import { PostQuestionResponse } from "../../../Questions/add/type";
import { PostAdminRequest } from "../../Admins/add/type";

export type PatchStudentReq = Partial<PostAdminRequest>;
export type PatchStudentRes = PostQuestionResponse;
