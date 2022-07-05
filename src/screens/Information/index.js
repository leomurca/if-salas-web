import { useEffect, useState } from 'react';
import { useUser } from '../../context/user';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import useLayoutType from '../../hooks/useLayoutType';
import View from './View';

function Information() {
  useDocumentTitle('Informações');
  const layoutType = useLayoutType();
  const { fetchFAQ } = useUser();
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    async function getClassrooms() {
      const result = await fetchFAQ();
      setFaq(result.data);
    }
    getClassrooms();
  }, [fetchFAQ]);

  return <View faq={faq} layoutType={layoutType} />;
}

export default Information;
