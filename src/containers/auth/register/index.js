import {connect} from 'react-redux';
import Register from '../../../components/auth/register';

import {register} from '../../../actions/auth';

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  register: (data, history) => {
    dispatch(register(data, history));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

