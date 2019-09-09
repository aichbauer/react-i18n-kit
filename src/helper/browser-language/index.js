const getLanguage = () => {
  let browserLanguage;
  try {
    browserLanguage =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;
  } catch (err) {
    browserLanguage = "en";
  }

  return browserLanguage;
};

const browserLanguage = getLanguage();

export { browserLanguage };
