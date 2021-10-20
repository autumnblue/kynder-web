import * as ApiServices from '../services/service';
import * as ActionTypes from '../utils/actionType';
import {notification} from '../utils/function';

export const accountApiLoading = () => ({
  type: ActionTypes.ACCOUNT_API_LOADING,
});

export const accountApiFailed = (error) => ({
  type: ActionTypes.ACCOUNT_API_FAILED,
  payload: error,
});

export const getAllBanks = () => {
  return (dispatch, getState) => {
    dispatch(accountApiLoading());

    return ApiServices.getAllBanksServices()
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_ALL_BANKS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(accountApiFailed(error));
      });
  };
};

export const searchBanks = (data) => {
  return {
    type: ActionTypes.SEARCH_BANKS,
    payload: data,
  };
};

export const getAuthUrlForSelectedBank = (bankId) => {
  return (dispatch, getState) => {
    dispatch(accountApiLoading());

    return ApiServices.getAuthUrlService(bankId)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_BANK_AUTH,
          payload: response.data,
        });
        if (response.data && response.data.url) {
          window.location.href = response.data.url;
        }
        // Actions.push('authorization');
      })
      .catch((error) => {
        dispatch(accountApiFailed(error));
      });
  };
};

export const getMoneyhubSuccess = (history) => {
  return (dispatch, getState) => {
    dispatch(accountApiLoading());

    const pay360Connection = getState().auth.pay360Connection;

    return ApiServices.getMoneyhubSuccessService()
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_MONEYHUB,
          payload: response.data,
        });
        notification('success', 'Connected');
        if (pay360Connection) {
          history.push('/home');
        }
      })
      .catch((error) => {
        dispatch(accountApiFailed(error));
      });
  };
};

export const cardRequestForPay360 = () => {
  return (dispatch, getState) => {
    dispatch(accountApiLoading());

    return ApiServices.cardRequestForPay360Service()
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_CARD_REQUEST,
          payload: response.data.data,
        });
        if (response.data.data && response.data.data.redirectUrl) {
          // window.open(
          //   response.data.data.redirectUrl,
          //   '_blank'
          // )
          window.location.href = response.data.data.redirectUrl;
        }
      })
      .catch((error) => {
        dispatch(accountApiFailed(error));
      });
  };
};

export const cardStatusForPay360 = (data, history) => {
  return (dispatch, getState) => {
    dispatch(accountApiLoading());

    return ApiServices.cardStatusForPay360Service(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_CARD_STATUS,
          payload: response.data,
        });
        history.push('/home');
      })
      .catch((error) => {
        dispatch(accountApiFailed(error));
      });
  };
};