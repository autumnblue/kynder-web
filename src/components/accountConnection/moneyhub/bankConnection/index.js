import React, {useEffect} from 'react';

import Loader from '../../../../animation/Loader';
import {notification} from '../../../../utils/function';

import {moneyhubCapturedLinks} from '../../../../utils/variable';

const BankConnection = ({history, location}) => {
  useEffect(() => {
    if (location && location.pathname === moneyhubCapturedLinks.success) {
      history.push('/account/main/moneyhub');
      notification('success', 'Authorised');
    }
    if (location && location.pathname === moneyhubCapturedLinks.error) {
      history.push('/account/main');
      notification('error', 'Cannot link to Moneyhub at the moment');
    }
  }, [location]);
  return (
    <div className="bank-connection-container">
      <Loader width={200} height={200} classes="animation-loader" />
    </div>
  )
};

export default BankConnection;
