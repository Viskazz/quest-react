/*
 * variants actions
 */

export function getVariants(items) {
    return {
      type: 'VARIANTS_SUCCESS',
      payload: items
    }
  };

  export function selectVariantAction(variant) {
    return {
      type: 'SELECT_VARIANT',
      payload: variant
    }
  };

