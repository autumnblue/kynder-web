import React, {useEffect} from 'react';

import CommonHeader from '../../common/header';
import GreenButton from '../../common/form/button/greenButton';
import Loader from '../../../animation/Loader';

const AccountMain = ({
  isLoading,
  location,
  history,
  moneyHubConnection,
  pay360Connection,
  cardRequestForPay360,
  getMoneyhubSuccess,
}) => {
  useEffect(() => {
    if (location && location.pathname.indexOf('/moneyhub') > -1 && !moneyHubConnection) {
      getMoneyhubSuccess();
    }
  }, [location]);

  useEffect(() => {
    if (moneyHubConnection && pay360Connection) {
      history.push('/home');
    }
  }, [moneyHubConnection, pay360Connection]);

  const handleMoneyhub = () => {
    history.push('/account/available-banks');
  };

  const handlePay360 = () => {
    cardRequestForPay360();
  };

  if (isLoading) {
    return <Loader width={200} height={200} classes="animation-loader" />
  }

  return (
    <div className="account-main-container">
      <CommonHeader mainMode step={3} />
      <div className="account-main-wrapper">
        <div className="account-main-content">
          <p className="title">Connect your account</p>
          <p className="description">
            Kynder partners with Moneyhub to passively accrue your donations. Kynder will not accrue on transactions relating to rent or bank charges.
          </p>
          <div className="btn-group">
            <GreenButton
              isMoneyhub
              title="Link to"
              action={handleMoneyhub}
              disabled={moneyHubConnection}
            />
            <GreenButton
              title="Add my card details"
              action={handlePay360}
              disabled={!moneyHubConnection || pay360Connection}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default AccountMain;
