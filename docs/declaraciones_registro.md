---
id: registro-declaraciones
title: Registro de Declaraciones de Bienes Inmuebles
sidebar_label: Registro de Declaraciones de Bienes Inmuebles
---

Los APIs aquí enumerados se utilizan para realizar registro de una declaración de bienes inmuebles en línea.

## Registrar Declaración
Este método registra la información proporcionada por medio de una declaración en línea. En la declaración en línea, se debe incluir toda la información sobre al propietario, propiedad y construcciones.

:::important

Este método únicamente realiza el registro de la declaración en el sistema para que posteriormente los usuarios responsables mediante la ventana de declaraciones puedan continuar el proceso. Como parte del registro de la declaración no se realizan ningún proceso de calculo.

:::

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/declaraciones/registrarDeclaracion
```

### Body Parameters

|Parámetro                                      |Descripción|
|-----------------------------------------------|--|
|fechaDeclaracion                               |Fecha de la declaración|
|numeroPropiedad                                |Número de la propiedad|
|numeroFinca                                    |Número de la finca|
|numeroDerecho                                  |Número de derecho|
|codigoDuplicado                                |Código de duplicado|
|indicadorFilial                                |Sufijo Identificador de Condominios|
|porcentajePosesion                             |Porcentaje de poseción|
|porcentajeCondominio                           |Porcentaje en condominio|
|porcentajeDominio                              |Porcentaje de dominio|
|porcentajeAreaComun                            |Porcentaje de área común|
|numerPlanoCatastrado                           |Número de plano catastrado|
|tomo                                           |Tomo|
|folio                                          |Folio|
|asiento                                        |Asiento|
|numero                                         |Número|
|provincia                                      |Código de provincia|
|canton                                         |Código del cantón|
|distrito                                       |Código del distrito|
|cedula                                         |Cédula de identidad del propietario|
|primerNombrePersona                            |Primer nombre del propietario|
|segundoNombrePersona                           |Segundo nombre del propietario|
|primerApellidoPersona                          |Primero apellido del propietario|
|segundoApellidoPersona                         |Segundo apellido del propietario|
|telefonoOficina                                |Número de teléfono de la oficina|
|telefonoResidencia                             |Número de teléfono de la recidencia|
|direccionPersona                               |Dirección del propietario|
|fax                                            |Número de facsimil del propietario|
|correoElectronico                              |Dirección de correo electrónico del propieratio|
|correoElectronicoAlterno                       |Dirección de correo electrónico alterno del propieratio|
|primerNombreRepresentanteLegal                 |Primer nombre del representante legal|
|segundoNombreRepresentanteLegal                |Segundo nombre del representante legal|
|primerApellidoRepresentanteLegal               |Primer apellido del representante legal|
|segundoApellidoRepresentanteLegal              |Segundo apellido del representante legal|
|correoElectronicoRepresentanteLegal            |Dirección de correo electrónico del representante legal|
|provinciaRepresentanteLegal                    |Código de provincia del representante legal|
|cantonRepresentanteLegal                       |Código de cantón del representante legal|
|distritoRepresentanteLegal                     |Código de distrito del representante legal|
|apartadoRepresentanteLegal                     |Apartado postal del representante legal|
|cedulaRepresentanteLegal                       |Cédula del representante legal|
|telefonoHabitacionRepresentanteLegal           |Número de teléfono de habitación del representante legan|
|telefonoOficinaRepresentanteLegal              |Número de teléfono de la oficina del representante legan|
|codigoZonaHomogenea                            |Código de la zona homogenea|
|codigoUbicacionManzana                         |Código de ubicación de la manzana|
|totalFrente                                    |Metros total del frente de la propiedad|
|areaRegistrada                                 |Área registrada en metros cuadrados|
|tieneAlumbradoPublico                          |Posee alumbrado público|
|tieneCaneria                                   |Posee cañería|
|tieneServicioElectricidad                      |Posee servicio de electricidad|
|tieneServicioTelefonico                        |Posee servicio telefónico|
|tieneAceras                                    |Posee aceras|
|tieneCordon                                    |Posee cordón|
|tieneCano                                      |Posee caño|
|codigoServiciosUno                             |Código de servicios uno|
|codigoServiciosDos                             |Código de servicios dos|
|tipoUsoActual                                  |Tipo de uso actual de la propiedad|
|valorMetroCuadrado                             |Valor del metro cuadrado|
|valorTotalTerreno                              |Valor total declarado de terreno|
|areaComunCondominio                            |Área común en metros cuadrados|
|areaPrivadaCondominio                          |Área privada en metros cuadrados|
|areaTotalCondominio                            |Área total en condominio|
|valorConstruccionAreaComunCondominio           |Valor de construcciones del área común en condominio|
|valorConstruccionAreaPrivadoCondominio         |Valor de construcciones del área privada en condominio|
|valorTotalConstruccionAreaCondominio           |Valor total de construcciones del área en condominio|
|sector                                         |Sector|
|predio                                         |Predio|
|lote                                           |Lote|
|numeroMapa                                     |Numero de mapa|
|parcela                                        |Parcela|
|segregacion                                    |Segregación|
|numeroPerito                                   |Numero de perito|
|observacionesDeclaracion                       |Observaciones de la declaración|
|factorUsoSuelo                                 |Factor de uso de suelo|
|factorHidrologia                               |Factor de hidrología|
|factorRegularidad                              |Factor de regularidad|
|factorTipoViaPublica                           |Factor de tipo de vía|
|factorPendiente                                |Factor de pendiente|
|factorNivelVia                                 |Favor de nivel de vía|
|construccionesDeclaracion                      |Construcción de la declaración|

Las construccionesDeclaracion incluyen  los siguientes atributos:

| Atributo | Descripción |
| -- | --|
|consecutivoConstruccion              |Número de la construcción|
|tipoConstruccion                     |Códito de tipo de construcción|
|detalleConstruccion                  |Detalle de la construcción|
|areaConstruccion                     |Área en metos cuadrados de la construcción|
|cantidadPlantas                      |Cantida de plantas de la construcción|
|codigoTipologia                      |Código de tipología|
|codigoTipoTecho                      |Código de tipo de techo|
|codigoTipoPiso                       |Código de tipo de piso|
|codigoTipoPared                      |Código de tipo de pared|
|codigoTipoCielo                      |Código de tipo de cielo|
|codigoTipologiaTorreComunicacion     |Código de tipolidía de torres de comunicación|
|yearConstruccion                     |Años de la construcción|
|edadConstruccion                     |Edad de la construcción|
|codigoEstadoConstruccion             |Código de estado de la construcción|
|cantidadAposentos                    |Cantidad de aposentos|
|cantidadBanos                        |Cantidad de Baños|
|valorDeclaradoConstruccion           |Valor declarado de la construcción|

### Ejemplo

```javascript
curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="
    -H "Content-Type: application/json"
    "https://webservice.ejemplo.com/v1/declaraciones/registrarDeclaracion"
    -d '{"fechaDeclaracion": 1640995200,
         "numeroPropiedad": 1,
         "numeroFinca": "",
         "numeroDerecho": "",
         "codigoDuplicado": "",
         "indicadorFilial": "",
         "porcentajePosesion": 0.0,
         "porcentajeCondominio": 0.0,
         "porcentajeDominio": 0.0,
         "porcentajeAreaComun": 0.0,
         "numerPlanoCatastrado": "",
         "tomo": "",
         "folio": "",
         "asiento": "",
         "numero": "",
         "provincia": "",
         "canton": "",
         "distrito": "",
         "cedula": "",
         "primerNombrePersona": "",
         "segundoNombrePersona": "",
         "primerApellidoPersona": "",
         "segundoApellidoPersona": "",
         "telefonoOficina": "",
         "telefonoResidencia": "",
         "direccionPersona": "",
         "fax": "",
         "correoElectronico": "",
         "correoElectronicoAlterno": "",
         "primerNombreRepresentanteLegal": "",
         "segundoNombreRepresentanteLegal": "",
         "primerApellidoRepresentanteLegal": "",
         "segundoApellidoRepresentanteLegal": "",
         "correoElectronicoRepresentanteLegal": "",
         "provinciaRepresentanteLegal": "",
         "cantonRepresentanteLegal": "",
         "distritoRepresentanteLegal": "",
         "apartadoRepresentanteLegal": "",
         "cedulaRepresentanteLegal": "",
         "telefonoHabitacionRepresentanteLegal": "",
         "telefonoOficinaRepresentanteLegal": "",
         "codigoZonaHomogenea": "",
         "codigoUbicacionManzana": "",
         "totalFrente": 0.0,
         "areaRegistrada": 0.0,
         "tieneAlumbradoPublico": false,
         "tieneCaneria": false,
         "tieneServicioElectricidad": false,
         "tieneServicioTelefonico": false,
         "tieneAceras": false,
         "tieneCordon": false,
         "tieneCano": false,
         "codigoServiciosUno": "",
         "codigoServiciosDos": "",
         "tipoUsoActual": "",
         "valorMetroCuadrado": 0.0,
         "valorTotalTerreno": 0.0,
         "areaComunCondominio": 0.0,
         "areaPrivadaCondominio": 0.0,
         "areaTotalCondominio": 0.0,
         "valorConstruccionAreaComunCondominio": 0.0,
         "valorConstruccionAreaPrivadoCondominio": 0.0,
         "valorTotalConstruccionAreaCondominio": 0.0,
         "sector": "",
         "predio": "",
         "lote": "",
         "numeroMapa": "",
         "parcela": "",
         "segregacion": "",
         "numeroPerito": 1,
         "observacionesDeclaracion": "",
         "factorUsoSuelo": "",
         "factorHidrologia": "",
         "factorRegularidad": 0.0,
         "factorTipoViaPublica": "',
         "factorPendiente": 0.0,
         "factorNivelVia": 0.0,
         "construccionesDeclaracion": [
           {
             "consecutivoConstruccion": 0,
             "tipoConstruccion": "",
             "detalleConstruccion": "",
             "areaConstruccion": 0.0,
             "cantidadPlantas": 0,
             "codigoTipologia": "",
             "codigoTipoTecho": "",
             "codigoTipoPiso": "",
             "codigoTipoPared": "",
             "codigoTipoCielo": "",
             "coditoTipologiaTorreComunicacion": "",
             "yearConstruccion": 0,
             "edadConstruccion": 0,
             "codigoEstadoConstruccion": "",
             "cantidadAposentos": 0,
             "cantidadBanos": 0.0,
             "valorDeclaradoConstruccion": 0.0
           }
         ]
       }'
```

Este método devuelvo JSON estructurado con el número de la declaración, número de documento del año además de los valores declarados de terreno y construcción. También devuelve un código HTTP `200 OK` si se guardó correctamente:

```javascript
{
    "numeroDeclaracion": 4368,
    "numeroDocumentoYear": "1-2022",
    "valorTerrenoDeclarado": 750000,
    "valorConstruccionDeclarado": 2000000
}
```
