
export function transactions(state = [], action) {
  switch (action.type) {
    case 'TXS_FETCH_DATA_SUCCESS':
      return action.transactions
    default:
      return state;
  }
}
