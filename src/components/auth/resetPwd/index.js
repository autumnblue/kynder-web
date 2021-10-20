import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import AuthWrapper from '../../common/wrapper/authWrapper';
import NormalInput from '../../common/form/input/normalInput';
import WhiteButton from '../../common/form/button/whiteButton';

const ResetPassword = ({isLoading, verifyToken, resetPassword}) => {
  const [newPassword, onChangeNewPassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const onRequestChangePassword = () => {
    if (!newPassword || !confirmPassword || newPassword !== confirmPassword) {
      setError(true);
      return;
    }
    setError(false);
    const data = {
      token: verifyToken,
      password: newPassword,
    };
    resetPassword(data, history);
  };

  return (
    <AuthWrapper title="Password reset successful">
      <div className="recovery-code-container">
        <p className="title">
          You have successfully reset your password. Please сreate a new one.
        </p>
        <NormalInput
          placeholder="New password"
          type="password"
          value={newPassword}
          onChange={onChangeNewPassword}
          error={error}
        />
        <NormalInput
          placeholder="Repeat password"
          type="password"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          error={error}
          errorText="The confirm password doesn't match"
        />
        <WhiteButton
          title="Confirm"
          isLoading={isLoading}
          action={onRequestChangePassword}
        />
      </div>
    </AuthWrapper>
  )
};

export default ResetPassword;
