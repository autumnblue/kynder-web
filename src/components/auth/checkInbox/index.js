import React from 'react';
import {useHistory} from 'react-router-dom';

import AuthWrapper from '../../common/wrapper/authWrapper';
import WhiteButton from '../../common/form/button/whiteButton';

const CheckInbox = () => {
  const history = useHistory();

  return (
    <AuthWrapper title="Please check your inbox">
      <div className="check-inbox-container">
        <p className="title">
          The recovery code was sent to your email address.
        </p>
        <p className="title">
          Enter the code provided in the email and use your new password when logging in.
        </p>
        <WhiteButton
          title="Check my inbox"
          action={() => history.push('/auth/recovery-code')}
        />
      </div>
    </AuthWrapper>
  )
};

export default CheckInbox;
