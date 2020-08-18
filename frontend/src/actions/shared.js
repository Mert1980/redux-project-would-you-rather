import { getInitialData } from "../../../backend/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
// import { setAuthedUser } from "./authedUser";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}