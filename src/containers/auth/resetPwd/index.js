import {connect} from 'react-redux';

import ResetPwd from '../../../components/auth/resetPwd';

import {resetPassword} from '../../../actions/auth';

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  verifyToken: state.auth.verifyToken,
});

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (data, history) => {
    dispatch(resetPassword(data, history))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPwd);