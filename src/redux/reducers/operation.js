
export function operation(state = null, action) {
  switch (action.type) {
    case 'OPERATION_FETCH_SUCCESS':
      return action.operation
    default:
      return state;
  }
}
