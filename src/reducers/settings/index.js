import _ from 'lodash';

import * as ActionTypes from '../../utils/actionType';

const initialState = {
  isLoading: false,
  settingsData: null,
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case ActionTypes.SETTINGS_API_LOADING:
      newState.isLoading = true;
      return newState;

    case ActionTypes.FAILED_SETTINGS_API:
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_CHARITY_REQUEST:
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_ASK_QUESTION:
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_LEAVE_FEEDBACK:
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_CHANGE_PASSWORD:
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_UNLINK_MONEYHUB:
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_GET_SETTINGS:
      newState.isLoading = false;
      newState.settingsData = action.payload.setting;
      return newState;

    case ActionTypes.SUCCESS_REQUEST_DONATION_STATUS:
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_RESCHEDULE_DONATION:
      newState.isLoading = false;
      return newState;

    case ActionTypes.LOG_OUT:
      newState.settingsData = null;
      return newState;

    default:
      return state;
  }
};

export default reducer;
