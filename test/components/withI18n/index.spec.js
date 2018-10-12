import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  data,
  de,
  en,
  itFallbackDeAT,
  zhFallbackDe,
} from '../../fixtures';
import { withI18n } from '../../../src';

configure({ adapter: new Adapter() });

const I18nText = (props) => (
  <div>
    {props.i18n.text}
  </div>
);

test('withI18n | state and props | browser languages', () => {
  const MyComponent = withI18n(I18nText, data);

  const wrapper = mount(<MyComponent />);
  const state = wrapper.state();
  const text = wrapper.text();

  expect(text).toEqual(en.i18n.text);
  expect(state).toEqual(en);
});

test('withI18n | state and props | options |lang de', () => {
  const MyComponent = withI18n(I18nText, data, { lang: 'de' });

  const wrapper = mount(<MyComponent />);
  const state = wrapper.state();
  const text = wrapper.text();

  expect(text).toEqual(de.i18n.text);
  expect(state).toEqual(de);
});

test('withI18n | state and props | options | lang zh, fallback de', () => {
  const MyComponent = withI18n(I18nText, data, { lang: 'zh', fallback: 'de' });

  const wrapper = mount(<MyComponent />);
  const state = wrapper.state();
  const text = wrapper.text();

  expect(text).toEqual(zhFallbackDe.i18n.text);
  expect(state).toEqual(zhFallbackDe);
});

test('withI18n | state and props | options | lang it-IT, fallback de', () => {
  const MyComponent = withI18n(I18nText, data, { lang: 'it', fallback: 'de-AT' });

  const wrapper = mount(<MyComponent />);
  const state = wrapper.state();
  const text = wrapper.text();

  expect(text).toEqual(itFallbackDeAT.i18n.text);
  expect(state).toEqual(itFallbackDeAT);
});
