export const getI18n = (data, lang, fallback) =>
  data[lang] ||
  data[lang.split("-")[0]] ||
  data[fallback] ||
  data[fallback.split("-")[0]];
