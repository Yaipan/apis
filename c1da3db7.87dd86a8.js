(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(9),c=(a(0),a(158)),o={id:"apc-estados",title:"APC Municipal - Estados de Solicitud",sidebar_label:"APC Municipal - Estados de Solicitud"},i={id:"apc-estados",isDocsHomePage:!1,title:"APC Municipal - Estados de Solicitud",description:"Los APIs aqu\xed enumerados se utilizan para consultar los estados de solicitudes relacionados al APC Municipal.",source:"@site/docs/apc-estados.md",permalink:"/apis/docs/apc-estados",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/apc-estados.md",sidebar_label:"APC Municipal - Estados de Solicitud",sidebar:"someSidebar",previous:{title:"Informaci\xf3n de Propiedades",permalink:"/apis/docs/informacion-propiedades"}},l=[{value:"Consultar Solicitudes",id:"consultar-solicitudes",children:[{value:"HTTP Request",id:"http-request",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Ejemplo",id:"ejemplo",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Los APIs aqu\xed enumerados se utilizan para consultar los estados de solicitudes relacionados al APC Municipal."),Object(c.b)("h2",{id:"consultar-solicitudes"},"Consultar Solicitudes"),Object(c.b)("p",null,"M\xe9todo para obtener la lista de solicitudes que incluyen el estado de cada solicitud."),Object(c.b)("h3",{id:"http-request"},"HTTP Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/apc-estados/consultar\n")),Object(c.b)("h3",{id:"query-parameters"},"Query Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoCFIA"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de CFIA")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroCuenta"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de cuenta")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cedula"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xe9dula")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroFinca"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de finca")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duplicado"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de duplicado (",Object(c.b)("strong",{parentName:"td"},"NOTA:")," Se utiliza en conjunto con ",Object(c.b)("inlineCode",{parentName:"td"},"numeroFinca"),")")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"horizontalFilial"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicador de filial (",Object(c.b)("strong",{parentName:"td"},"NOTA:")," Se utiliza en conjunto con ",Object(c.b)("inlineCode",{parentName:"td"},"numeroFinca"),")")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroDerecho"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de derecho (",Object(c.b)("strong",{parentName:"td"},"NOTA:")," Se utiliza en conjunto con ",Object(c.b)("inlineCode",{parentName:"td"},"numeroFinca"),")")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroSolicitudPermiso"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de solicitud de permiso")))),Object(c.b)("h3",{id:"ejemplo"},"Ejemplo"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/apc-estados/consultar?numeroSolicitudPermiso=1"\n')),Object(c.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'[\n    {\n        "cedula": "1234567890",\n        "codigoCFIA": null,\n        "duplicado": null,\n        "estadoPermiso": "01 - INGRESADO",\n        "fechaReciboPago": null,\n        "horizontalFilial": false,\n        "numeroCuenta": 10,\n        "numeroDerecho": "000",\n        "numeroFinca": "0081",\n        "numeroSolicitudPermiso": 1,\n        "observaciones": null\n    }\n]\n')))}b.isMDXComponent=!0},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,m=d["".concat(o,".").concat(p)]||d[p]||s[p]||c;return a?r.a.createElement(m,i(i({ref:t},u),{},{components:a})):r.a.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<c;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);