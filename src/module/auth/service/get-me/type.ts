import { User } from "../login/type";

export type GetMeResponse = { data: { user: User; message: string } };
