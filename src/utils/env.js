function appVersion() {
  return process.env.REACT_APP_VERSION;
}

function environmentName() {
  return process.env.REACT_APP_ENVIRONMENT_NAME;
}

function environmentNameDashAppVersion() {
  return `${environmentName()}-${appVersion()}`;
}

export { environmentNameDashAppVersion };
