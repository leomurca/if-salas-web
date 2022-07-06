import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Stack,
  Skeleton,
} from '@mui/material';
import SectorCard from '../../components/SectorCard';
import { createArrayFrom1ToN } from '../../utils/createArrayFrom1ToN';

import styles from './styles';

function View({ faq, sectors, layoutType }) {
  const {
    stackContainer,
    skeletonTitle,
    skeletonQuestion,
    skeletonStack,
    accordionSkeletonStack,
    title,
    accordionSummary,
    sectorsTitle,
    sectorsStack,
  } = styles[layoutType];

  if (layoutType === 'desktop') {
    return (
      <Stack sx={stackContainer} alignItems="center" height="100vh">
        {faq === null ? (
          <Stack {...skeletonStack}>
            <Skeleton {...skeletonTitle} />
            {createArrayFrom1ToN(6).map(i => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={skeletonQuestion.width(window.innerWidth)}
                height={skeletonQuestion.height}
              />
            ))}
          </Stack>
        ) : faq.length !== 0 ? (
          <Stack {...accordionSkeletonStack}>
            <h1 style={title}>Perguntas Frequentes</h1>
            {faq.map((f, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  sx={accordionSummary}
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
        <h1 style={sectorsTitle}>Setores do IFMG Campus Sabará</h1>
        <Stack {...sectorsStack}>
          {sectors.map(sector => (
            <SectorCard
              key={sector.title}
              title={sector.title}
              description={sector.description}
              coverImage={sector.coverImage}
              informationUrl={sector.informationUrl}
            />
          ))}
        </Stack>
      </Stack>
    );
  } else if (layoutType === 'mobile') {
    return (
      <Stack sx={stackContainer} alignItems="center">
        {faq === null ? (
          <Stack {...skeletonStack}>
            <Skeleton {...skeletonTitle} />
            {createArrayFrom1ToN(6).map(i => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={skeletonQuestion.width(window.innerWidth)}
                height={skeletonQuestion.height}
              />
            ))}
          </Stack>
        ) : faq.length !== 0 ? (
          <Stack {...accordionSkeletonStack}>
            <h1 style={title}>Perguntas Frequentes</h1>
            {faq.map((f, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  sx={accordionSummary}
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
        <h1 style={sectorsTitle}>Setores do IFMG Campus Sabará</h1>
        <Stack {...sectorsStack}>
          {sectors.map(sector => (
            <SectorCard
              key={sector.title}
              title={sector.title}
              description={sector.description}
              coverImage={sector.coverImage}
              informationUrl={sector.informationUrl}
            />
          ))}
        </Stack>
      </Stack>
    );
  }
}

export default View;
