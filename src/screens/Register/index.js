import dayjs from 'dayjs';
import { useState } from 'react';
import { useAuthState } from '../../context/auth';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import useLayoutType from '../../hooks/useLayoutType';

import View from './View';

function Register() {
  useDocumentTitle('Criar conta');
  const currentYear = dayjs().year();
  const { register, isPending, isError, error } = useAuthState();
  const layoutType = useLayoutType();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    ra: '',
    course: 0,
    year: currentYear,
    phone: '',
    email: '',
    password: '',
    termsAgreed: false,
  });

  const onTryRegister = () => {
    register(data);
  };

  const onChangeInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    setData(prev => ({ ...prev, [name]: value }));
  };

  const onChangeCheckbox = e => {
    const name = e.target.name;
    const value = e.target.checked;

    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <View
      isPending={isPending}
      isError={isError}
      error={error}
      layoutType={layoutType}
      data={data}
      onChangeInput={onChangeInput}
      onChangeCheckbox={onChangeCheckbox}
      onTryRegister={onTryRegister}
      currentYear={currentYear}
    />
  );
}

export default Register;
