import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

export default function useLayoutType() {
  const [layoutType, setLayoutType] = useState('desktop');
  const isMediaQueryRuleActive = useMediaQuery('(max-width:800px)');

  useEffect(() => {
    if (isMediaQueryRuleActive) {
      setLayoutType('mobile');
    } else {
      setLayoutType('desktop');
    }
  }, [isMediaQueryRuleActive]);

  return layoutType;
}
