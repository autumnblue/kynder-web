import _ from 'lodash';
import * as ActionTypes from '../../utils/actionType';

const initialState = {
  isLoading: false,
  charities: [],
  filteredCharities: [],
  selectedCharity: null,
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case ActionTypes.CHARITY_API_LOADING:
      newState.isLoading = true;
      return newState;

    case ActionTypes.FAILED_CHARITY_API:
      newState.isLoading = false;
      return newState;

    case ActionTypes.LOGIN_SUCCESS:
      if (action.payload.charityConnection) {
        newState.selectedCharity = action.payload.charityConnection;
      }
      return newState;

    case ActionTypes.SUCCESS_GET_ALL_CHARITIES:
      newState.isLoading = false;
      newState.charities = action.payload;
      newState.filteredCharities = action.payload;
      return newState;

    case ActionTypes.SEARCH_CHARITIES:
      if (action.payload) {
        newState.filteredCharities = newState.charities.filter(
          (item) =>
            item.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1,
        );
      } else {
        newState.filteredCharities = newState.charities;
      }
      return newState;

    case ActionTypes.SELECT_CHARITY:
      newState.selectedCharity = action.payload;
      return newState;

    case ActionTypes.SUCCESS_GET_CHARITY_BY_ID:
      newState.selectedCharity = action.payload;
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_SELECT_CHARITY:
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_REQUEST_CHARITY:
      newState.isLoading = false;
      return newState;

    case ActionTypes.SUCCESS_SET_DONATION_LEVEL:
      newState.isLoading = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;
