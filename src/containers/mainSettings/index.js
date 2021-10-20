import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import MainSettings from '../../components/mainSettings';
import {getSettings} from '../../actions/settings';
import {logout} from '../../actions/auth';

const mapStateToProps = (state) => ({
  isLoading: state.settings.isLoading,
  moneyHubConnection: state.auth.moneyHubConnection,
  pay360Connection: state.auth.pay360Connection,
  donationLevel: state.auth.donationLevel,
  charityConnection: state.auth.charityConnection,
  email: state.auth.email,
  settingsData: state.settings.settingsData,
});

const mapDispatchToProps = (dispatch) => ({
  getSettings: () => {
    dispatch(getSettings());
  },
  logout: () => {
    dispatch(logout());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainSettings)
);
