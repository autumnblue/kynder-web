import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import AuthWrapper from '../../common/wrapper/authWrapper';
import NormalInput from '../../common/form/input/normalInput';
import WhiteButton from '../../common/form/button/whiteButton';

import {validateEmail} from '../../../utils/function';

const Register = ({isLoading, register}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const registerAction = () => {
    const data = {
      email,
      password
    }
    if (!validateEmail(email) || !email || !password) {
      setError(true);
      return;
    }
    setError(false);
    register(data, history);
  };

  return (
    <AuthWrapper title="Register to Kynder">
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
          value={password}
          onChange={setPassword}
          error={error}
          type="password"
        />
        <WhiteButton
          title="Register"
          action={registerAction}
          isLoading={isLoading}
        />
        <div className="register-link-group">
          <p>Already an account?</p>
          <a
            className="register-link"
            onClick={() => history.push('/auth/login')}
          >
            Signin
          </a>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Register;
