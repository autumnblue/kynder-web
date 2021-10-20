import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Charities from '../../../components/charities/charities';

import {getAllCharities, searchCharities, selectCharity} from '../../../actions/charities';

const mapStateToProps = (state) => ({
  isLoading: state.charities.isLoading,
  filteredCharities: state.charities.filteredCharities,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCharities: () => {
    dispatch(getAllCharities());
  },
  searchCharities: (value) => {
    dispatch(searchCharities(value));
  },
  selectCharity: (item) => {
    dispatch(selectCharity(item));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Charities)
);