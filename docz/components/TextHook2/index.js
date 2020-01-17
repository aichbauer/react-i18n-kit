import React from "react";

import { data } from "./i18n";
import { useI18n } from "../../../src";

const TextHook2 = () => {
  const { i18n } = useI18n(data, {
    lang: 'de',
    fallback: 'en',
  });

  return (
    <>
      <div>{i18n.text}</div>
      <div>{i18n.text2}</div>
    </>
  );
};

export { TextHook2 };
