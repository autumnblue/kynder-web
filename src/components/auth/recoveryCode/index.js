import React, {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PinInput from 'react-pin-input';

import AuthWrapper from '../../common/wrapper/authWrapper';
import Loader from '../../../animation/Loader';

const RecoveryCode = ({isLoading, verifyRecoveryCode, requestForgotPassword, emailForRecovery}) => {
  const pinRef = useRef();
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleCode = (value) => {
    setCode(value);
    if (value.length === 4) {
      setError(false);
      const data = {
        email: emailForRecovery,
        recoveryCode: value,
      }
      verifyRecoveryCode(data)
        .then(() => {
          setError(false);
          history.push('/auth/reset-password')
        }).catch((error) => {
          console.log(error);
          setError(true);
        });
    }
  };

  const resendRequest = () => {
    const data = {
      email: emailForRecovery,
    }
    setError(false);
    requestForgotPassword(data, history);
  };

  return (
    <AuthWrapper title="Enter 4-digit recovery code">
      <div className="recovery-code-container">
        <p className="title">
          The recovery code was sent to your email address. Please enter the code.
        </p>
        <div className={`pin-wrapper ${error ? 'error' : ''}`}>
          <PinInput
            length={4}
            focus
            // disabled
            // secret
            ref={pinRef}
            type="numeric"
            value={code}
            onChange={handleCode}
          />
          {isLoading && <Loader width={80} height={80} classes="animation-loader" />}
          {error && <p className="error-message">Invalid code. Please double check the code.</p>}
          <p
            className="resend-code"
            onClick={resendRequest}
          >
            Resend code
          </p>
        </div>
      </div>
    </AuthWrapper>
  )
};

export default RecoveryCode;
