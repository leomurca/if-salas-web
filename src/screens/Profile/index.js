import { useRef, useState } from 'react';
import { useUser } from '../../context/user';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import useLayoutType from '../../hooks/useLayoutType';
import View from './View';

function Profile() {
  useDocumentTitle('Meu perfil');
  const layoutType = useLayoutType();
  const { state } = useUser();
  const [data, setData] = useState(state && state.user);
  const hiddenInputImageFileRef = useRef();

  const onChangeFile = e => {
    const name = e.target.name;
    const file = e.target.files[0];

    setData(prev => ({ ...prev, [name]: URL.createObjectURL(file) }));
  };

  const onChangeInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <View
      data={data}
      onChangeInput={onChangeInput}
      onChangeFile={onChangeFile}
      hiddenInputImageFileRef={hiddenInputImageFileRef}
      layoutType={layoutType}
    />
  );
}

export default Profile;
