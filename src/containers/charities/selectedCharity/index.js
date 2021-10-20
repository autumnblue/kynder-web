import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SelectedCharity from '../../../components/charities/selectedCharity';

import {getCharityById, selectCharityForDonation} from '../../../actions/charities';

const mapStateToProps = (state) => ({
  isLoading: state.charities.isLoading,
  selectedCharity: state.charities.selectedCharity,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCharityById: (id) => {
    dispatch(getCharityById(id));
  },
  selectCharityForDonation: (id, edit = false) => {
    dispatch(selectCharityForDonation(id, ownProps.history, edit));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectedCharity)
);