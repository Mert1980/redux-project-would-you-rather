import { saveQuestionAnswer } from "../utils/api";
export const SAVE_ANSWER = "SAVE_ANSWER";

function saveAnswer({ users, questions, authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    users,
    questions,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer({
      answer,
      qid,
      authedUser,
    }).then(({ users, questions }) => {
      dispatch(saveAnswer({ users, questions, authedUser, qid, answer }));
    });
  };
}
