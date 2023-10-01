function hasLowerCase(str) {
  return str.toUpperCase() !== str;
}

function hasUpperCase(str) {
  return str.toLowerCase() !== str;
}

function hasSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function hasAtLeastLength(str, length) {
  return str.length >= length;
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

export {
  hasLowerCase,
  hasUpperCase,
  hasSpecialChars,
  hasAtLeastLength,
  hasNumber,
};
