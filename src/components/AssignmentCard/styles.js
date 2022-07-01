// ========== Desktop ==========
const desktopCardContainer = classrooms => ({
  position: 'relative',
  width: '100%',
  borderLeft: `5px solid ${classrooms[0].color}`,
});

const desktopClassroomLinesIndicator = classroom => ({
  position: 'absolute',
  height: '100%',
  borderLeft: `5px solid  ${classroom.color}`,
  left: 0,
});

const desktopCardActionArea = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
};

const desktopCardContent = {
  width: '100%',
};

const desktopTypographyTitle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  fontSize: '17px',
};

const desktopStackClassroomNames = {
  width: '100%',
};

const desktopTypographyClassroomNames = {
  fontWeight: 'bold',
};

const desktopDividerMiddle = {
  marginTop: '10px',
};

const desktopTypographyDueDate = {
  marginTop: '10px',
};

const desktop = {
  cardContainer: desktopCardContainer,
  classroomLinesIndicator: desktopClassroomLinesIndicator,
  cardActionArea: desktopCardActionArea,
  cardContent: desktopCardContent,
  typographyTitle: desktopTypographyTitle,
  stackClassroomNames: desktopStackClassroomNames,
  typographyClassroomNames: desktopTypographyClassroomNames,
  dividerMiddle: desktopDividerMiddle,
  typographyDueDate: desktopTypographyDueDate,
};

// ========== Mobile ==========
const mobileCardContainer = classrooms => ({
  width: 390,
  borderTop: `5px solid ${classrooms[0].color}`,
});

const mobileClassroomLinesIndicator = classroom => ({
  position: 'absolute',
  width: '100%',
  borderTop: `5px solid  ${classroom.color}`,
  top: 0,
});

const mobileCardActionArea = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
};

const mobileCardContent = {
  width: '100%',
};

const mobileTypographyTitle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  fontSize: '17px',
};

const mobileStackClassroomNames = {
  width: '100%',
};

const mobileTypographyClassroomNames = {
  fontWeight: 'bold',
};

const mobileDividerMiddle = {
  marginTop: '10px',
};

const mobileTypographyDueDate = {
  marginTop: '10px',
};

const mobile = {
  cardContainer: mobileCardContainer,
  classroomLinesIndicator: mobileClassroomLinesIndicator,
  cardActionArea: mobileCardActionArea,
  cardContent: mobileCardContent,
  typographyTitle: mobileTypographyTitle,
  stackClassroomNames: mobileStackClassroomNames,
  typographyClassroomNames: mobileTypographyClassroomNames,
  dividerMiddle: mobileDividerMiddle,
  typographyDueDate: mobileTypographyDueDate,
};

// ========== Unset ==========
const unset = {
  cardContainer: null,
  classroomLinesIndicator: null,
  cardActionArea: null,
  cardContent: null,
  typographyTitle: null,
  stackClassroomNames: null,
  typographyClassroomNames: null,
  dividerMiddle: null,
  typographyDueDate: null,
};

const styles = { desktop, mobile, unset };
export default styles;
