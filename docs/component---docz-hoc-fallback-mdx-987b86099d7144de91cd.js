(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Z3CL:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return s}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var a=t("/FXl"),r=t("TjRS"),o=t("ZFoC"),l=t("ZQZR");t("aD51");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docz/hoc/fallback.mdx"}});var p={_frontmatter:b},d=r.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(d,c({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)(l.d,{heading:!0,page:"fallback",num:"0",mdxType:"Translator"}),Object(a.b)(l.d,{page:"fallback",num:"0",mdxType:"Translator"}),Object(a.b)(l.d,{page:"fallback",num:"1",mdxType:"Translator"}),Object(a.b)(l.d,{page:"fallback",num:"2",mdxType:"Translator"}),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),'// ./i18n/index.js\nconst data = {\n  de: {\n    text: "Hallo Welt!",\n  },\n  en: {\n    text: "Hello World!",\n  },\n  es: {\n    text: "!Hola Mundo!",\n  },\n};\n\nexport { data };\n')),Object(a.b)(l.d,{page:"fallback",num:"3",mdxType:"Translator"}),Object(a.b)(l.d,{page:"fallback",num:"4",mdxType:"Translator"}),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport { withI18n } from "react-i18n-kit";\n\nimport { data } from "./i18n";\n\nconst Text = props => <div>{props.i18n.text}</div>;\n\n/*\n  Never set a language you do not have a translation for.\n  We just use it as example, so you can see the fallback in your browser.\n*/\nconst TextI18n = withI18n(Text, data, {\n  lang: "zh",\n  fallback: "es",\n});\n\nexport { TextI18n as Text };\n')),Object(a.b)(l.d,{page:"fallback",num:"5",mdxType:"Translator"}),Object(a.b)(o.c,{mdxType:"Playground"},Object(a.b)(l.c,{mdxType:"Text"})),Object(a.b)(l.d,{page:"fallback",num:"6",mdxType:"Translator"}),Object(a.b)(o.c,{mdxType:"Playground"},Object(a.b)(l.c,{lang:"zh",fallback:"de",mdxType:"Text"})))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docz/hoc/fallback.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docz-hoc-fallback-mdx-987b86099d7144de91cd.js.map