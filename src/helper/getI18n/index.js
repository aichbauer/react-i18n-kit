import { deepMerge } from "../";

export const getI18n = (data, lang, fallback) => {
  const fallb = data[fallback] || data[fallback.split("-")[0]] || {};
  const lng = data[lang] || data[lang.split("-")[0]] || {};

  const fullLang = deepMerge(fallb, lng);

  return fullLang;
};
