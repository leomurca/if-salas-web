import { Stack, Skeleton } from '@mui/material';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import useLayoutType from '../../hooks/useLayoutType';

import calendarPdf from './calendario-academico.pdf';

function Calendar() {
  useDocumentTitle('Calendário');
  const layoutType = useLayoutType();
  const { innerWidth, innerHeight } = window;

  if (layoutType === 'desktop') {
    return (
      <Stack spacing={2} alignItems="center" sx={{ paddingTop: '40px' }}>
        <Document
          error={<p>Falha ao carregar o arquivo.</p>}
          loading={<Skeleton variant="rectangular" width={900} height={1250} />}
          options={{ workerSrc: '/pdf.worker.js' }}
          file={calendarPdf}
        >
          <Page
            loading={<p>Carregando página...</p>}
            scale={(1.5 * innerHeight) / 1400}
            pageNumber={1}
          />
        </Document>
        <a target="_blank" rel="noreferrer" href={calendarPdf} download>
          Baixar Calendário Acadêmico
        </a>
      </Stack>
    );
  } else if (layoutType === 'mobile') {
    return (
      <Stack
        spacing={2}
        alignItems="center"
        sx={{ paddingTop: '40px', paddingBottom: '80px' }}
      >
        <Document
          error={<p>Falha ao carregar o arquivo.</p>}
          loading={
            <Skeleton
              variant="rectangular"
              width={innerWidth - 20}
              height={550}
            />
          }
          options={{ workerSrc: '/pdf.worker.js' }}
          file={calendarPdf}
        >
          <Page
            loading={<p>Carregando página...</p>}
            scale={innerHeight / (innerHeight + innerWidth)}
            pageNumber={1}
          />
        </Document>
        <a target="_blank" rel="noreferrer" href={calendarPdf} download>
          Baixar Calendário Acadêmico
        </a>
      </Stack>
    );
  }
}

export default Calendar;
