const browserLanguage = (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage;

export { browserLanguage };
