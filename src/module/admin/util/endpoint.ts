export const AdminEndpoints = {
  manageQuestion: "/question/",
  mentorAddedQuestions: "/question/mentor-added/",
  user: "/user/",

  addAdmin: "/user/add-admin",
  revokeAdmin: "/user/revoke-admin",

  addmentor: "/user/add-mentor",
  revokemonitor: "/user/revoke-mentor",
  mentorDetails: "/user/mentor-details/",

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

  bulkUpdateUsers: "/user/bulk-update",

  dashboard: "/dashboard/admin",
};
