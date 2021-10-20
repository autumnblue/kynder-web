import * as ApiServices from '../services/service';
import * as ActionTypes from '../utils/actionType';
import {notification} from '../utils/function';

export const settingsApiLoading = () => ({
  type: ActionTypes.SETTINGS_API_LOADING,
});

export const failedSettingsApi = (data) => ({
  type: ActionTypes.FAILED_SETTINGS_API,
  payload: data,
});

export const charityRequest = (data, history) => {
  return (dispatch, getState) => {
    dispatch(settingsApiLoading());

    return ApiServices.contactUsForCharityService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_CHARITY_REQUEST,
          payload: response.data,
        });
        notification('success', 'the charity was requested successfully!');
        history.push('/settings');
      })
      .catch((error) => {
        dispatch(failedSettingsApi(error));
      });
  };
};

export const requestAskQuestion = (data, history) => {
  return (dispatch, getState) => {
    dispatch(settingsApiLoading());

    return ApiServices.requestAskQuestionService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_ASK_QUESTION,
          payload: response.data,
        });
        history.push('/settings');
      })
      .catch((error) => {
        dispatch(failedSettingsApi(error));
      });
  };
};

export const requestLeaveFeedback = (data, history) => {
  return (dispatch, getState) => {
    dispatch(settingsApiLoading());

    return ApiServices.requestLeaveFeedbackService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_LEAVE_FEEDBACK,
          payload: response.data,
        });
        history.push('/settings');
      })
      .catch((error) => {
        dispatch(failedSettingsApi(error));
      });
  };
};

export const changePassword = (data, history) => {
  return (dispatch, getState) => {
    dispatch(settingsApiLoading());

    return ApiServices.changePasswordService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_CHANGE_PASSWORD,
          payload: response.data,
        });
        notification('success', 'password was changed successfully!');
        history.push('/settings');
      })
      .catch((error) => {
        dispatch(failedSettingsApi(error));
        notification('error', 'Current password is incorrect');
      });
  };
};

export const unLinkMoneyhub = (history) => {
  return (dispatch, getState) => {
    dispatch(settingsApiLoading());

    return ApiServices.unLinkMoneyhubService()
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_UNLINK_MONEYHUB,
          payload: response.data,
        });
        history.push('/account/main');
      })
      .catch((error) => {
        dispatch(failedSettingsApi(error));
      });
  };
};

export const getSettings = () => {
  return (dispatch, getState) => {
    dispatch(settingsApiLoading());

    return ApiServices.getSettingsService()
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_SETTINGS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(failedSettingsApi(error));
      });
  };
};

export const requestDonationStatus = (data, history) => {
  return (dispatch, getState) => {
    dispatch(settingsApiLoading());

    return ApiServices.requestDonationStatusService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_REQUEST_DONATION_STATUS,
          payload: response.data,
        });
        if (data.status === 3) {
          notification('success', 'Your donations have been cancelled');
        }
        if (data.status === 1) {
          notification('success', 'Your donations are renewed');
        }
        history.push('/settings');
      })
      .catch((error) => {
        dispatch(failedSettingsApi(error));
      });
  };
};

export const rescheduleDonation = (data, history) => {
  return (dispatch, getState) => {
    dispatch(settingsApiLoading());

    return ApiServices.rescheduleDonationService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUCCESS_RESCHEDULE_DONATION,
          payload: response.data,
        });
        notification('success', 'donation accrual paused');
        history.push('/settings');
      })
      .catch((error) => {
        dispatch(failedSettingsApi(error));
      });
  };
};