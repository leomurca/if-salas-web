// ========== Desktop ==========
const desktopExternalContainer = {
  marginTop: '50px',
  height: '100vh',
};

const desktopInnerContainer = {
  width: '90%',
  marginBottom: '30px',
};

const desktopSectionTitle = {
  padding: '10px',
  borderBottom: '2px solid #00420D',
  color: '#00420D',
};

const desktopAssignmentContainer = {
  width: '95%',
  padding: '20px',
  borderBottom: '2px solid #BCBCBC',
};

const desktopAssignmentTypography = {};

const desktopAssignmentLink = {
  color: 'black',
  textDecoration: 'underline #000000',
};

const desktopAssignmentDueDate = {
  marginTop: '15px',
  fontSize: '15px',
};

const desktopAssignmentScores = {
  fontSize: '15px',
};

const desktop = {
  externalContainer: desktopExternalContainer,
  innerContainer: desktopInnerContainer,
  sectionTitle: desktopSectionTitle,
  assignmentContainer: desktopAssignmentContainer,
  assignmentTypography: desktopAssignmentTypography,
  assignmentLink: desktopAssignmentLink,
  assignmentDueDate: desktopAssignmentDueDate,
  assignmentScores: desktopAssignmentScores,
};

// ========== Mobile ==========
const mobileExternalContainer = {
  marginTop: '50px',
  height: '100vh',
};

const mobileInnerContainer = {
  width: '100%',
  marginBottom: '30px',
};

const mobileSectionTitle = {
  padding: '10px',
  borderBottom: '2px solid #00420D',
  color: '#00420D',
};

const mobileAssignmentContainer = {
  width: '100%',
  padding: '20px',
  borderBottom: '2px solid #BCBCBC',
};

const mobileAssignmentTypography = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
};

const mobileAssignmentLink = {
  color: 'black',
  textDecoration: 'underline #000000',
};

const mobileAssignmentDueDate = {
  marginTop: '10px',
  fontSize: '12px',
};

const mobileAssignmentScores = {
  fontSize: '12px',
};

const mobile = {
  externalContainer: mobileExternalContainer,
  innerContainer: mobileInnerContainer,
  sectionTitle: mobileSectionTitle,
  assignmentContainer: mobileAssignmentContainer,
  assignmentTypography: mobileAssignmentTypography,
  assignmentLink: mobileAssignmentLink,
  assignmentDueDate: mobileAssignmentDueDate,
  assignmentScores: mobileAssignmentScores,
};

// ========== Unset ==========
const unset = {
  externalContainer: null,
  innerContainer: null,
  sectionTitle: null,
  assignmentContainer: null,
  assignmentTypography: null,
  assignmentLink: null,
  assignmentDueDate: null,
  assignmentScores: null,
};

const styles = { desktop, mobile, unset };
export default styles;
