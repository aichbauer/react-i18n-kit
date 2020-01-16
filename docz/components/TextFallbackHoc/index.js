import React from 'react';

import { data } from './i18n';
import { withI18n } from '../../../src';

const TextFallbackHoc = (props) => (
  <div>
    {props.i18n.text}
  </div>
);

const TextI18n = withI18n(TextFallbackHoc, data, { lang: 'zh', fallback: 'es' });

export { TextI18n as TextFallbackHoc };
