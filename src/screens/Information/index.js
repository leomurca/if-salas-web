import { useEffect, useState } from 'react';
import { useUser } from '../../context/user';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import useLayoutType from '../../hooks/useLayoutType';

import View from './View';
import { sectors } from './data';

function Information() {
  useDocumentTitle('Informações');
  const layoutType = useLayoutType();
  const { userService } = useUser();
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    async function getClassrooms() {
      const result = await userService.fetchFAQ();
      setFaq(result.data);
    }
    getClassrooms();
  }, [userService, userService.fetchFAQ]);

  return <View faq={faq} sectors={sectors} layoutType={layoutType} />;
}

export default Information;
