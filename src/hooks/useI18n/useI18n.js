import { useState } from "react";
import { getFallback, getLanguage, getI18n } from "../../helper";

const useI18n = (data, options = {}) => {
  const lang = getLanguage(options);
  const fallback = getFallback(options);

  const [state, setState] = useState({
    lang,
    fallback,
    i18n: getI18n(data, lang, fallback),
    translate: language =>
      setState({
        ...state,
        lang,
        i18n: getI18n(data, language, fallback),
      }),
  });

  return {
    i18n: state.i18n,
    translate: state.translate,
  };
};

export default useI18n;
