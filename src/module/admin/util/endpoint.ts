export const AdminEndpoints = {
  manageQuestion: "/question/",
  user: "/user/",
  addAdmin: "/user/add-admin",
  revokeAdmin: "/user/revoke-admin",
  addmentor: "/user/add-mentor",
  revokemonitor: "/user/revoke-mentor",
  manageStudent: "/user/manage-student",

  createQuiz: "/quiz/create",
  createCustomQuiz: "/quiz/create-custom",
  listAllQuiz: "/quiz/list",
  getQuiz: {
    byId: "/quiz/",
    subject: "/quiz/subject-wise/",
    unit: "/quiz/unit-wise/",
    chapter: "/quiz/chapter-wise/",
    mock_test: "/quiz/mock-test/",
  },

  countQuestion: "/question/count",

  bulkUpdateUsers: "/user/bulk-update",

  dashboard: "/dashboard/admin",
};
