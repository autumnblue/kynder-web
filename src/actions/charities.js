import * as ApiServices from '../services/service';
import * as ActionTypes from '../utils/actionType';
import {notification} from '../utils/function';

export const charityApiLoading = () => ({
  type: ActionTypes.CHARITY_API_LOADING,
});

export const failedCharityApi = (error) => ({
  type: ActionTypes.FAILED_CHARITY_API,
  payload: error,
});

export const selectCharity = (value) => ({
  type: ActionTypes.SELECT_CHARITY,
  payload: value,
});

export const getAllCharities = () => {
  return (dispatch, getState) => {
    dispatch(charityApiLoading());

    return ApiServices.getAllCharitiesService()
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_ALL_CHARITIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(failedCharityApi(error));
      });
  };
};

export const searchCharities = (searchText) => {
  return {
    type: ActionTypes.SEARCH_CHARITIES,
    payload: searchText,
  };
};

export const getCharityById = (id) => {
  return (dispatch, getState) => {
    dispatch(charityApiLoading());

    return ApiServices.getCharityByIdService(id)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_CHARITY_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(failedCharityApi(error));
      });
  };
};

export const selectCharityForDonation = (id, history, edit) => {
  return (dispatch, getState) => {
    const selectedCharity = getState().charities.selectedCharity;
    dispatch(charityApiLoading());

    return ApiServices.selectCharityService(id)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_SELECT_CHARITY,
          payload: selectedCharity,
        });
        notification('success', 'the charity was selected successfully!');
        if (edit) {
          history.push('/charities/confirmed/edit'); 
        } else {
          history.push('/charities/confirmed');
        }
      })
      .catch((error) => {
        dispatch(failedCharityApi(error));
      });
  };
};

export const contactUsForCharity = (data, history) => {
  return (dispatch, getState) => {
    dispatch(charityApiLoading());

    return ApiServices.contactUsForCharityService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_REQUEST_CHARITY,
          payload: response.data,
        });
        notification('success', 'the charity was requested successfully!');
        history.push('/charities');
      })
      .catch((error) => {
        dispatch(failedCharityApi(error));
      });
  };
};

export const setDonationLevel = (data, history, edit) => {
  return (dispatch, getState) => {
    dispatch(charityApiLoading());

    return ApiServices.setDonationLevelService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_SET_DONATION_LEVEL,
          payload: data.value,
        });
        notification('success', 'donation level set');
        if (edit) {
          history.push('/settings');
        } else {
          history.push('/account/main');
        }
      })
      .catch((error) => {
        dispatch(failedCharityApi(error));
      });
  };
};