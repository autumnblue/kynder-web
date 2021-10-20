import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Pay360 from '../../../components/accountConnection/pay360';
import {cardStatusForPay360} from '../../../actions/account';

const mapStateToProps = (state) => ({
  isLoading: state.account.isLoading,
  requestId: state.account.requestId,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  cardStatusForPay360: (data) => {
    dispatch(cardStatusForPay360(data, ownProps.history));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Pay360)
);