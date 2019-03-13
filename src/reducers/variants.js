
/*
 * variants reducer
 */
import { log } from '../api';

const initialState = [];

export default function variants(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_VARIANT':
    // если индексы клика и стора совпадают - выделяем\снимаем выделение
      const selected = state.map(item => {
        if (item.index === action.payload.index) {
          item.selected = !item.selected;
        }
       
      });

      return [...state];

    case 'VARIANTS_SUCCESS':
      // make new object from state and payload. No mutations here
      let newStateObject = Object.assign({}, state, action.payload);
      log('variants loading done');
      
      // convert the shape of new state to array, so i can iterate it later in component.
      const withSelected= Array.from(Object.keys(newStateObject), k => newStateObject[k]);

      // add empty 'selected' field to json store
      withSelected.map(item =>{
        item.selected = false;
     });

     return withSelected;

    default:
      return state;
  }
}
