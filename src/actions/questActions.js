/*
 * action creators
 */

export function getQuestions(items) {
  return {
    type: 'QUESTIONS_SUCCESS',
    payload: items
  }
};



export function inputDataAction(qIndex, answer) {
  return {
    type: 'INPUT_DATA',
    payload: {qIndex: qIndex, answer: answer}
  }
};



 



