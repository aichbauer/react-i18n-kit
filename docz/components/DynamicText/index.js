import React from 'react';
import { withI18n } from '../../../src';

import { data } from './i18n';

const DynamicText = (props) => (
  <React.Fragment>
    <button
      type="submit"
      onClick={() => props.translate('en')}
    >
      English
    </button>
    <button
      type="submit"
      onClick={() => props.translate('es')}
    >
      Español
    </button>
    <button
      type="submit"
      onClick={() => props.translate('de')}
    >
      Deutsch
    </button>
    <div>
      {props.i18n.text}
    </div>
  </React.Fragment>
);

const DynamicTextWithI18n = withI18n(DynamicText, data);

export { DynamicTextWithI18n as DynamicText };
