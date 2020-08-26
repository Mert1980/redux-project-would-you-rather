import { RECEIVE_USERS } from "../actions/users";
import { SAVE_ANSWER } from "../actions/saveAnswer";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...users,
        ...action.users,
      };
    case SAVE_ANSWER:
      const { authedUser, qid, answer } = action;
      let newAnswer = {
        [qid]: answer,
      };

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            ...newAnswer,
          },
        },
      };
    default:
      return state;
  }
}
