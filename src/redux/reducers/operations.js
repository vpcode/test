
export function operations(state = [], action) {
  switch (action.type) {
    case 'OPERATIONS_FETCH_SUCCESS':
      return action.operations
    default:
      return state;
  }
}
