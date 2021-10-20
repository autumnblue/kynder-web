import {connect} from 'react-redux';

import RecoveryCode from '../../../components/auth/recoveryCode';

import {verifyRecoveryCode, requestForgotPassword} from '../../../actions/auth';

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  emailForRecovery: state.auth.emailForRecovery,
});

const mapDispatchToProps = (dispatch) => ({
  verifyRecoveryCode: (data, history) => {
    return dispatch(verifyRecoveryCode(data, history));
  },
  requestForgotPassword: (data, history) => {
    dispatch(requestForgotPassword(data, history, false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecoveryCode);