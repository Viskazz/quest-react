/*
 * answers actions
 */

export function prepareAnswers(items) {
  // console.log('in prepair')
    return {
      type: 'PREPAIR_ANSWERS',
      payload: items
    }
  };

  export function resetAnswers() {
    // console.log('in prepair')
      return {
        type: 'RESET_ANSWERS'
      }
    };

