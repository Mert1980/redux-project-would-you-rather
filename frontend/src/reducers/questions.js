import { RECEIVE_QUESTIONS } from "../actions/questions";
import { SAVE_ANSWER } from "../actions/saveAnswer";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...questions,
        ...action.questions,
      };
    case SAVE_ANSWER:
      const { authedUser, qid, answer } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser),
          },
        },
      };
    default:
      return state;
  }
}
