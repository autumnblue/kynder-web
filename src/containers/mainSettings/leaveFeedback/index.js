import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import LeaveFeedback from '../../../components/mainSettings/leaveFeedback';

import {requestLeaveFeedback} from '../../../actions/settings';

const mapStateToProps = (state) => ({
  isLoading: state.settings.isLoading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestLeaveFeedback: (data) => {
    dispatch(requestLeaveFeedback(data, ownProps.history));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LeaveFeedback)
);