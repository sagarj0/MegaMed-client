import { AuthEndpoint } from "../../util/endpoint";
import { api } from "@/util/apis";
import { GetMeResponse } from "./type";
import { User } from "../login/type";

export const getMe = (): Promise<GetMeResponse> => {
  return api.get(AuthEndpoint.getMe);
};

export const mockgetMe = (): Promise<GetMeResponse> => {
  const res = {
    data: {
      data: {
        id: "mock-id",
        email: "mock-email",
        name: "mock-name",
        pictureUrl: "mock-pictureUrl",
        role: "student",
        active: true,
        isPaidUser: false,
        googleId: "mock-googleId",
        number: "mock-number",
        password: "mock-password",
      } as User,
      message: "mock-message",
    },
  };

  return Promise.resolve(res);
};
