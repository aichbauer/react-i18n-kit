import React from 'react';
import { browserLanguage } from '../../config';

const withI18n = (Component, data, options = {}) => (
  class I18n extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lang: props.lang || options.lang || browserLanguage,
        fallback: options.fallback || 'en',
        i18n: {},
      };

      this.translate = this.translate.bind(this);
    }

    componentWillMount() {
      this.translate();
    }

    translate() {
      const {
        lang,
        fallback,
      } = this.state;

      this.setState({
        i18n: data[lang]
          || data[lang.split('-')[0]]
          || data[fallback]
          || data[fallback.split('-')[0]],
      });
    }

    render() {
      const {
        i18n,
      } = this.state;
      const {
        lang,
        ...rest
      } = this.props;
      return (
        <Component {...rest} i18n={i18n} />
      );
    }
  }
);

export { withI18n };
