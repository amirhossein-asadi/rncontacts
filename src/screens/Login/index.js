import React, {useState} from 'react';
import LoginComponent from '../../components/Login';

const Login = () => {
  const [text, onChangeText] = useState('');

  return <LoginComponent />;
};

export default Login;
