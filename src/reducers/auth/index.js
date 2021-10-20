import * as ActionTypes from '../../utils/actionType';
import _ from 'lodash';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  token: null,
  email: '',
  name: '',
  role_id: '',
  emailForRecovery: '',
  verifyToken: '',
  moneyHubConnection: false,
  pay360Connection: false,
  donationLevel: false,
  charityConnection: false,
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case ActionTypes.AUTH_API_LOADING:
      newState.isLoading = true;
      return newState;

    case ActionTypes.AUTH_API_FAILED:
      newState.isLoading = false;
      return newState;

    case ActionTypes.CHANGE_LOGIN_STATE:
      newState.isLoggedIn = action.payload;
      return newState;

    case ActionTypes.LOGIN_SUCCESS:
      newState.isLoading = false;
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.email = action.payload.email;
      newState.name = action.payload.name;
      newState.moneyHubConnection = action.payload.moneyHubConnection;
      newState.pay360Connection = action.payload.pay360Connection;
      newState.donationLevel = action.payload.donationLevel;
      newState.charityConnection = action.payload.charityConnection;
      return newState;

    case ActionTypes.REGISTER_SUCCESS:
      newState.isLoading = false;
      return newState;

    case ActionTypes.ON_CHANGE_RECOVERY_EMAIL:
      newState.emailForRecovery = action.payload;
      return newState;

    case ActionTypes.REQUEST_FORGOT_PASSWORD_SUCCESS:
      newState.isLoading = false;
      return newState;

    case ActionTypes.VERIFY_RECOVERY_CODE_SUCCESS:
      newState.verifyToken = action.payload.token;
      newState.isLoading = false;
      return newState;

    case ActionTypes.RESET_PASSWORD_SUCCESS:
      newState.isLoading = false;
      return newState;

    case ActionTypes.LOG_OUT:
      newState.isLoggedIn = false;
      newState.token = null;
      newState.email = '';
      newState.name = '';
      newState.emailForRecovery = '';
      newState.verifyToken = '';
      newState.moneyHubConnection = false;
      newState.pay360Connection = false;
      newState.donationLevel = false;
      newState.charityConnection = false;
      return newState;

    case ActionTypes.SUCCESS_SELECT_CHARITY:
      newState.charityConnection = action.payload;
      return newState;

    case ActionTypes.SUCCESS_SET_DONATION_LEVEL:
      newState.donationLevel = action.payload;
      return newState;

    case ActionTypes.SUCCESS_GET_MONEYHUB:
      newState.moneyHubConnection = true;
      return newState;

    case ActionTypes.SUCCESS_CARD_STATUS:
      newState.pay360Connection = true;
      return newState;

    case ActionTypes.SUCCESS_UNLINK_MONEYHUB:
      newState.moneyHubConnection = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;
