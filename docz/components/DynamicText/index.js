
import React from 'react';
import { withI18n } from '../../../src';

import { data } from './i18n';
import { Text } from './Text';

class DynamicText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
    };

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(lang) {
    this.setState({
      lang,
    });
  }

  render() {
    const { lang } = this.state;
    const TextI18n = withI18n(Text, data);

    return (
      <React.Fragment>
        <button
          type="submit"
          onClick={() => this.handleLanguageChange('en')}
        >
          English
        </button>
        <button
          type="submit"
          onClick={() => this.handleLanguageChange('es')}
        >
          Español
        </button>
        <button
          type="submit"
          onClick={() => this.handleLanguageChange('de')}
        >
          Deutsch
        </button>
        <TextI18n lang={lang} />
      </React.Fragment>
    );
  }
}

export { DynamicText };
