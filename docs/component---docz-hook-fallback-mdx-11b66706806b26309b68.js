(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{v8za:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return b})),a.d(n,"default",(function(){return u}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var t=a("/FXl"),o=a("TjRS"),r=a("ZFoC"),l=a("ZQZR");a("aD51");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docz/hook-fallback.mdx"}});var s={_frontmatter:b},p=o.a;function u(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(t.b)(p,c({},s,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)(l.g,{heading:!0,page:"fallbackHook",num:"0",mdxType:"Translator"}),Object(t.b)(l.g,{page:"fallbackHook",num:"0",mdxType:"Translator"}),Object(t.b)(l.g,{page:"fallbackHook",num:"1",mdxType:"Translator"}),Object(t.b)(l.g,{page:"fallbackHook",num:"2",mdxType:"Translator"}),Object(t.b)("pre",null,Object(t.b)("code",c({parentName:"pre"},{className:"language-jsx"}),'// ./i18n/index.js\nconst data = {\n  de: {\n    text: "Hallo Welt!",\n  },\n  en: {\n    text: "Hello World!",\n  },\n  es: {\n    text: "!Hola Mundo!",\n  },\n};\n\nexport { data };\n')),Object(t.b)(l.g,{page:"fallbackHook",num:"3",mdxType:"Translator"}),Object(t.b)(l.g,{page:"fallbackHook",num:"4",mdxType:"Translator"}),Object(t.b)("pre",null,Object(t.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"import { data } from './i18n';\nimport { useI18n } from '../../../src';\n\nconst TextFallbackHook = (props) => {\n  /*\n    Never set a language you do not have a translation for.\n    We just use it as example, so you can see the fallback in your browser.\n  */\n  const { i18n } = useI18n(data, { lang: 'zh', fallback: 'es' });\n\n  return (\n    <div>\n      {i18n.text}\n    </div>\n  );\n};\n\nexport { TextFallbackHook as Text };\n")),Object(t.b)(l.g,{page:"fallbackHook",num:"5",mdxType:"Translator"}),Object(t.b)(r.c,{__position:7,__code:"<Text />",__scope:{props:a,DefaultLayout:o.a,Playground:r.c,Translator:l.g,Text:l.d},mdxType:"Playground"},Object(t.b)(l.d,{mdxType:"Text"})))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docz/hook-fallback.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docz-hook-fallback-mdx-11b66706806b26309b68.js.map