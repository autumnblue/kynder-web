import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import AvailableBanks from '../../../../components/accountConnection/moneyhub/availableBanks';

import {
  getAllBanks,
  getAuthUrlForSelectedBank,
  searchBanks,
} from '../../../../actions/account';

const mapStateToProps = (state) => ({
  isLoading: state.account.isLoading,
  filteredBanks: state.account.filteredBanks,
  authUrl: state.account.authUrl,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBanks: () => {
    dispatch(getAllBanks());
  },
  getAuthUrlForSelectedBank: (data) => {
    dispatch(getAuthUrlForSelectedBank(data));
  },
  searchBanks: (searchVal) => {
    dispatch(searchBanks(searchVal));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AvailableBanks)
);