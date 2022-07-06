// ========== Desktop ==========
const desktopStackContainer = {
  paddingTop: '80px',
};

const desktopSkeletonTitle = {
  variant: 'rectangular',
  width: 500,
  height: 50,
  sx: {
    marginBottom: '20px',
  },
};

const desktopSkeletonQuestion = {
  width: innerWidth => innerWidth * 0.6,
  height: 50,
};

const desktopSkeletonStack = {
  width: '70%',
  alignItems: 'center',
  gap: '10px',
};

const desktopAccordionSkeletonStack = {
  width: '70%',
  alignItems: 'center',
  gap: '10px',
};

const desktopTitle = {
  textAlign: 'center',
};

const desktopAccordionSummary = {
  backgroundColor: '#f7f7f7',
};

const desktopSectorsTitle = {
  marginTop: '100px',
  textAlign: 'center',
};

const desktopSectorsStack = {
  sx: { padding: '40px', paddingBottom: '100px' },
  justifyContent: 'center',
  flexWrap: 'wrap',
  flexDirection: 'row',
  gap: '20px',
};

const desktop = {
  stackContainer: desktopStackContainer,
  skeletonTitle: desktopSkeletonTitle,
  skeletonQuestion: desktopSkeletonQuestion,
  skeletonStack: desktopSkeletonStack,
  accordionSkeletonStack: desktopAccordionSkeletonStack,
  title: desktopTitle,
  accordionSummary: desktopAccordionSummary,
  sectorsTitle: desktopSectorsTitle,
  sectorsStack: desktopSectorsStack,
};

// ========== Mobile ==========
const mobileStackContainer = {
  paddingTop: '30px',
  paddingBottom: '100px',
};

const mobileSkeletonTitle = {
  variant: 'rectangular',
  width: 200,
  height: 50,
  sx: {
    marginBottom: '20px',
  },
};

const mobileSkeletonQuestion = {
  width: innerWidth => innerWidth * 0.9,
  height: 80,
};

const mobileSkeletonStack = {
  width: '70%',
  alignItems: 'center',
  gap: '10px',
};

const mobileAccordionSkeletonStack = {
  width: '90%',
  alignItems: 'center',
  gap: '10px',
};

const mobileTitle = {
  textAlign: 'center',
};

const mobileAccordionSummary = {
  backgroundColor: '#f7f7f7',
};

const mobileSectorsTitle = {
  marginTop: '80px',
  textAlign: 'center',
  marginBottom: '30px',
};

const mobileSectorsStack = {
  sx: { padding: '20px', paddingBottom: '100px' },
  gap: '20px',
};

const mobile = {
  stackContainer: mobileStackContainer,
  skeletonTitle: mobileSkeletonTitle,
  skeletonQuestion: mobileSkeletonQuestion,
  skeletonStack: mobileSkeletonStack,
  accordionSkeletonStack: mobileAccordionSkeletonStack,
  title: mobileTitle,
  accordionSummary: mobileAccordionSummary,
  sectorsTitle: mobileSectorsTitle,
  sectorsStack: mobileSectorsStack,
};

// ========== Unset ==========
const unset = {
  stackContainer: null,
  skeletonTitle: null,
  skeletonQuestion: null,
  skeletonStack: null,
  accordionSkeletonStack: null,
  title: null,
  accordionSummary: null,
  sectorsTitle: null,
  sectorsStack: null,
};

const styles = { desktop, mobile, unset };
export default styles;
