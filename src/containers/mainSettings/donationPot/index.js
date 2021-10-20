import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import DonationPot from '../../../components/mainSettings/donationPot';

import {requestDonationStatus, rescheduleDonation} from '../../../actions/settings';

const mapStateToProps = (state) => ({
  isLoading: state.settings.isLoading,
  settingsData: state.settings.settingsData,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestDonationStatus: (data) => {
    dispatch(requestDonationStatus(data, ownProps.history));
  },
  rescheduleDonation: (data) => {
    dispatch(rescheduleDonation(data, ownProps.history));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DonationPot)
);