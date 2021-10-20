import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import AskQuestion from '../../../components/mainSettings/askQuestion';

import {requestAskQuestion} from '../../../actions/settings';

const mapStateToProps = (state) => ({
  isLoading: state.settings.isLoading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAskQuestion: (data) => {
    dispatch(requestAskQuestion(data, ownProps.history));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AskQuestion)
);