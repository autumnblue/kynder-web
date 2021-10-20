import {requestService} from './request';
import * as ApiUrls from './apiUrl';
import {notification} from '../utils/function';
import {store} from '../store';
import {logout} from '../actions/auth';

export const commonService = (request, token = true) => {
  let reqObj = {
    method: request.method,
    url: request.url,
  };
  if (token && store.getState().auth.token) {
    reqObj = Object.assign(reqObj, {
      token: `Bearer ${store.getState().auth.token}`,
    });
  }
  if (request.data) {
    reqObj = Object.assign(reqObj, {data: request.data});
  }
  if (request.queryParams) {
    reqObj = Object.assign(reqObj, {queryParams: request.queryParams});
  }
  return requestService(reqObj)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        if (error.response && error.response.data && error.response.data.message) {
          notification('error', error.response.data.message);
          if (error.response.data.message === 'jwt expired') {
            store.dispatch(logout());
          }
          return;
        }
        store.dispatch(logout());
      }
      return Promise.reject(error.response);
    });
};

export const logInService = (data) => {
  return commonService(
    {
      method: 'POST',
      url: ApiUrls.LOG_IN_ENDPOINT,
      data,
    },
    false,
  );
};

export const registerService = (data) => {
  return commonService(
    {
      method: 'POST',
      url: ApiUrls.SIGN_UP_ENDPOINT,
      data,
    },
    false,
  );
};

export const requestForgotPasswordService = (data) => {
  return commonService(
    {
      method: 'POST',
      url: ApiUrls.FORGOT_PASSWORD_ENDPOINT,
      data,
    },
    false,
  );
};

export const verifyRecoveryCodeService = (data) => {
  return commonService(
    {
      method: 'POST',
      url: ApiUrls.VERIFY_CODE_ENDPOINT,
      data: data,
    },
    false,
  );
};

export const requestPasswordService = (data) => {
  const reqObj = {
    method: 'POST',
    url: ApiUrls.RESET_PASSWORD_ENDPOINT,
    token: `Bearer ${data.token}`,
    data: {
      password: data.password,
    },
  };
  return requestService(reqObj)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getAllCharitiesService = () => {
  return commonService({
    method: 'GET',
    url: ApiUrls.GET_ALL_CHARITIES_ENDPOINT,
  });
};

export const getCharityByIdService = (id) => {
  return commonService({
    method: 'GET',
    url: `${ApiUrls.CHARITY_ENDPOINTS}/${id}`
  });
};

export const selectCharityService = (id) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.SELECT_CHARITY_ENDPOINT,
    data: id,
  });
};

export const contactUsForCharityService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.CONTACT_US_FOR_CHARITY_ENDPOINT,
    data: data,
  });
};

export const setDonationLevelService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.SET_DONATION_LEVEL_ENDPOINT,
    data: data,
  });
};

export const getAllBanksServices = () => {
  return commonService({
    method: 'GET',
    url: ApiUrls.GET_ALL_BANK_ENDPOINT,
  });
};

export const getAuthUrlService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.BANK_AUTH_ENDPOINT,
    data: data,
  });
};

export const getMoneyhubSuccessService = () => {
  return commonService({
    method: 'PUT',
    url: ApiUrls.MONEYHUB_SUCCESS_ENDPOINT,
  });
};

export const cardRequestForPay360Service = () => {
  return commonService({
    method: 'GET',
    url: ApiUrls.CARD_REQUEST_ENDPOINT,
  });
};

export const cardStatusForPay360Service = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.CARD_STATUS_ENDPOINT,
    data: data,
  });
};

export const requestAskQuestionService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.REQUEST_ASK_QUESTION_ENDPOINT,
    data: data,
  });
};

export const requestLeaveFeedbackService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.REQUEST_LEAVE_FEEDBACK_ENDPOINT,
    data: data,
  });
};

export const changePasswordService = (data) => {
  return commonService({
    method: 'POST',
    url: ApiUrls.CHANGE_PASSWORD_ENDPOINT,
    data: data,
  });
};

export const unLinkMoneyhubService = () => {
  return commonService({
    method: 'PUT',
    url: ApiUrls.UNLINK_MONEYHUB_ENDPOINT,
  });
};

export const getSettingsService = () => {
  return commonService({
    method: 'GET',
    url: ApiUrls.GET_SETTINGS_ENDPOINT,
  });
};

export const requestDonationStatusService = (data) => {
  return commonService({
    method: 'PUT',
    url: ApiUrls.REQUEST_DONATION_STATUS_ENDPOINT,
    data: data,
  });
};

export const rescheduleDonationService = (data) => {
  return commonService({
    method: 'PUT',
    url: ApiUrls.RESCHEDULE_DONATION_ENDPOINT,
    data: data,
  });
};