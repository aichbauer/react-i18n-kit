import React from "react";
import { browserLanguage } from "../../helper";

const withI18n = (Component, data, options = {}) =>
  class I18n extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lang: props.lang || options.lang || browserLanguage,
        fallback: props.fallback || options.fallback || "en",
        i18n: {},
      };

      this.translate = this.translate.bind(this);
    }

    componentWillMount() {
      const { lang } = this.state;

      this.translate(lang);
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

export { withI18n };
