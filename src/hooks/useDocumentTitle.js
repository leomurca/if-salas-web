import { useEffect, useState } from 'react';

const useDocumentTitle = title => {
  const [documentTitle] = useState(title);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
};

export { useDocumentTitle };
