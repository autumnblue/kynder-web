import {connect} from 'react-redux';

import ForgotPwd from '../../../components/auth/forgotPwd';

import {onChangeRecoveryEmail, requestForgotPassword} from '../../../actions/auth';

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  emailForRecovery: state.auth.emailForRecovery,
});

const mapDispatchToProps = (dispatch) => ({
  requestForgotPassword: (data, history) => {
    dispatch(requestForgotPassword(data, history));
  },
  onChangeRecoveryEmail: (value) => {
    dispatch(onChangeRecoveryEmail(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPwd);