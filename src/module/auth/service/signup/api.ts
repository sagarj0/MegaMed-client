import { AuthEndpoint } from "../../util/endpoint";
import { api } from "@/util/apis";
import { SignupResponse, SignupRequest } from "./type";

export const signup = (data: SignupRequest): Promise<SignupResponse> => {
  return api.post(AuthEndpoint.signUp, data);
};
