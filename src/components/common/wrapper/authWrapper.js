import React from 'react';

import Images from '../../../assets/images';

const AuthWrapper = ({title, children}) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="form-wrapper">
          <p className="auth-title">{title}</p>
          {children}
        </div>
      </div>
      <div className="auth-right">
        <img src={Images.authLogo} alt="" className="auth-logo" />
      </div>
    </div>
  )
};

export default AuthWrapper;
