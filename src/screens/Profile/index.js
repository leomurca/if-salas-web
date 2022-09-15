import { useState } from 'react';
import { useUser } from '../../context/user';
import View from './View';

function Profile() {
  const { state } = useUser();
  const [data, setData] = useState(state && state.user);

  const onChangeInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    setData(prev => ({ ...prev, [name]: value }));
  };

  return <View data={data} onChangeInput={onChangeInput} />;
}

export default Profile;
