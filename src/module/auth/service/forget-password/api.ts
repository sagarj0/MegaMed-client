import { AuthEndpoint } from "../../util/endpoint";
import { api } from "@/util/apis";
import { ForgetPasswordRequest, ForgetPasswordResponse } from "./type";

export const login = (data: ForgetPasswordRequest): Promise<ForgetPasswordResponse> => {
  return api.post(AuthEndpoint.forgotPassword, data);
};
