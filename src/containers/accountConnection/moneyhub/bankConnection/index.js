import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import BankConnection from '../../../../components/accountConnection/moneyhub/bankConnection';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BankConnection)
);