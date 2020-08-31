import { RECEIVE_USERS } from "../actions/users";
import { SAVE_ANSWER } from "../actions/saveAnswer";
import { ADD_QUESTION } from "../actions/addQuestion";

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
    case ADD_QUESTION:
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [id, ...state[author].questions],
        },
      };
    default:
      return state;
  }
}
