import * as ActionTypes from '../utils/actionType';
import * as ApiServices from '../services/service';
import {notification} from '../utils/function';

export const authApiLoading = () => ({
  type: ActionTypes.AUTH_API_LOADING,
});

export const authApiFailed = (error) => ({
  type: ActionTypes.AUTH_API_FAILED,
  payload: error,
});

export const changeLoginState = (isLoggedIn) => {
  return {
    type: ActionTypes.CHANGE_LOGIN_STATE,
    payload: isLoggedIn,
  }
};

export const login = (data, history) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading());
    return ApiServices.logInService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: response.data,
        });
        notification('success', 'Logged in successfully!');
        if (
          response.data.pay360Connection &&
          response.data.moneyHubConnection
        ) {
          history.push('home');
        } else if (response.data.donationLevel) {
          history.push('/account/main');
        } else if (response.data.charityConnection) {
          history.push('/donation/set-level');
        } else if (!response.data.charityConnection) {
          history.push('/onboarding');
        }
      })
      .catch((error) => {
        dispatch(authApiFailed(error));
      });
  };
};

export const register = (data, history) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading());
    return ApiServices.registerService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.REGISTER_SUCCESS,
          payload: response.data,
        });
        notification('success', 'Registered successfully!');
        history.push('/auth/login');
      })
      .catch((error) => {
        dispatch(authApiFailed(error));
        if (error.status === 409) {
          console.log('error', error);
          notification('error', 'User already exists, please login');
          return;
        }
        notification('error', 'Registration failed!');
      });
  };
};

export const onChangeRecoveryEmail = (value) => {
  return {
    type: ActionTypes.ON_CHANGE_RECOVERY_EMAIL,
    payload: value,
  };
};

export const requestForgotPassword = (data, history, isNav = true) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading());
    return ApiServices.requestForgotPasswordService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.REQUEST_FORGOT_PASSWORD_SUCCESS,
          payload: response.data,
        });
        if (isNav) {
          history.push('/auth/check-inbox');
        }
      })
      .catch((error) => {
        console.log('error', error);
        if (error && error.data && error.data.message) {
          notification('error', error.data.message);
        }
        dispatch(authApiFailed(error));
      });
  };
};

export const verifyRecoveryCode = (data) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading());
    return ApiServices.verifyRecoveryCodeService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.VERIFY_RECOVERY_CODE_SUCCESS,
          payload: response.data,
        });
        return Promise.resolve(response);
      })
      .catch((error) => {
        dispatch(authApiFailed(error));
        return Promise.reject(error);
      });
  };
};

export const resetPassword = (data, history) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading());
    return ApiServices.requestPasswordService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.RESET_PASSWORD_SUCCESS,
          payload: response.data,
        });
        notification('success', 'Password reset successfully!');
        history.push('/auth/login')
      })
      .catch((error) => {
        dispatch(authApiFailed(error));
      });
  };
};

export const logout = () => {
  return {
    type: ActionTypes.LOG_OUT,
  };
};