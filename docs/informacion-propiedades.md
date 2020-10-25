---
id: informacion-propiedades
title: Información de Propiedades
sidebar_label: Información de Propiedades
---

Los APIs aquí enumerados se utilizan para consultar y actualizar información de propiedades.

## Códigos Internos

El webservice utiliza códigos internos para algunos de los campos del webservice, aquí se describen cuales campos son y dónde obtener la lista de valores válidos:

| Campo | Ventana Consulta |
| ---- | ---- |
| barrio | cuf.barrio |
| captacionSuelo | cuf.caussu |
| hidrologia | cuf.cathid |
| topografia | cuf.barrio |
| usoActual | cuf.usopro |
| viaAcceso | cuf.tipvia |
| zonaHomogenea | cuf.zonhom |
| zonaPlanRegulador | cuf.zonpre |

## Consultar Propiedad

Método encargado de obtener información de una propiedad asociada al identificador catastral dado.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/informacion-propiedades/get?identificadorCatastral=<IDENTIFICADOR>
```

### Query Parameters

| Parámetro              | Descripción             |
| ---------------------- | ----------------------- |
| identificadorCatastral | Identificador catastral |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/informacion-propiedades/get?identificadorCatastral=12345678"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "areaCatastrada": 0.0,
        "areaConstruida": 0.0,
        "areaRegistrada": 0.0,
        "captacionSuelo": "0",
        "cedula": "123456789",
        "compania": "COMPANIA",
        "fechaUltimaDeclaracion": "26/10/2015",
        "fechaUltimoAvaluo": null,
        "fechaUltimoPermisoConstruccion": null,
        "fincaMatriz": null,
        "fincaValorable": true,
        "frenteCuatro": 0.0,
        "frenteDos": 0.0,
        "frenteTotal": 0.0,
        "frenteTres": 0.0,
        "frenteUno": 0.0,
        "hidrologia": "0",
        "identificadorCatastral": "12345678",
        "nivelPendiente": 0.0,
        "nivelPropiedad": null,
        "nombreBarrio": null,
        "nombrePersona": "NOMBRE APELLIDO",
        "numeroCuenta": 1,
        "numeroPersona": 1,
        "numeroRepetido": null,
        "numeroUltimoPermisoConstruccion": null,
        "porcentajeAreaComun": null,
        "porcentajeCondominio": 0.0,
        "porcentajeDominio": 0.0,
        "porcentajePosesion": 0.0,
        "regularidad": null,
        "servicioAcera": false,
        "servicioAguaPotable": false,
        "servicioAlcantarilladoPluvial": false,
        "servicioAlcantarilladoSanitario": false,
        "servicioAlumbradoPublico": false,
        "servicioCaneria": false,
        "servicioCordon": false,
        "servicioElectrico": false,
        "servicioTelefonico": false,
        "tipoCondominio": null,
        "tipoExoneracion": null,
        "topografia": "PLA",
        "usoActual": null,
        "usoCondominio": null,
        "viaAcceso": null,
        "zonaHomogenea": "507-02-R02/U02",
        "zonaPlanRegulador": null
    }
]
```

:::important

Ver la sección **Códigos Internos** para saber de dónde obtener el detalle de un campo que utiliza un código interno.

:::

## Actualizar Propiedad

Método encargado de reconectar un hidrómetro identificado por el número de medidor dado.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/informacion-propiedades/set
```

### Body Parameters

| Parámetro | Descripción |
| --------- | ----------- |
| usuario | Usuario que está actualizando los datos (Obligatorio) |
| identificadorCatastral | Identificador catastral (Obligatorio) |
| nombreBarrio | Código de barrio |
| numeroRepetido | Cuenta repetida |
| frenteUno | Frente uno |
| frenteDos | Frente dos |
| frenteTres | Frente tres |
| frenteCuatro | Frente cuatro |
| frenteTotal | Frente total |
| servicioCordon | Existe cordón |
| servicioAcera | Existe aceras |
| servicioAlumbradoPublico | Servicio alumbrado público |
| servicioTelefonico | Servicio telefónico |
| servicioElectrico | Servicio eléctrico  |
| servicioAguaPotable | Servicio de agua potable |
| servicioAlcantarilladoSanitario | Servicio de alcantarillado sanitario |
| servicioAlcantarilladoPluvial | Servicio de alcantarilla pluvial |
| servicioCaneria | Servicio de cañería |
| nivelPropiedad | Nivel con la vía |
| viaAcceso | Tipo de vía de acceso |
| topografia | Topografía de la finca |
| zonaPlanRegulador | Zona de plan regulador |
| zonaHomogenea | Zona homogénea |
| hidrologia | Hidrología de la finca |
| captacionSuelo | Tipo de suelo |
| nivelPendiente | Niven de pendiente de la finca |
| areaRegistrada | Área según registro |
| areaCatastrada | Área según plano catastro |
| areaConstruida | Área de las contrucciones |
| regularidad | Regularidad de la finca |
| usoActual | Uso actual de la finca |
| fincaValorable | Finca admite valoraciones |

### Ejemplo

```javascript
curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/informacion-propiedades/set" -d '{"usuario":"us_18018", "identificadorCatastral": "12345678","servicioAcera":true}'
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "areaCatastrada": 0.0,
        "areaConstruida": 0.0,
        "areaRegistrada": 0.0,
        "captacionSuelo": "0",
        "compania": "COMPANIA",
        "fincaValorable": true,
        "frenteCuatro": 0.0,
        "frenteDos": 0.0,
        "frenteTotal": 0.0,
        "frenteTres": 0.0,
        "frenteUno": 0.0,
        "hidrologia": "0",
        "identificadorCatastral": "12345678",
        "nivelPendiente": 0.0,
        "nivelPropiedad": null,
        "nombreBarrio": null,
        "numeroRepetido": null,
        "regularidad": null,
        "servicioAcera": true,
        "servicioAguaPotable": false,
        "servicioAlcantarilladoPluvial": false,
        "servicioAlcantarilladoSanitario": false,
        "servicioAlumbradoPublico": false,
        "servicioCaneria": false,
        "servicioCordon": false,
        "servicioElectrico": false,
        "servicioTelefonico": false,
        "topografia": "PLA",
        "usoActual": null,
        "viaAcceso": null,
        "zonaHomogenea": "507-02-R02/U02",
        "zonaPlanRegulador": null
    }
]
```

:::important

Ver la sección **Códigos Internos** para saber cómo se valida el valor de campos que utilizan código interno.

:::
