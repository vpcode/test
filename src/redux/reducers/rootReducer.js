import { combineReducers } from 'redux';

import { transactions } from './transactions';
import { operations } from './operations';
import { operation } from './operation';

const rootReducers = combineReducers({
  transactions,
  operations,
  operation
})

export default rootReducers;
