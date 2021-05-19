(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return a})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return p}));var t=r(2),o=r(9),c=(r(0),r(160)),i={id:"recoleccion-ingresos",title:"Recolecci\xf3n de Ingresos",sidebar_label:"Recolecci\xf3n de Ingresos"},a={id:"recoleccion-ingresos",isDocsHomePage:!1,title:"Recolecci\xf3n de Ingresos",description:"Este API se utiliza para obtener informaci\xf3n sobre recolecci\xf3n de ingresos.",source:"@site/docs/recoleccion-ingresos.md",permalink:"/apis/docs/recoleccion-ingresos",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/recoleccion-ingresos.md",sidebar_label:"Recolecci\xf3n de Ingresos",sidebar:"someSidebar",previous:{title:"APC Municipal - Estados de Solicitud",permalink:"/apis/docs/apc-estados"},next:{title:"Yaipay (Persona)",permalink:"/apis/docs/yaipay-persona"}},s=[{value:"Ingresos",id:"ingresos",children:[{value:"HTTP Request",id:"http-request",children:[]},{value:"Ejemplo",id:"ejemplo",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Este API se utiliza para obtener informaci\xf3n sobre recolecci\xf3n de ingresos."),Object(c.b)("h2",{id:"ingresos"},"Ingresos"),Object(c.b)("p",null,"M\xe9todo para obtener la el detalle de recolecci\xf3n de ingresos agrupado por servicio y periodo."),Object(c.b)("h3",{id:"http-request"},"HTTP Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/recoleccion-ingresos/servicio-periodo\n")),Object(c.b)("h3",{id:"ejemplo"},"Ejemplo"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H \'Content-Type: application/json\' -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/recoleccion-ingresos/servicio-periodo?fechaInicio=01/01/2020&fechaFinal=01/10/2020"\n')),Object(c.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "CUF": {\n    "AGU": {\n        "202001": {\n            "auxiliar": "CUF",\n            "codigoServicio": "AGU",\n            "montoCancelado": 0.0,\n            "montoIngreso": 0.0,\n            "montoIntereses": 0.0,\n            "nombreServicio": "SERVICIO DE AGUA",\n            "periodo": 202001\n        },\n        "202002": {\n            "auxiliar": "CUF",\n            "codigoServicio": "AGU",\n            "montoCancelado": 0.0,\n            "montoIngreso": 0.0,\n            "montoIntereses": 0.0,\n            "nombreServicio": "SERVICIO DE AGUA",\n            "periodo": 202002\n        }\n      }\n    }\n}\n')))}p.isMDXComponent=!0},160:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=t,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||c;return r?o.a.createElement(m,a(a({ref:n},l),{},{components:r})):o.a.createElement(m,a({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,i=new Array(c);i[0]=b;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);