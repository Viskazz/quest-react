/*
 * questions reducer
 */

import { log } from '../api';

const initialState = [];

export default function questions(state = initialState, action) {
  switch (action.type) {
    case 'QUESTIONS_SUCCESS':
      // make new object from state and payload. No mutations here
      let newStateObject = Object.assign({}, state, action.payload);
      log('questions loading done');

      // convert the shape of new state to array, so i can iterate it later in component.1
      const woSort = Array.from(Object.keys(newStateObject), k => newStateObject[k]);

      // sort() will mutate original data, so we copy it with [].concat
      const withSort = [].concat(woSort);

      // add empty 'answer' field to json store
      withSort.map(item =>{
          return item.answer ='';
       })

      withSort.sort((a, b) => a.order - b.order);
 
      return withSort;

    case 'INPUT_DATA':
     // если индексы ответа и стора совпадают - добавляем в стор значение ответа
     state.map(item => {
      if (item.index === action.payload.qIndex) {
        item.answer = action.payload.answer;
      }
      return item;
     
    });

    return [...state];

    default:
      return state;
  }
}