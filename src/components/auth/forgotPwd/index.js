import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import AuthWrapper from '../../common/wrapper/authWrapper';
import NormalInput from '../../common/form/input/normalInput';
import WhiteButton from '../../common/form/button/whiteButton';

import {validateEmail} from '../../../utils/function';

const ForgotPassword = ({isLoading, emailForRecovery, onChangeRecoveryEmail, requestForgotPassword}) => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleRequest = () => {
    const data = {
      email: emailForRecovery,
    }
    if (!validateEmail(emailForRecovery) || !emailForRecovery) {
      setError(true);
      return;
    }
    setError(false);
    requestForgotPassword(data, history);
  };

  return (
    <AuthWrapper title="Forgot password?">
      <div className="forgot-password-container">
        <p className="title">
          Enter your email so that we will send you a verification code to reset the password.
        </p>
        <NormalInput
          placeholder="Email"
          value={emailForRecovery}
          onChange={onChangeRecoveryEmail}
          error={error}
          errorText="The email doesn't match the format"
        />
        <WhiteButton
          title="Send"
          isLoading={isLoading}
          action={handleRequest}
        />
      </div>
    </AuthWrapper>
  )
};

export default ForgotPassword;
