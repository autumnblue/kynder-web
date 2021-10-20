import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import NewCharityRequest from '../../../components/mainSettings/newCharityRequest';

import {charityRequest} from '../../../actions/settings';

const mapStateToProps = (state) => ({
  isLoading: state.settings.isLoading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  charityRequest: (data) => {
    dispatch(charityRequest(data, ownProps.history));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewCharityRequest)
);