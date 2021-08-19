(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(9),o=(a(0),a(162)),c={id:"apc-estados",title:"APC Municipal - Estados de Solicitud",sidebar_label:"APC Municipal - Estados de Solicitud"},i={id:"apc-estados",isDocsHomePage:!1,title:"APC Municipal - Estados de Solicitud",description:"Los APIs aqu\xed enumerados se utilizan para consultar los estados de solicitudes relacionados al APC Municipal.",source:"@site/docs/apc-estados.md",permalink:"/apis/docs/apc-estados",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/apc-estados.md",sidebar_label:"APC Municipal - Estados de Solicitud",sidebar:"someSidebar",previous:{title:"Informaci\xf3n de Propiedades",permalink:"/apis/docs/informacion-propiedades"},next:{title:"Recolecci\xf3n de Ingresos",permalink:"/apis/docs/recoleccion-ingresos"}},l=[{value:"Consultar Solicitudes",id:"consultar-solicitudes",children:[{value:"HTTP Request",id:"http-request",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Ejemplo",id:"ejemplo",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Los APIs aqu\xed enumerados se utilizan para consultar los estados de solicitudes relacionados al APC Municipal."),Object(o.b)("h2",{id:"consultar-solicitudes"},"Consultar Solicitudes"),Object(o.b)("p",null,"M\xe9todo para obtener la lista de solicitudes que incluyen el estado de cada solicitud."),Object(o.b)("h3",{id:"http-request"},"HTTP Request"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/apc-estados/consultar\n")),Object(o.b)("h3",{id:"query-parameters"},"Query Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoCFIA"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de CFIA")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroCuenta"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de cuenta")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cedula"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xe9dula")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroFinca"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de finca")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duplicado"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de duplicado (",Object(o.b)("strong",{parentName:"td"},"NOTA:")," Se utiliza en conjunto con ",Object(o.b)("inlineCode",{parentName:"td"},"numeroFinca"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"horizontalFilial"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicador de filial (",Object(o.b)("strong",{parentName:"td"},"NOTA:")," Se utiliza en conjunto con ",Object(o.b)("inlineCode",{parentName:"td"},"numeroFinca"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroDerecho"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de derecho (",Object(o.b)("strong",{parentName:"td"},"NOTA:")," Se utiliza en conjunto con ",Object(o.b)("inlineCode",{parentName:"td"},"numeroFinca"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroSolicitudPermiso"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de solicitud de permiso")))),Object(o.b)("h3",{id:"ejemplo"},"Ejemplo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/apc-estados/consultar?numeroSolicitudPermiso=1"\n')),Object(o.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'[\n    {\n        "cedula": "1234567890",\n        "codigoCFIA": null,\n        "duplicado": null,\n        "estadoPermiso": "01 - INGRESADO",\n        "fechaReciboPago": null,\n        "horizontalFilial": false,\n        "montoMultas": 0.0,\n        "montoPermisoTasado": 0.0,\n        "numeroCuenta": 10,\n        "numeroDerecho": "000",\n        "numeroFinca": "0081",\n        "numeroSolicitudPermiso": 1,\n        "observaciones": null\n    }\n]\n')))}b.isMDXComponent=!0},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,m=d["".concat(c,".").concat(p)]||d[p]||s[p]||o;return a?r.a.createElement(m,i(i({ref:t},u),{},{components:a})):r.a.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);