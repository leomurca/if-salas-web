import { useState } from 'react';
import { useUser } from '../../context/user';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import useLayoutType from '../../hooks/useLayoutType';
import View from './View';

function Profile() {
  useDocumentTitle('Meu perfil');
  const layoutType = useLayoutType();
  const { state } = useUser();
  const [data, setData] = useState(state && state.user);

  const onChangeInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <View data={data} onChangeInput={onChangeInput} layoutType={layoutType} />
  );
}

export default Profile;
