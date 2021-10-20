import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import SetDonationLevel from '../../../components/donation/setDonationLevel';

import {setDonationLevel} from '../../../actions/charities';

const mapStateToProps = (state) => ({
  isLoading: state.charities.isLoading,
  selectedCharity: state.charities.selectedCharity,
  donationLevel: state.auth.donationLevel,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setDonationLevel: (data, edit = false) => {
    dispatch(setDonationLevel(data, ownProps.history, edit));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SetDonationLevel)
);