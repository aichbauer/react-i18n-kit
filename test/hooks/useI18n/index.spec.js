import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";

import { data, de, en, itFallbackDeAT, zhFallbackDe } from "../../fixtures";
import { useI18n } from "../../../src";

configure({ adapter: new Adapter() });

test("useI18n | state and props | browser languages", () => {
  const MyComponent = () => {
    const { i18n, translate } = useI18n(data);
    return (
      <div>
        <button onClick={() => translate("de")}>de</button>
        <div id="text">{i18n.text}</div>
      </div>
    );
  };

  const wrapper = mount(<MyComponent />);
  const text = wrapper.find("#text").text();

  expect(text).toEqual(en.i18n.text);
});

test("useI18n | state and props | options | lang de", () => {
  const MyComponent = () => {
    const { i18n, translate } = useI18n(data, { lang: "de" });

    return (
      <div>
        <button onClick={() => translate("de")}>de</button>
        <div id="text">{i18n.text}</div>
      </div>
    );
  };

  const wrapper = mount(<MyComponent />);
  const text = wrapper.find("#text").text();

  expect(text).toEqual(de.i18n.text);
});

test("useI18n | state and props | options | lang zh, fallback de", () => {
  const MyComponent = () => {
    const { i18n, translate } = useI18n(data, { lang: "zh", fallback: "de" });

    return (
      <div>
        <button onClick={() => translate("de")}>de</button>
        <div id="text">{i18n.text}</div>
      </div>
    );
  };

  const wrapper = mount(<MyComponent />);
  const text = wrapper.find("#text").text();

  expect(text).toEqual(zhFallbackDe.i18n.text);
});

test("useI18n | state and props | options | lang it-IT, fallback de", () => {
  const MyComponent = () => {
    const { i18n, translate } = useI18n(data, {
      lang: "it",
      fallback: "de-AT",
    });

    return (
      <div>
        <button onClick={() => translate("de")}>de</button>
        <div id="text">{i18n.text}</div>
      </div>
    );
  };

  const wrapper = mount(<MyComponent />);
  const text = wrapper.find("#text").text();

  expect(text).toEqual(itFallbackDeAT.i18n.text);
});

test("useI18n | state and props | translate onClick | en -> de", () => {
  const MyComponent = () => {
    const { i18n, translate } = useI18n(data);

    return (
      <div>
        <button onClick={() => translate("de")}>de</button>
        <div id="text">{i18n.text}</div>
      </div>
    );
  };

  const wrapper = mount(<MyComponent />);
  let text = wrapper.find("#text").text();

  expect(text).toEqual(en.i18n.text);

  wrapper.find("button").simulate("click");
  wrapper.update();

  text = wrapper.find("#text").text();

  expect(text).toEqual(de.i18n.text);
});
