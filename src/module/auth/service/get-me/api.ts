import { AuthEndpoint } from "../../util/endpoint";
import { api } from "@/util/apis";
import { GetMeResponse } from "./type";

export const getMe = (): Promise<GetMeResponse> => {
  return api.get(AuthEndpoint.getMe);
};
