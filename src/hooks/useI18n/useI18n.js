import { useState } from "react";
import { browserLanguage } from "../../helper";

const generateLang = options => options.lang || browserLanguage;
const generateFallback = options => options.fallback || "en";

const generateI18n = (data, lang, fallback) =>
  data[lang] ||
  data[lang.split("-")[0]] ||
  data[fallback] ||
  data[fallback.split("-")[0]];

const useI18n = (data, options = {}) => {
  const lang = generateLang(options);
  const fallback = generateFallback(options);

  const [state, setState] = useState({
    lang,
    fallback,
    i18n: generateI18n(data, lang, fallback),
    translate: language =>
      setState({
        ...state,
        lang,
        i18n: generateI18n(data, language, fallback),
      }),
  });

  return {
    i18n: state.i18n,
    translate: state.translate,
  };
};

export default useI18n;
