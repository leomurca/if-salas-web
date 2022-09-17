// ========== Desktop ==========
const desktopContainer = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '30px',
};

const desktopLoadingContainer = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
};

const desktopHeaderStack = {
  width: '70%',
  paddingBottom: '5px',
  borderBottom: '1px solid black',
};

const desktopTitle = {
  fontWeight: 'bold',
  padding: '15px 0',
};

const desktopClassroomColorStack = {
  flexDirection: 'row',
  alignItems: 'center',
};

const desktopClassroomColor = color => ({
  backgroundColor: color,
  width: '15px',
  height: '15px',
  marginRight: '5px',
});

const desktopSubHeaderStack = {
  paddingBottom: '5px',
  paddingTop: '20px',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const desktopSubHeaderTypography = {};

const desktopDescriptionStack = {
  width: '70%',
  paddingTop: '30px',
  paddingBottom: '30px',
  borderBottom: '1px solid black',
};

const desktopDropzoneStack = {
  width: '70%',
  paddingTop: '30px',
  paddingBottom: '30px',
};

const desktopDropzoneBox = {
  width: '100%',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px dashed black',
};

const desktopButton = {
  width: '30%',
  marginTop: '20px',
};

const desktop = {
  container: desktopContainer,
  loadingContainer: desktopLoadingContainer,
  headerStack: desktopHeaderStack,
  title: desktopTitle,
  classroomColorStack: desktopClassroomColorStack,
  classroomColor: color => desktopClassroomColor(color),
  subHeaderStack: desktopSubHeaderStack,
  subHeaderTypography: desktopSubHeaderTypography,
  descriptionStack: desktopDescriptionStack,
  dropzoneStack: desktopDropzoneStack,
  dropzoneBox: desktopDropzoneBox,
  button: desktopButton,
};

// ========== Mobile ==========
const mobileContainer = {
  ...desktopContainer,
  marginBottom: '100px',
};

const mobileLoadingContainer = {
  ...desktopLoadingContainer,
  marginBottom: '100px',
};

const mobileHeaderStack = {
  ...desktopHeaderStack,
  width: '90%',
};

const mobileTitle = {
  ...desktopTitle,
};

const mobileClassroomColorStack = {
  ...desktopClassroomColorStack,
};

const mobileClassroomColor = color => ({
  backgroundColor: color,
  width: '15px',
  height: '15px',
  marginRight: '5px',
});

const mobileSubHeaderStack = {
  ...desktopSubHeaderStack,
  flexDirection: 'column',
};

const mobileSubHeaderTypography = {
  fontSize: '15px',
};

const mobileDescriptionStack = {
  ...desktopDescriptionStack,
  width: '90%',
};

const mobileDropzoneStack = {
  ...desktopDropzoneStack,
  width: '90%',
};

const mobileDropzoneBox = {
  ...desktopDropzoneBox,
};

const mobileButton = {
  ...desktopButton,
  width: '100%',
};

const mobile = {
  container: mobileContainer,
  loadingContainer: mobileLoadingContainer,
  headerStack: mobileHeaderStack,
  title: mobileTitle,
  classroomColorStack: mobileClassroomColorStack,
  classroomColor: color => mobileClassroomColor(color),
  subHeaderStack: mobileSubHeaderStack,
  subHeaderTypography: mobileSubHeaderTypography,
  descriptionStack: mobileDescriptionStack,
  dropzoneStack: mobileDropzoneStack,
  dropzoneBox: mobileDropzoneBox,
  button: mobileButton,
};

// ========== Unset ==========
const unset = {
  container: null,
  loadingContainer: null,
  headerStack: null,
  title: null,
  classroomColorStack: null,
  classroomColor: null,
  subHeaderStack: null,
  subHeaderTypography: null,
  descriptionStack: null,
  dropzoneStack: null,
  dropzoneBox: null,
  button: null,
};

const styles = { desktop, mobile, unset };
export default styles;
