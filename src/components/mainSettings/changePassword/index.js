import React, {useState} from 'react';

import CommonHeader from '../../common/header';
import NormalInput from '../../common/form/input/normalInput';
import GreenButton from '../../common/form/button/greenButton';
import {notification} from '../../../utils/function';

const ChangePassword = ({isLoading, changePassword}) => {
  const [data, onChangeData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [error, setError] = useState(false);

  const onChangePassword = (type, value) => {
    let copiedData = {...data};
    copiedData[type] = value;
    onChangeData(copiedData);
  };

  const submitRequest = () => {
    if (
      !data.currentPassword ||
      !data.newPassword ||
      data.newPassword !== data.confirmNewPassword
    ) {
      setError(true);
      if (data.newPassword !== data.confirmNewPassword) {
        notification('error', 'Confirm password doesn’t match new password');
      }
      return;
    }
    setError(false);
    const requestData = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    }
    changePassword(requestData);
  };

  return (
    <div className="change-password-container">
      <CommonHeader edit title="Change password" />
      <div className="change-password-wrapper">
        <div className="change-password-content">
          <p className="title">Create new password</p>
          <p className="description">It is desirable that the password should consist of 8 or more characters of the Latin alphabet, contain upper and lower case letters, numbers.</p>
          <div className="input-row">
            <NormalInput
              placeholder="Current password"
              value={data.currentPassword}
              onChange={(value) => onChangePassword('currentPassword', value)}
              error={error}
              type="password"
            />
          </div>
          <div className="input-row">
            <NormalInput
              placeholder="New password"
              value={data.newPassword}
              onChange={(value) => onChangePassword('newPassword', value)}
              error={error}
              type="password"
            />
          </div>
          <div className="input-row">
            <NormalInput
              placeholder="Repeat new password"
              value={data.confirmNewPassword}
              onChange={(value) => onChangePassword('confirmNewPassword', value)}
              error={error}
              type="password"
            />
          </div>
          <div className="btn-group">
            <GreenButton
              title="Send"
              action={submitRequest}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ChangePassword;
