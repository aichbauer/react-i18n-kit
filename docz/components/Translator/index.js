import React from "react";
import ReactMarkdown from "react-markdown";

import { data } from "./i18n";
import { withI18n } from "../../../src";

import "./css/style.css";

const Translator = ({ page, num, heading, i18n }) =>  {
  return (
    <div id="w--">
      <ReactMarkdown
        source={heading ? i18n[page].heading[num] : i18n[page].text[num]}
      />
    </div>
  );
};

const I18nTranslator = withI18n(Translator, data);

export { I18nTranslator as Translator };
