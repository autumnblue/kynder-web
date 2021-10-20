import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from '../../../components/auth/login';
import {login} from '../../../actions/auth';

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (data) => {
    dispatch(login(data, ownProps.history));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
