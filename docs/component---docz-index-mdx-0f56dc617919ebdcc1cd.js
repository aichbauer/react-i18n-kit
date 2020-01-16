(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{y2NO:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return b}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var a=t("/FXl"),o=t("TjRS"),r=t("ZFoC"),c=t("ZQZR");t("aD51");function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docz/index.mdx"}});var d={_frontmatter:i},m=o.a;function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(m,p({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"intro"},"Intro"),Object(a.b)(c.g,{page:"index",num:"0",mdxType:"Translator"}),Object(a.b)(c.g,{page:"index",num:"1",mdxType:"Translator"}),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-sh"}),"$ npm i react-i18n-kit -S\n")),Object(a.b)(c.g,{page:"index",num:"2",mdxType:"Translator"}),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-js"}),'// \'./i18n/index.js\'\nconst data = {\n  en: {\n    text: "Hello World!",\n  },\n  de: {\n    text: "Hallo Welt!",\n  },\n};\n\nexport { data };\n')),Object(a.b)(c.g,{heading:!0,page:"index",num:"0",mdxType:"Translator"}),Object(a.b)(c.g,{page:"index",num:"3",mdxType:"Translator"}),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport { useI18n } from "react-i18n-kit";\n\nimport { data } from "./i18n";\n\nconst TextHook = () => {\n  const { i18n } = useI18n(data);\n\n  return (\n    <div>{i18n.text}</div>\n  );\n};\n\nexport { TextHook };\n')),Object(a.b)(c.g,{page:"index",num:"5",mdxType:"Translator"}),Object(a.b)(r.c,{__position:6,__code:"<TextHook />",__scope:{props:t,DefaultLayout:o.a,Playground:r.c,Translator:c.g,TextHoc:c.e,TextHook:c.f},mdxType:"Playground"},Object(a.b)(c.f,{mdxType:"TextHook"})),Object(a.b)(c.g,{heading:!0,page:"index",num:"1",mdxType:"Translator"}),Object(a.b)(c.g,{page:"index",num:"4",mdxType:"Translator"}),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport { withI18n } from "react-i18n-package";\n\nimport { data } from "./i18n";\n\nconst TextHoc = props => <div>{props.i18n.text}</div>;\n\nconst TextI18n = withI18n(TextHoc, data);\n\nexport { TextI18n as TextHoc };\n')),Object(a.b)(c.g,{page:"index",num:"5",mdxType:"Translator"}),Object(a.b)(r.c,{__position:10,__code:"<TextHoc />",__scope:{props:t,DefaultLayout:o.a,Playground:r.c,Translator:c.g,TextHoc:c.e,TextHook:c.f},mdxType:"Playground"},Object(a.b)(c.e,{mdxType:"TextHoc"})))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docz/index.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docz-index-mdx-0f56dc617919ebdcc1cd.js.map