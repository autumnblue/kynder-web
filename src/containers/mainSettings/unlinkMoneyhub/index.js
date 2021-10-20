import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import UnlinkMoneyhub from '../../../components/mainSettings/unlinkMoneyhub';

import {unLinkMoneyhub} from '../../../actions/settings';

const mapStateToProps = (state) => ({
  isLoading: state.settings.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  unLinkMoneyhub: () => {
    dispatch(unLinkMoneyhub(ownProps.history));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UnlinkMoneyhub)
);
