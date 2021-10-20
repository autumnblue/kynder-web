import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import ChangePassword from '../../../components/mainSettings/changePassword';

import {changePassword} from '../../../actions/settings';

const mapStateToProps = (state) => ({
  isLoading: state.settings.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changePassword: (data) => {
    dispatch(changePassword(data, ownProps.history));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePassword)
);