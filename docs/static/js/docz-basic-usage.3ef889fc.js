(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docz/basic-usage.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),r=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js"),s=a("./node_modules/docz/dist/index.m.js"),c=a("./docz/components/index.js");function m(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}n.default=function(e){var n=e.components,a=m(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(c.d,{heading:!0,page:"basicUsage",num:"0"}),r.a.createElement(c.d,{page:"basicUsage",num:"0"}),r.a.createElement(c.d,{page:"basicUsage",num:"1"}),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"// ./i18n/index.js\nconst data = {\n  de: {\n    text: 'Hallo Welt!',\n  },\n  en: {\n    text: 'Hello World!',\n  },\n};\n\nexport {\xa0data };\n")),r.a.createElement(c.d,{page:"basicUsage",num:"2"}),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import React from 'react';\nimport { withI18n } from 'react-i18n-kit';\n\nimport {\xa0data } from './i18n';\n\n/*\n  if language is:\n    - en:\n      props.i18n.text: \"Hello World!\"\n    - de:\n      props.i18n.text: \"Hallo Welt!\"\n*/\nconst Text = (props) => (\n  <div>\n    {props.i18n.text}\n  </div>\n);\n\nconst TextI18n = withI18n(Text, data);\n\nexport { TextI18n as Text\xa0};\n")),r.a.createElement(c.d,{page:"basicUsage",num:"3"}),r.a.createElement(s.Playground,{__position:4,__code:"<Text />",__scope:{props:a,Translator:c.d,Text:c.b}},r.a.createElement(c.b,null)),r.a.createElement(c.d,{page:"basicUsage",num:"4"}),r.a.createElement(c.d,{page:"basicUsage",num:"5"}),r.a.createElement(c.d,{page:"basicUsage",num:"6"}),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},'{\n  "text": "Hello World!"\n}\n')),r.a.createElement(c.d,{page:"basicUsage",num:"7"}))}}}]);