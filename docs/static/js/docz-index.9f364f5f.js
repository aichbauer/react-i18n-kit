(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docz/index.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js"),m=t("./node_modules/docz/dist/index.m.js"),p=t("./docz/components/index.js");function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components,t=c(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(p.d,{page:"index",heading:!0,num:"0"}),r.a.createElement(p.d,{page:"index",num:"0"}),r.a.createElement(p.d,{page:"index",num:"1"}),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"$ npm i react-i18n-kit -S\n")),r.a.createElement(p.d,{page:"index",num:"2"}),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"// './i18n/index.js'\nconst data = {\n  en: {\n    text: 'Hello World!',\n  },\n  de: {\n    text: 'Hallo Welt!',\n  },\n};\n\nexport { data };\n")),r.a.createElement(p.d,{page:"index",num:"3"}),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import React from 'react';\nimport { withI18n } from 'react-i18n-package';\n\nimport {\xa0data } from './i18n';\n\nconst Text = (props) => (\n  <div>\n    {props.i18n.text}\n  </div>\n);\n\nconst TextI18n = withI18n(Text, data);\n\nexport { TextI18n as Text\xa0};\n")),r.a.createElement(p.d,{page:"index",num:"4"}),r.a.createElement(m.Playground,{__position:5,__code:"<Text />",__scope:{props:t,Translator:p.d,Text:p.b}},r.a.createElement(p.b,null)))}}}]);