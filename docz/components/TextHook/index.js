import React from "react";

import { data } from "./i18n";
import { useI18n } from "../../../src";

const TextHook = () => {
  const { i18n } = useI18n(data);

  return (
    <div>{i18n.text}</div>
  );
};

export { TextHook };
