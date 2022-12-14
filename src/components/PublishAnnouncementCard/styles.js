// ========== Desktop ==========
const desktopCard = {
  width: '100%',
  padding: '20px',
};

const desktopPublishAnnouncement = {
  cursor: 'pointer',
  ':hover': {
    color: '#32A041',
  },
};

const desktop = {
  publishAnnouncement: desktopPublishAnnouncement,
  card: desktopCard,
};

// ========== Mobile ==========
const mobilePublishAnnouncement = {
  cursor: 'pointer',
  ':hover': {
    color: '#32A041',
  },
};

const mobileCard = {};

const mobile = {
  publishAnnouncement: mobilePublishAnnouncement,
  card: mobileCard,
};

// ========== Unset ==========

const unset = {
  publishAnnouncement: null,
  card: null,
};

const styles = { desktop, mobile, unset };
export default styles;
