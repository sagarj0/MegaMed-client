import { User } from "@/module/auth/service/login/type";

export type PostBulkUpdateRequest = {
  userIds: string[];
  properties: Partial<User>;
};

export type PostBulkUpdateResponse = {
  data: { success: boolean; updatedCount: number; message: string };
};
