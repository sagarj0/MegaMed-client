import { AuthEndpoint } from "../../util/endpoint";
import { api } from "@/util/apis";
import { ResetPasswordRequest, ResetPasswordResponse } from "./type";

export const login = (data: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
  return api.post(AuthEndpoint.resetPassword, data);
};
