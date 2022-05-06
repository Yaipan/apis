(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return d}));var n=t(2),r=t(6),o=(t(0),t(124)),c={id:"yaipay-persona",title:"Yaipay (Persona)",sidebar_label:"Yaipay (Persona)"},l={id:"yaipay-persona",isDocsHomePage:!1,title:"Yaipay (Persona)",description:"Los APIs aqu\xed enumerados se utilizan para hacer consultas, pagos y reversiones por medio del web service de Yaipay, donde se maneja a nivel de persona.",source:"@site/docs/yaipay-persona.md",permalink:"/apis/docs/yaipay-persona",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/yaipay-persona.md",sidebar_label:"Yaipay (Persona)",sidebar:"someSidebar",previous:{title:"Recolecci\xf3n de Ingresos",permalink:"/apis/docs/recoleccion-ingresos"},next:{title:"Yaipay (Cuenta)",permalink:"/apis/docs/yaipay-cuenta"}},b=[{value:"C\xf3digos de Convenio",id:"c\xf3digos-de-convenio",children:[]},{value:"Obtener Persona",id:"obtener-persona",children:[{value:"HTTP Request",id:"http-request",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Ejemplo",id:"ejemplo",children:[]}]},{value:"Saldos Persona Resumen",id:"saldos-persona-resumen",children:[{value:"HTTP Request",id:"http-request-1",children:[]},{value:"Query Parameters",id:"query-parameters-1",children:[]},{value:"Ejemplo",id:"ejemplo-1",children:[]}]},{value:"Saldos Persona Resumen Detalle",id:"saldos-persona-resumen-detalle",children:[{value:"HTTP Request",id:"http-request-2",children:[]},{value:"Query Parameters",id:"query-parameters-2",children:[]},{value:"Ejemplo",id:"ejemplo-2",children:[]}]},{value:"Saldos",id:"saldos",children:[{value:"HTTP Request",id:"http-request-3",children:[]},{value:"Query Parameters",id:"query-parameters-3",children:[]},{value:"Ejemplo",id:"ejemplo-3",children:[]},{value:"Ejemplo (Convenio Arreglo Pago)",id:"ejemplo-convenio-arreglo-pago",children:[]}]},{value:"Ejecutar Pago",id:"ejecutar-pago",children:[{value:"HTTP Request",id:"http-request-4",children:[]},{value:"Body Parameters",id:"body-parameters",children:[]},{value:"Ejemplo",id:"ejemplo-4",children:[]},{value:"Ejemplo (Cuotas Arreglo Pago)",id:"ejemplo-cuotas-arreglo-pago",children:[]}]},{value:"Reversar Pago",id:"reversar-pago",children:[{value:"HTTP Request",id:"http-request-5",children:[]},{value:"Body Parameters",id:"body-parameters-1",children:[]},{value:"Ejemplo",id:"ejemplo-5",children:[]}]},{value:"Historial Pagos",id:"historial-pagos",children:[{value:"HTTP Request",id:"http-request-6",children:[]},{value:"Query Parameters",id:"query-parameters-4",children:[]},{value:"Ejemplo",id:"ejemplo-6",children:[]}]},{value:"Verificar Pago",id:"verificar-pago",children:[{value:"HTTP Request",id:"http-request-7",children:[]},{value:"Query Parameters",id:"query-parameters-5",children:[]},{value:"Ejemplo",id:"ejemplo-7",children:[]}]}],i={rightToc:b};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Los APIs aqu\xed enumerados se utilizan para hacer consultas, pagos y reversiones por medio del web service de Yaipay, donde se maneja a nivel de persona."),Object(o.b)("h2",{id:"c\xf3digos-de-convenio"},"C\xf3digos de Convenio"),Object(o.b)("p",null,"Este web service funciona por medio de c\xf3digos de convenio. Un convenio es una agrupaci\xf3n de deudas vencidas, al cobro o futuras asociadas a un contribuyente. Hay casi 20 convenios distintos para crear agrupaciones de distintos per\xedodos y distintos rubros."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Los posibles c\xf3digos de convenio se definen en el sistema, dentro de la ventana ",Object(o.b)("inlineCode",{parentName:"p"},"cuf.conven"),"."))),Object(o.b)("h2",{id:"obtener-persona"},"Obtener Persona"),Object(o.b)("p",null,"M\xe9todo para obtener informaci\xf3n de la persona asociada a la c\xe9dula dada."),Object(o.b)("h3",{id:"http-request"},"HTTP Request"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/yaipay/persona/get\n")),Object(o.b)("h3",{id:"query-parameters"},"Query Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cedula"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xe9dula de la persona")))),Object(o.b)("h3",{id:"ejemplo"},"Ejemplo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/yaipay/persona/get?cedula=12345678"\n')),Object(o.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "cedula": "12345678",\n    "nombre": "Julio Cascante",\n    "tipoIdentificacion": "F"\n}\n')),Object(o.b)("h2",{id:"saldos-persona-resumen"},"Saldos Persona Resumen"),Object(o.b)("p",null,"M\xe9todo para consultar los saldos de una persona de forma resumida por a\xf1o y rubro."),Object(o.b)("h3",{id:"http-request-1"},"HTTP Request"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/yaipay/persona/saldos-resumen\n")),Object(o.b)("h3",{id:"query-parameters-1"},"Query Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoConvenio"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de convenio")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cedula"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xe9dula de la persona")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroPagina"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de p\xe1gina")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"longitudPagina"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Longitud de p\xe1gina")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fechaLimite"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fecha l\xedmite hasta donde filtrar saldos (opcional)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"montoDisponible"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Monto disponible (s\xf3lo para convenio de pago por monto)")))),Object(o.b)("h3",{id:"ejemplo-1"},"Ejemplo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/yaipay/persona/saldos-resumen?codigoConvenio=001&&cedula=12345678&numeroPagina=1&longitudPagina=5"\n')),Object(o.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "cantidadPaginas": 3,\n    "longitudPagina": 5,\n    "numeroPagina": 1,\n    "data": [\n        {\n            "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS P\xdaBLICOS",\n            "idReferencia": 201817,\n            "idRubro": "17",\n            "montoTotal": 1476.57,\n            "year": 2018\n        },\n        {\n            "descripcion": "SERVICIO DE RECOLECCI\xd3N DE BASURA RESID",\n            "idReferencia": 201813,\n            "idRubro": "13",\n            "montoTotal": 16188.960000000001,\n            "year": 2018\n        },\n        {\n            "descripcion": "PARQUES ZONAS VERDES",\n            "idReferencia": 201824,\n            "idRubro": "24",\n            "montoTotal": 442.92999999999995,\n            "year": 2018\n        },\n        {\n            "descripcion": "Impuesto sobre Bienes Inmuebles",\n            "idReferencia": 201939,\n            "idRubro": "39",\n            "montoTotal": 3750.0,\n            "year": 2019\n        },\n        {\n            "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS P\xdaBLICOS",\n            "idReferencia": 201817,\n            "idRubro": "17",\n            "montoTotal": 1439.54,\n            "year": 2018\n        }\n    ]\n}\n')),Object(o.b)("h2",{id:"saldos-persona-resumen-detalle"},"Saldos Persona Resumen Detalle"),Object(o.b)("p",null,"M\xe9todo para consultar los saldos de una persona."),Object(o.b)("h3",{id:"http-request-2"},"HTTP Request"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/yaipay/persona/saldos-resumen-detalle\n")),Object(o.b)("h3",{id:"query-parameters-2"},"Query Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoConvenio"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de convenio")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cedula"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xe9dula de la persona")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"idRubro"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identificador de rubro")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"year"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A\xf1o")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroPagina"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de p\xe1gina")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"longitudPagina"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Longitud de p\xe1gina")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fechaLimite"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fecha l\xedmite hasta donde filtrar saldos (opcional)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"montoDisponible"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Monto disponible (s\xf3lo para convenio de pago por monto)")))),Object(o.b)("h3",{id:"ejemplo-2"},"Ejemplo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/yaipay/persona/saldos-resumen-detalle?codigoConvenio=001&&cedula=12345678&numeroPagina=1&longitudPagina=5"\n')),Object(o.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "cantidadPaginas": 5,\n    "longitudPagina": 5,\n    "numeroPagina": 1,\n    "data": [\n        {\n            "descripcion": "SERVICIO DE RECOLECCI\xd3N DE BASURA RESID",\n            "estado": "pendiente",\n            "fechaCorte": "30/06/2018",\n            "idRubro": "13",\n            "idSaldo": 20180213,\n            "monto": 8578.130000000001,\n            "periodo": "02",\n            "saldo": 7200.0,\n            "saldoInteres": 1378.13,\n            "tipoCobro": "SER",\n            "year": "2018"\n        },\n        {\n            "descripcion": "SERVICIO DE RECOLECCI\xd3N DE BASURA RESID",\n            "estado": "pendiente",\n            "fechaCorte": "30/09/2018",\n            "idRubro": "13",\n            "idSaldo": 20180313,\n            "monto": 8331.880000000001,\n            "periodo": "03",\n            "saldo": 7200.0,\n            "saldoInteres": 1131.88,\n            "tipoCobro": "SER",\n            "year": "2018"\n        },\n        {\n            "descripcion": "SERVICIO DE RECOLECCI\xd3N DE BASURA RESID",\n            "estado": "pendiente",\n            "fechaCorte": "31/12/2018",\n            "idRubro": "13",\n            "idSaldo": 20180413,\n            "monto": 8085.63,\n            "periodo": "04",\n            "saldo": 7200.0,\n            "saldoInteres": 885.63,\n            "tipoCobro": "SER",\n            "year": "2018"\n        },\n        {\n            "descripcion": "SERVICIO DE RECOLECCI\xd3N DE BASURA RESID",\n            "estado": "pendiente",\n            "fechaCorte": "31/03/2019",\n            "idRubro": "13",\n            "idSaldo": 20190113,\n            "monto": 8383.78,\n            "periodo": "01",\n            "saldo": 7700.0,\n            "saldoInteres": 683.78,\n            "tipoCobro": "SER",\n            "year": "2019"\n        },\n        {\n            "descripcion": "SERVICIO DE RECOLECCI\xd3N DE BASURA RESID",\n            "estado": "pendiente",\n            "fechaCorte": "30/06/2019",\n            "idRubro": "13",\n            "idSaldo": 20190213,\n            "monto": 8120.43,\n            "periodo": "02",\n            "saldo": 7700.0,\n            "saldoInteres": 420.43,\n            "tipoCobro": "SER",\n            "year": "2019"\n        }\n    ]\n}\n')),Object(o.b)("h2",{id:"saldos"},"Saldos"),Object(o.b)("p",null,"M\xe9todo para consultar los saldos de una persona para el convenio dado."),Object(o.b)("h3",{id:"http-request-3"},"HTTP Request"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/yaipay/persona/saldos\n")),Object(o.b)("h3",{id:"query-parameters-3"},"Query Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoConvenio"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de convenio")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cedula"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xe9dula de la persona")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fechaLimite"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fecha l\xedmite hasta donde filtrar saldos (opcional)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"montoDisponible"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Monto disponible (s\xf3lo para convenio de pago por monto)")))),Object(o.b)("h3",{id:"ejemplo-3"},"Ejemplo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/yaipay/persona/saldos?codigoConvenio=001&cedula=12345678"\n')),Object(o.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "cantidadPaginas": 1,\n    "longitudPagina": 10,\n    "numeroPagina": 1,\n    "data": [\n        {\n            "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS P\xdaBLICOS",\n            "estado": "pendiente",\n            "fechaCorte": "30/03/2019",\n            "idRubro": "17",\n            "idSaldo": 20190317,\n            "monto": 1032.84,\n            "periodo": "03",\n            "saldo": 1030.34,\n            "saldoInteres": 2.5,\n            "tipoCobro": "SER",\n            "year": "2019"\n        },\n        {\n            "descripcion": "SERVICIO DE RECOLECCI\xd3N DE BASURA RESID                     ",\n            "estado": "pendiente",\n            "fechaCorte": "30/01/2019",\n            "idRubro": "13",\n            "idSaldo": 20190313,\n            "monto": 7700,\n            "periodo": "03",\n            "saldo": 7700,\n            "saldoInteres": 0.0,\n            "tipoCobro": "SER",\n            "year": "2019"\n        },\n        {\n            "descripcion": "SERVICIO DE RECOLECCI\xd3N DE BASURA RESID",\n            "estado": "pendiente",\n            "fechaCorte": "31/12/2019",\n            "idRubro": "13",\n            "idSaldo": 20190413,\n            "monto": 5500,\n            "periodo": "04",\n            "saldo": 5500,\n            "saldoInteres": 0.0,\n            "tipoCobro": "SER",\n            "year": "2019"\n        }\n    ]\n}\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"En el caso del convenio de carrito de compras, la respuesta a obtener saldos de persona tambi\xe9n incluir\xeda los siguientes campos:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"auxiliarContable"),Object(o.b)("li",{parentName:"ul"},"numeroCuenta"),Object(o.b)("li",{parentName:"ul"},"tipoTransaccion"),Object(o.b)("li",{parentName:"ul"},"numeroDocumento")),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"NOTA:")," Estos valores son necesarios para hacer la llamada al m\xe9todo ejecutarPago bajo el convenio de carrito de compras."))),Object(o.b)("h3",{id:"ejemplo-convenio-arreglo-pago"},"Ejemplo (Convenio Arreglo Pago)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/yaipay/persona/saldos?codigoConvenio=<CODIGO_CONVENIO_ARREGLO_PAGO>&cedula=12345678"\n')),Object(o.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "cantidadPaginas": 1,\n    "longitudPagina": 10,\n    "numeroPagina": 1,\n    "data": [\n        {\n            "arregloPago": {\n                "cantidadCuotas": 2,\n                "cuotas": [\n                    {\n                        "fechaVencimiento": "18/04/2021",\n                        "monto": 12257.65,\n                        "numero": 1\n                    },\n                    {\n                        "fechaVencimiento": "18/05/2021",\n                        "monto": 12257.65,\n                        "numero": 1\n                    }\n                ],\n                "existe": true,\n                "montoTotal": 24515.3\n            }\n        }\n    ]\n}\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"En el caso del convenio de arreglo de pago, la respuesta a obtener saldos de persona tiene formato espec\xedfico que indica la cantidad de cuotas, monto total y el detalle de las cuotas como parte del atributo arregloPago de cada \xedtem en la lista. Esta estructura adem\xe1s indica si existe o no arreglo de pago."))),Object(o.b)("h2",{id:"ejecutar-pago"},"Ejecutar Pago"),Object(o.b)("p",null,"M\xe9todo para realizar la aplicaci\xf3n de un pago de una factura con el convenio dado."),Object(o.b)("h3",{id:"http-request-4"},"HTTP Request"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"POST https://webservice.ejemplo.com/v1/yaipay/persona/pagar\n")),Object(o.b)("h3",{id:"body-parameters"},"Body Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cedula"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identificaci\xf3n de la persona")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoConvenio"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de convenio")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoBanco"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de banco donde se realiz\xf3 el pago")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoAgencia"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Agencia del banco donde se realiz\xf3 el pago")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"periodo"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Periodo del recibo a pagar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"montoTotal"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Monto total")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroFactura"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de factura del recibo a pagar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"transacciones"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transacciones que se desean pagar ",Object(o.b)("inlineCode",{parentName:"td"},"(s\xf3lo aplica para el convenio de carrito de compras)"))))),Object(o.b)("p",null,"Las transacciones incluyen los siguientes atributos:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Atributo"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"auxiliarContable"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Auxiliar contable")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroCuenta"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de cuenta")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tipoTransaccion"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tipo de transacci\xf3n")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroDocumento"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de documento")))),Object(o.b)("h3",{id:"ejemplo-4"},"Ejemplo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="\n    -H "Content-Type: application/json"\n    "https://webservice.ejemplo.com/v1/yaipay/persona/pagar"\n    -d \'{"cedula": "",\n         "codigoConvenio": "",\n         "codigoBanco": "",\n         "codigoAgencia": "",\n         "periodo": "",\n         "montoTotal": 0.0,\n         "numeroFactura": 0.0,\n         "transacciones": [\n           {\n             "auxiliarContable": "CUF",\n             "numeroCuenta": 1,\n             "tipoTransaccion": "IBI",\n             "numeroDocumento": "123"\n           }\n         ]\n       }\'\n')),Object(o.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "cantidadPaginas": 1,\n    "longitudPagina": 10,\n    "numeroPagina": 1,\n    "data": [\n        {\n            "numeroFactura": 20190906191853,\n            "codigoRespuesta": 0,\n            "idRubro": "1",\n            "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS P\xdaBLICOS",\n            "montoPagado": 123.45\n        }\n    ]\n}\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"En el caso del convenio de carrito de compras, se debe incluir una lista de transacciones que incluyen los siguientes valores:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"auxiliarContable"),Object(o.b)("li",{parentName:"ul"},"numeroCuenta"),Object(o.b)("li",{parentName:"ul"},"tipoTransaccion"),Object(o.b)("li",{parentName:"ul"},"numeroDocumento")),Object(o.b)("p",{parentName:"div"},"Adem\xe1s, en el caso del convenio de carrito de compras, la respuesta s\xf3lo incluye el n\xfamero de factura y c\xf3digo de respuesta."))),Object(o.b)("h3",{id:"ejemplo-cuotas-arreglo-pago"},"Ejemplo (Cuotas Arreglo Pago)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="\n    -H "Content-Type: application/json"\n    "https://webservice.ejemplo.com/v1/yaipay/persona/pagar"\n    -d \'{"cedula": "",\n         "codigoConvenio": "",\n         "codigoBanco": "",\n         "codigoAgencia": "",\n         "periodo": "",\n         "montoTotal": 0.0,\n         "numeroFactura": 0.0,\n         "cuotas": [\n           {\n             "numeroFinanciamiento": 41,\n             "numero": 2,\n             "monto": 1922.12\n           }\n         ]\n       }\'\n')),Object(o.b)("h2",{id:"reversar-pago"},"Reversar Pago"),Object(o.b)("p",null,"M\xe9todo para realizar una anulaci\xf3n de un pago."),Object(o.b)("h3",{id:"http-request-5"},"HTTP Request"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"POST https://webservice.ejemplo.com/v1/yaipay/persona/reversar\n")),Object(o.b)("h3",{id:"body-parameters-1"},"Body Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cedula"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identificaci\xf3n de la persona")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoConvenio"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de convenio")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoBanco"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo de banco donde se realiz\xf3 el pago")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"codigoAgencia"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Agencia del banco donde se realiz\xf3 el pago")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"periodo"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Periodo del recibo a pagar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroFactura"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de factura del recibo a pagar")))),Object(o.b)("h3",{id:"ejemplo-5"},"Ejemplo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="\n    -H "Content-Type: application/json"\n    "https://webservice.ejemplo.com/v1/yaipay/persona/reversar"\n    -d \'{"cedula": "",\n         "codigoConvenio": "",\n         "codigoBanco": 0,\n         "codigoAgencia": "",\n         "periodo": "",\n         "numeroFactura": 0.0\n       }\'\n')),Object(o.b)("p",null,"Este m\xe9todo devuelve un c\xf3digo HTTP que indica si se logr\xf3 reversar el pago."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"200 (pago reversado satisfactoriamente)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"Cualquier c\xf3digo mayor a 400 indicar\xeda que no se logr\xf3 reversar\n")),Object(o.b)("h2",{id:"historial-pagos"},"Historial Pagos"),Object(o.b)("p",null,"M\xe9todo para consultar el historial de pagos de una persona, filtrado por las fechas de inicio/final."),Object(o.b)("h3",{id:"http-request-6"},"HTTP Request"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/yaipay/persona/historial\n")),Object(o.b)("h3",{id:"query-parameters-4"},"Query Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cedula"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identificaci\xf3n de la persona")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fechaInicio"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fecha inicio")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fechaFinal"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fecha final")))),Object(o.b)("h3",{id:"ejemplo-6"},"Ejemplo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/yaipay/persona/historial?cedula=12345678&fechaInicio=01/01/2019&fechaFinal=01/03/2019"\n')),Object(o.b)("p",null,"Este m\xe9todo devuelve JSON estructurado de la siguiente manera:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "cantidadPaginas": 1,\n    "longitudPagina": 10,\n    "numeroPagina": 1,\n    "data": [\n        {\n            "numeroTransaccion": 78219,\n            "fechaPago": "15/02/2019",\n            "montoPago": 23749.58,\n            "cuentaOrigen": "Cuenta Ahorros"\n        }\n    ]\n}\n')),Object(o.b)("h2",{id:"verificar-pago"},"Verificar Pago"),Object(o.b)("p",null,"M\xe9todo para verificar existencia del pago de una persona."),Object(o.b)("h3",{id:"http-request-7"},"HTTP Request"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"GET https://webservice.ejemplo.com/v1/yaipay/persona/verificar\n")),Object(o.b)("h3",{id:"query-parameters-5"},"Query Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numeroFactura"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero de factura")))),Object(o.b)("h3",{id:"ejemplo-7"},"Ejemplo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/yaipay/persona/verificar?numeroFactura=20190906191853"\n')),Object(o.b)("p",null,"Este m\xe9todo devuelve un c\xf3digo HTTP que indica si la factura existe o no."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"200 (la factura existe)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"404 (no se encontr\xf3 la factura)\n")))}d.isMDXComponent=!0},124:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),d=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=d(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,u=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return t?r.a.createElement(u,l(l({ref:a},i),{},{components:t})):r.a.createElement(u,l({ref:a},i))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=m;var l={};for(var b in a)hasOwnProperty.call(a,b)&&(l[b]=a[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);