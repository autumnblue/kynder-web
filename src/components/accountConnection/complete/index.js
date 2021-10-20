import React from 'react';
import {useHistory} from 'react-router-dom';

import CommonHeader from '../../common/header';
import WhiteButton from '../../common/form/button/whiteButton';

const AccountSetupComplete = () => {
  const history = useHistory();

  const handleAction = () => {
    history.push('/home');
  };

  return (
    <div className="account-complete-container">
      <CommonHeader mainMode={false} step={4} />
      <div className="account-complete-wrapper">
        <div className="account-complete-content">
          <p className="title">That’s it!</p>
          <p className="description">
            Kynder is ready to start helping the world with you.
          </p>
          <div className="btn-group">
            <WhiteButton
              title="Go home"
              action={handleAction}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default AccountSetupComplete;
