import React from "react";
import { useI18n } from "../../../src";

import { data } from "./i18n";

const DynamicTextHook = () => {
  const { i18n, translate } = useI18n(data, { lang: 'en' });
  console.log(i18n, translate);
  return (
    <>
      <button onClick={() => translate("en")}>
        English
      </button>
      <button onClick={() => translate("es")}>
        Español
      </button>
      <button onClick={() => translate("de")}>
        Deutsch
      </button>
      <div>{i18n.text}</div>
    </>
  );
};

export { DynamicTextHook };
