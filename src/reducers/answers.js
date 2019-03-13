
/*
 * answers reducer
 */
import { log } from '../api';

const initialState = [];

export default function answers(state = initialState, action) {
  switch (action.type) {
    case 'PREPAIR_ANSWERS': 
      // make new object from state and payload. No mutations here
      const newStateObject = Object.assign({}, state, action.payload);
      log('answers ready');
      // convert the shape of new state to array, so i can iterate it later in component.
      const temp = Array.from(Object.keys(newStateObject), k => newStateObject[k]);
      const answers = temp.map(item =>{
          return item.answer
      });

      console.log(answers.toString())
      return answers;

    case 'RESET_ANSWERS':
    return initialState;

    default:
      return state;
  }
}
