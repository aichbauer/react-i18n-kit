import React from 'react';

import { data } from './i18n';
import { useI18n } from '../../../src';

const TextFallbackHook = (props) => {
  const { i18n } = useI18n(data, { lang: 'zh', fallback: 'es' });

  return (
    <div>
      {i18n.text}
    </div>
  );
};

export { TextFallbackHook };
