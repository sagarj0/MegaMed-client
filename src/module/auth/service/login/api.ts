import { AuthEndpoint } from "../../util/endpoint";
import { api } from "@/util/apis";
import { LoginResponse, LoginRequest } from "./type";

export const login = (data: LoginRequest): Promise<LoginResponse> => {
  return api.post(AuthEndpoint.login, data);
};
