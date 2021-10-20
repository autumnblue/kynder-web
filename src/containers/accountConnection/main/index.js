import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import AccountMain from '../../../components/accountConnection/main';

import {getMoneyhubSuccess, cardRequestForPay360} from '../../../actions/account';

const mapStateToProps = (state) => ({
  isLoading: state.account.isLoading,
  moneyHubConnection: state.auth.moneyHubConnection,
  pay360Connection: state.auth.pay360Connection,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getMoneyhubSuccess: () => {
    dispatch(getMoneyhubSuccess(ownProps.history));
  },
  cardRequestForPay360: () => {
    dispatch(cardRequestForPay360(ownProps.history));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AccountMain)
);