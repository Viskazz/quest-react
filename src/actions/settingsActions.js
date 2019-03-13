/*
 * action creators
 */

export function getSettings(items) {
    return {
      type: 'GET_SETTINGS_SUCCESS',
      payload: items
    }
  };
  
  export function changeSettingsProp(prop) {
    return {
      type: 'CHANGE_SETTINGS_PROP',
      payload: prop
    }
  };  
  