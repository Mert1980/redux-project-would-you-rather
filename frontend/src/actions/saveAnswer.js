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
    console.log("answer", answer);
    return saveQuestionAnswer({
      answer,
      qid,
      authedUser,
    }).then(({ users, questions }) => {
      console.log("users ", users);
      console.log("questions ", questions);
      dispatch(saveAnswer({ users, questions, authedUser, qid, answer }));
    });
  };
}
