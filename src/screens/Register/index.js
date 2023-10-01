import dayjs from 'dayjs';
import { useState } from 'react';
import { useAuthState } from '../../context/auth';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import useLayoutType from '../../hooks/useLayoutType';

import View from './View';
import {
  hasAtLeastLength,
  hasLowerCase,
  hasNumber,
  hasSpecialChars,
  hasUpperCase,
} from '../../utils/validations';

function Register() {
  useDocumentTitle('Criar conta');
  const currentYear = dayjs().year();
  const { register, isPending, isError, error } = useAuthState();
  const layoutType = useLayoutType();
  const [
    isPasswordFocusedForTheFirstTime,
    setIsPasswordFocusedForTheFirstTime,
  ] = useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    ra: '',
    course: 0,
    year: currentYear,
    phone: '',
    email: '',
    password: {
      value: '',
      strength: 0,
      rules: [
        {
          applied: false,
          label: 'Pelo menos 8 caracteres.',
        },
        {
          applied: false,
          label: 'Pelo menos uma letra minúscula.',
        },
        {
          applied: false,
          label: 'Pelo menos uma letra maiúscula.',
        },
        {
          applied: false,
          label: 'Pelo menos um caractere especial (Exemplo: @, #, $, %, etc).',
        },
        {
          applied: false,
          label: 'Pelo menos um número.',
        },
      ],
    },
    termsAgreed: false,
  });

  const onTryRegister = () => {
    register({ ...data, password: data.password.value });
  };

  const onChangePasswordInput = e => {
    const value = e.target.value;
    const appliedRules = [
      hasAtLeastLength(value, 8),
      hasLowerCase(value),
      hasUpperCase(value),
      hasSpecialChars(value),
      hasNumber(value),
    ];

    setData(prev => ({
      ...prev,
      password: {
        value,
        strength:
          (appliedRules.filter(r => r === true).length * 100) /
          appliedRules.length,
        rules: prev.password.rules.map((rule, i) => ({
          ...rule,
          applied: appliedRules[i],
        })),
      },
    }));
  };

  const onFocusInput = e => {
    if (isPasswordFocusedForTheFirstTime) return;
    const name = e.target.name;
    setIsPasswordFocusedForTheFirstTime(name === 'password');
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
      isPasswordFocusedForTheFirstTime={isPasswordFocusedForTheFirstTime}
      data={data}
      onChangeInput={onChangeInput}
      onChangePasswordInput={onChangePasswordInput}
      onChangeCheckbox={onChangeCheckbox}
      onFocusInput={onFocusInput}
      onTryRegister={onTryRegister}
      currentYear={currentYear}
    />
  );
}

export default Register;
