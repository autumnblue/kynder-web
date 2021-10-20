import {combineReducers} from 'redux';

import auth from './auth';
import account from './account';
import charities from './charities';
import settings from './settings';

export default function rootReducer() {
  return combineReducers({
    auth,
    account,
    charities,
    settings,
  });
}