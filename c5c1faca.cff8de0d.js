(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(9),l=(a(0),a(157)),c={id:"informacion-propiedades",title:"Informaci\xf3n de Propiedades",sidebar_label:"Informaci\xf3n de Propiedades"},i={id:"informacion-propiedades",isDocsHomePage:!1,title:"Informaci\xf3n de Propiedades",description:"Los APIs aqu\xed enumerados se utilizan para consultar y actualizar informaci\xf3n de propiedades.",source:"@site/docs/informacion-propiedades.md",permalink:"/apis/docs/informacion-propiedades",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/informacion-propiedades.md",sidebar_label:"Informaci\xf3n de Propiedades",sidebar:"someSidebar",previous:{title:"Estado de Cuenta",permalink:"/apis/docs/estado-cuenta"}},b=[{value:"C\xf3digos Internos",id:"c\xf3digos-internos",children:[]},{value:"Consultar Propiedad",id:"consultar-propiedad",children:[{value:"HTTP Request",id:"http-request",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Ejemplo",id:"ejemplo",children:[]}]},{value:"Actualizar Propiedad",id:"actualizar-propiedad",children:[{value:"HTTP Request",id:"http-request-1",children:[]},{value:"Body Parameters",id:"body-parameters",children:[]},{value:"Ejemplo",id:"ejemplo-1",children:[]}]}],o={rightToc:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Los APIs aqu\xed enumerados se utilizan para consultar y actualizar informaci\xf3n de propiedades."),Object(l.b)("h2",{id:"c\xf3digos-internos"},"C\xf3digos Internos"),Object(l.b)("p",null,"El webservice utiliza c\xf3digos internos para algunos de los campos del webservice, aqu\xed se describen cuales campos son y d\xf3nde obtener la lista de valores v\xe1lidos:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Campo"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Ventana Consulta"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"barrio"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cuf.barrio")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"captacionSuelo"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cuf.caussu")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hidrologia"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cuf.cathid")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"topografia"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cuf.barrio")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"usoActual"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cuf.usopro")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"viaAcceso"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cuf.tipvia")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zonaHomogenea"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cuf.zonhom")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zonaPlanRegulador"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cuf.zonpre")))),Object(l.b)("h2",{id:"consultar-propiedad"},"Consultar Propiedad"),Object(l.b)("p",null,"M\xe9todo encargado de obtener informaci\xf3n de una propiedad asociada al identificador catastral dado."),Object(l.b)("h3",{id:"http-request"},"HTTP Request"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/informacion-propiedades/get?identificadorCatastral=<IDENTIFICADOR>\n")),Object(l.b)("h3",{id:"query-parameters"},"Query Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"identificadorCatastral"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identificador catastral")))),Object(l.b)("h3",{id:"ejemplo"},"Ejemplo"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/informacion-propiedades/get?identificadorCatastral=12345678"\n')),Object(l.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'[\n    {\n        "areaCatastrada": 0.0,\n        "areaConstruida": 0.0,\n        "areaRegistrada": 0.0,\n        "captacionSuelo": "0",\n        "cedula": "123456789",\n        "compania": "COMPANIA",\n        "fechaUltimaDeclaracion": "26/10/2015",\n        "fechaUltimoAvaluo": null,\n        "fechaUltimoPermisoConstruccion": null,\n        "fincaMatriz": null,\n        "fincaValorable": true,\n        "frenteCuatro": 0.0,\n        "frenteDos": 0.0,\n        "frenteTotal": 0.0,\n        "frenteTres": 0.0,\n        "frenteUno": 0.0,\n        "hidrologia": "0",\n        "identificadorCatastral": "12345678",\n        "nivelPendiente": 0.0,\n        "nivelPropiedad": null,\n        "nombreBarrio": null,\n        "nombrePersona": "NOMBRE APELLIDO",\n        "numeroCuenta": 1,\n        "numeroPersona": 1,\n        "numeroRepetido": null,\n        "numeroUltimoPermisoConstruccion": null,\n        "porcentajeAreaComun": null,\n        "porcentajeCondominio": 0.0,\n        "porcentajeDominio": 0.0,\n        "porcentajePosesion": 0.0,\n        "regularidad": null,\n        "servicioAcera": false,\n        "servicioAguaPotable": false,\n        "servicioAlcantarilladoPluvial": false,\n        "servicioAlcantarilladoSanitario": false,\n        "servicioAlumbradoPublico": false,\n        "servicioCaneria": false,\n        "servicioCordon": false,\n        "servicioElectrico": false,\n        "servicioTelefonico": false,\n        "tipoCondominio": null,\n        "tipoExoneracion": null,\n        "topografia": "PLA",\n        "usoActual": null,\n        "usoCondominio": null,\n        "viaAcceso": null,\n        "zonaHomogenea": "507-02-R02/U02",\n        "zonaPlanRegulador": null\n    }\n]\n')),Object(l.b)("div",{className:"admonition admonition-important alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Ver la secci\xf3n ",Object(l.b)("strong",{parentName:"p"},"C\xf3digos Internos")," para saber de d\xf3nde obtener el detalle de un campo que utiliza un c\xf3digo interno."))),Object(l.b)("h2",{id:"actualizar-propiedad"},"Actualizar Propiedad"),Object(l.b)("p",null,"M\xe9todo encargado de reconectar un hidr\xf3metro identificado por el n\xfamero de medidor dado."),Object(l.b)("h3",{id:"http-request-1"},"HTTP Request"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/informacion-propiedades/set\n")),Object(l.b)("h3",{id:"body-parameters"},"Body Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"usuario"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Usuario que est\xe1 actualizando los datos (Obligatorio)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"identificadorCatastral"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identificador catastral (Obligatorio)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nombreBarrio"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de barrio")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroRepetido"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cuenta repetida")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"frenteUno"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Frente uno")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"frenteDos"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Frente dos")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"frenteTres"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Frente tres")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"frenteCuatro"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Frente cuatro")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"frenteTotal"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Frente total")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"servicioCordon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Existe cord\xf3n")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"servicioAcera"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Existe aceras")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"servicioAlumbradoPublico"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Servicio alumbrado p\xfablico")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"servicioTelefonico"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Servicio telef\xf3nico")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"servicioElectrico"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Servicio el\xe9ctrico")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"servicioAguaPotable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Servicio de agua potable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"servicioAlcantarilladoSanitario"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Servicio de alcantarillado sanitario")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"servicioAlcantarilladoPluvial"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Servicio de alcantarilla pluvial")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"servicioCaneria"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Servicio de ca\xf1er\xeda")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nivelPropiedad"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nivel con la v\xeda")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"viaAcceso"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tipo de v\xeda de acceso")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"topografia"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Topograf\xeda de la finca")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zonaPlanRegulador"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Zona de plan regulador")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zonaHomogenea"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Zona homog\xe9nea")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hidrologia"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hidrolog\xeda de la finca")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"captacionSuelo"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tipo de suelo")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nivelPendiente"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Niven de pendiente de la finca")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"areaRegistrada"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\xc1rea seg\xfan registro")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"areaCatastrada"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\xc1rea seg\xfan plano catastro")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"areaConstruida"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\xc1rea de las contrucciones")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"regularidad"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Regularidad de la finca")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"usoActual"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Uso actual de la finca")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fincaValorable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Finca admite valoraciones")))),Object(l.b)("h3",{id:"ejemplo-1"},"Ejemplo"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/informacion-propiedades/set" -d \'{"usuario":"us_18018", "identificadorCatastral": "12345678","servicioAcera":true}\'\n')),Object(l.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'[\n    {\n        "areaCatastrada": 0.0,\n        "areaConstruida": 0.0,\n        "areaRegistrada": 0.0,\n        "captacionSuelo": "0",\n        "compania": "COMPANIA",\n        "fincaValorable": true,\n        "frenteCuatro": 0.0,\n        "frenteDos": 0.0,\n        "frenteTotal": 0.0,\n        "frenteTres": 0.0,\n        "frenteUno": 0.0,\n        "hidrologia": "0",\n        "identificadorCatastral": "12345678",\n        "nivelPendiente": 0.0,\n        "nivelPropiedad": null,\n        "nombreBarrio": null,\n        "numeroRepetido": null,\n        "regularidad": null,\n        "servicioAcera": true,\n        "servicioAguaPotable": false,\n        "servicioAlcantarilladoPluvial": false,\n        "servicioAlcantarilladoSanitario": false,\n        "servicioAlumbradoPublico": false,\n        "servicioCaneria": false,\n        "servicioCordon": false,\n        "servicioElectrico": false,\n        "servicioTelefonico": false,\n        "topografia": "PLA",\n        "usoActual": null,\n        "viaAcceso": null,\n        "zonaHomogenea": "507-02-R02/U02",\n        "zonaPlanRegulador": null\n    }\n]\n')),Object(l.b)("div",{className:"admonition admonition-important alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Ver la secci\xf3n ",Object(l.b)("strong",{parentName:"p"},"C\xf3digos Internos")," para saber c\xf3mo se valida el valor de campos que utilizan c\xf3digo interno."))))}d.isMDXComponent=!0},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=d(a),j=n,O=p["".concat(c,".").concat(j)]||p[j]||u[j]||l;return a?r.a.createElement(O,i(i({ref:t},o),{},{components:a})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=j;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);