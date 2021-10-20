import * as ActionTypes from '../../utils/actionType';
import _ from 'lodash';

const initialState = {
  isLoading: false,
  banks: [],
  authUrl: '',
  redirectUrl: '',
  requestId: '',
  filteredBanks: [],
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case ActionTypes.ACCOUNT_API_LOADING:
      newState.isLoading = true;
      return newState;

    case ActionTypes.SUCCESS_GET_ALL_BANKS:
      newState.isLoading = false;
      newState.banks = action.payload.connections;
      newState.filteredBanks = action.payload.connections;
      return newState;

    case ActionTypes.SEARCH_BANKS:
      if (action.payload) {
        newState.filteredBanks = newState.banks.filter(
          (item) =>
            item.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1,
        );
      } else {
        newState.filteredBanks = newState.banks;
      }
      return newState;

    case ActionTypes.SUCCESS_GET_BANK_AUTH:
      newState.isLoading = false;
      newState.authUrl = action.payload.url;
      return newState;

    case ActionTypes.SUCCESS_GET_MONEYHUB:
      newState.isLoading = false;
      newState.authUrl = '';
      return newState;

    case ActionTypes.SUCCESS_CARD_REQUEST:
      newState.redirectUrl = action.payload.redirectUrl;
      newState.requestId = action.payload.requestId;
      newState.isLoading = false;
      return newState;

    case ActionTypes.ACCOUNT_API_FAILED:
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_CARD_STATUS:
      newState.isLoading = false;
      newState.redirectUrl = '';
      newState.requestId = '';
      return newState;

    default:
      return state;
  }
};

export default reducer;
