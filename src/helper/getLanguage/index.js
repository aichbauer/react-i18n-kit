import { browserLanguage } from "../browserLanguage";

export const getLanguage = (options, props) => {
  if (props && props.lang) {
    return props.lang;
  }

  return options.lang || browserLanguage;
};
