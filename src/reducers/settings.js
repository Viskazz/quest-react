/*
 * groups reducer
 */

import { log } from '../api';

const initialState = [];

export default function settings(state = initialState, action) {
  switch (action.type) {
    case 'GET_SETTINGS_SUCCESS':
      // make new object from state and payload. No mutations here
      const settings = Object.assign({}, state, action.payload);
      log('settings loading done');
      return {
        ...state,
        ...settings
      };

    case 'CHANGE_SETTINGS_PROP':
      return Object.assign({}, state, action.payload);

    case 'SELECT_SETTINGS':
      const selected = state.map(item => ({
        ...item,
        isSelected: item.index === action.payload.index ? true : false
      }))
      return Array.from(Object.keys(selected), k => selected[k]);

    default:
      return state;
  }
}