import React from "react";
import { getFallback, getLanguage, getI18n } from "../../helper";

const withI18n = (Component, data, options = {}) =>
  class I18n extends React.Component {
    constructor(props) {
      super(props);
      const lang = getLanguage(options, props);
      const fallback = getFallback(options, props);

      this.state = {
        lang,
        fallback,
        i18n: getI18n(data, lang, fallback),
      };

      this.translate = this.translate.bind(this);
    }

    translate(lang) {
      const { fallback } = this.state;
      this.setState({
        lang,
        i18n:
          data[lang] ||
          data[lang.split("-")[0]] ||
          data[fallback] ||
          data[fallback.split("-")[0]],
      });
    }

    render() {
      const { i18n } = this.state;
      const { lang, fallback, ...rest } = this.props;
      return (
        <Component
          {...rest}
          i18n={i18n}
          translate={language => this.translate(language)}
        />
      );
    }
  };

export default withI18n;
