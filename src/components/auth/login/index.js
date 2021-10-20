import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import AuthWrapper from '../../common/wrapper/authWrapper';
import NormalInput from '../../common/form/input/normalInput';
import WhiteButton from '../../common/form/button/whiteButton';

import {validateEmail} from '../../../utils/function';

const Login = ({isLoading, login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const loginAction = () => {
    const data = {
      email,
      password
    }
    if (!validateEmail(email) || !email || !password) {
      setError(true);
      return;
    }
    setError(false);
    login(data);
  };
  return (
    <AuthWrapper title="Sign in to Kynder">
      <div className="login-container">
        <NormalInput
          placeholder="Email"
          value={email}
          onChange={setEmail}
          error={error}
          errorText="The email doesn't match the format"
        />
        <NormalInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={setPassword}
          error={error}
        />
        <div className="forgot-password">
          <a
            className="forgot-password-link"
            onClick={() => history.push('/auth/forgot-password')}
          >
            Forgot password?
          </a>
        </div>
        <WhiteButton title="Login" isLoading={isLoading} action={loginAction} />
        <div className="register-link-group">
          <p>Don't have an account?</p>
          <a
            className="register-link"
            onClick={() => history.push('/auth/register')}
          >
            Register
          </a>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Login;
