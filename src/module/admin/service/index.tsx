export { default as AddQuestion } from "./Questions/add/reducer";
export { default as EditQuestion } from "./Questions/edit/reducer";
export { default as FetchQuestion } from "./Questions/fetch/reducer";
export { default as FetchAllQuestion } from "./Questions/fetch-all/reducer";
export { default as QuestionRepo } from "./Questions/repo/reducer";

//manage  admin reducers
export { default as AddAdmin } from "./Users/Admins/add/reducer";
export { default as EditAdmin } from "./Users/Admins/edit/reducer";

//manage  mentor reducers
export { default as AddMentor } from "./Users/Mentor/add/reducer";
export { default as EditMentor } from "./Users/Mentor/edit/reducer";

//manage  student reducers
export { default as EditStudent } from "./Users/Student/edit/reducer";

//manage  user reducers
export { default as FetchUser } from "./Users/fetch/reducer";
export { default as FetchAllUser } from "./Users/fetch-all/reducer";
export { default as UserRepo } from "./Users/repo/reducer";

//dashboard reducers
export { default as DashboardReducer } from "./dashbaord/question-count/reducer";

//bulk edit reducers
export { default as BulkEditUser } from "./Users/bulk-edit/reducer";
