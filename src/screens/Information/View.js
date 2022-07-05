import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Stack,
  Skeleton,
} from '@mui/material';
import { createArrayFrom1ToN } from '../../utils/createArrayFrom1ToN';

function View({ faq, layoutType }) {
  if (layoutType === 'desktop') {
    return (
      <Stack sx={{ paddingTop: '80px' }} alignItems="center" height="100vh">
        {faq === null ? (
          <Stack width="70%" alignItems="center" gap="10px">
            <Skeleton
              variant="rectangular"
              width={500}
              height={50}
              sx={{ marginBottom: '20px' }}
            />
            {createArrayFrom1ToN(6).map(i => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={window.innerWidth * 0.6}
                height={50}
              />
            ))}
          </Stack>
        ) : faq.length !== 0 ? (
          <Stack width="70%" alignItems="center" gap="10px">
            <h1 style={{ textAlign: 'center' }}>Perguntas Frequentes</h1>
            {faq.map((f, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  sx={{ backgroundColor: '#f7f7f7' }}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography fontWeight={600}>{f.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{f.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        ) : (
          <h1>Nenhuma pergunta encontrada</h1>
        )}
      </Stack>
    );
  } else if (layoutType === 'mobile') {
    return (
      <Stack
        sx={{ paddingTop: '30px', paddingBottom: '100px' }}
        alignItems="center"
      >
        {faq === null ? (
          <Stack width="70%" alignItems="center" gap="10px">
            <Skeleton
              variant="rectangular"
              width={200}
              height={50}
              sx={{ marginBottom: '20px' }}
            />
            {createArrayFrom1ToN(6).map(i => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={window.innerWidth * 0.9}
                height={80}
              />
            ))}
          </Stack>
        ) : faq.length !== 0 ? (
          <Stack width="90%" alignItems="center" gap="10px">
            <h1 style={{ textAlign: 'center' }}>Perguntas Frequentes</h1>
            {faq.map((f, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  sx={{ backgroundColor: '#f7f7f7' }}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography fontWeight={600}>{f.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{f.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        ) : (
          <h1>Nenhuma pergunta encontrada</h1>
        )}
      </Stack>
    );
  }
}

export default View;
