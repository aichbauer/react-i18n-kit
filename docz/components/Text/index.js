import React from "react";

import { data } from "./i18n";
import { withI18n } from "../../../src";

const Text = props => <div>{props.i18n.text}</div>;

const TextI18n = withI18n(Text, data);

export { TextI18n as Text };
