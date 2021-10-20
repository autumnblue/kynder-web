import React, {useEffect} from 'react';

import {notification} from '../../../utils/function';
import Loader from '../../../animation/Loader';

import {pay360CapturedLinks} from '../../../utils/variable';

const Pay360 = ({
  requestId,
  history,
  location,
  cardStatusForPay360
}) => {
  useEffect(() => {
    if (location && location.pathname === pay360CapturedLinks.success) {
      notification('success', 'request successful- Kynder is ready to start helping your chosen charity');
      onSuccessCardStatus();
    }
    if (location && location.pathname === pay360CapturedLinks.error) {
      history.push('/account/main');
      notification('error', 'Request has error');
    }
    if (location && location.pathname === pay360CapturedLinks.decline) {
      history.push('/account/main');
      notification('error', 'Request declined');
    }
    if (location && location.pathname === pay360CapturedLinks.cancel) {
      history.push('/account/main');
      notification('error', 'Request cancelled');
    }
  }, [location]);

  const onSuccessCardStatus = () => {
    const data = {
      transactionId: requestId,
    };
    cardStatusForPay360(data);
  };

  return (
    <div className="pay360-container">
      <Loader width={200} height={200} classes="animation-loader" />
    </div>
  )
};

export default Pay360;
