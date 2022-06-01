import { useState } from 'react';
import { useAuthState } from '../../context/auth';
import useLayoutType from '../../hooks/useLayoutType';

import View from './View';

function Login() {
  const { login, isPending, isError, error } = useAuthState();
  const layoutType = useLayoutType();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isSubmitable = email.length !== 0 && password.length !== 0;

  const onTryLogin = () => {
    isSubmitable && login(email, password);
  };

  return (
    <View
      email={email}
      password={password}
      onChangeEmail={setEmail}
      onChangePassword={setPassword}
      isSubmitable={isSubmitable}
      onTryLogin={onTryLogin}
      isPending={isPending}
      isError={isError}
      error={error}
      layoutType={layoutType}
    />
  );
}

export default Login;
