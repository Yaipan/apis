---
id: declaraciones
title: Declaraciones de Bienes Inmuebles
sidebar_label: Declaraciones de Bienes Inmuebles
---

Los APIs aquí enumerados se utilizan para realizar una declaración de bienes inmuebles en línea. El método `obtenerFinca` se utiliza para consultar la información de las fincas y las ones asociadas.

Para registrar la declaración de bienes inmuebles se utiliza el método `guardarDeclaracion`. Después de haber registrado la declaración, la Municipalidad hace sus cálculos y puede ajustar los valores antes de generar el movimiento pendiente a la finca declarada para su posterior aplicación para la entrada en vigencia en el siguiente año. Se puede consultar el valor declarado de la finca por medio del método `obtenerValorDeclarado`.

:::tip

Hay que poner atención a la diferencia entre el número de finca y el número de cuenta - campos que se utilizan para interactuar con los métodos descritos aquí.

El `número de finca` es un valor funcional que tiene un código integrado dentro de una hilera.

El `número de cuenta` es un número generado internamente por el sistema que se utiliza para garantizar unicidad.

Cualquier llamada para guardar datos nuevos deberá utilizar el número de cuenta. Cualquier llamada para consultar datos deberá utilizar el número de cuenta, número de finca o el número de cédula.

:::

## Obtener Finca

Este método obtiene la información sobre una o varias fincas. Para la búsqueda, se debe proporcionar el número de cuenta, el número de finca o el número de cédula. Si se utiliza una cédula, esta puede ser una cédula física, jurídica o DIMEX (entre otras). Las cédulas son validadas de manera flexible para tomar en cuenta posibles diferencias entre el dato en la base de datos y los estándares que usa Hacienda, por ello se valida que sea un valor con máximo 12 caracteres, todos numéricos (sin guiones). El objeto JSON que se devuelve puede contener varias fincas.

Cada finca puede tener cero, una o más ones. El objeto JSON que se devuelve tiene un arreglo con todas las construcciones asociadas a la finca.

:::tip

 El valor de `declaracionEnProceso` indica si una finca tiene una a más declaraciones en proceso, lo cual no permitiría que se guarde una declaración nueva.

 El valor de `declaracionIngresadaEnLinea` indica si se ha guardado una declaración para la finca con el webservice, lo cual no permitiría que se guarde una declaración nueva.

 Además se devuelve la fecha de último avalúo y última declaración. No se debería intentar guardar una declaración nueva si la diferencia en años de la última fecha (avalúo/declaración) con el año actual no excede la cantidad de años definida en vigencia para cada tipo de fecha (yearsVigenciaAvaluo/yearsVigenciaDeclaracion).

:::

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/declaraciones/obtenerFinca
```

### Query Parameters

| Parámetro     |     Descripción      |
| ------------- | :------------------: |
| numeroCuenta  | El número de cuenta  |
| numeroFinca   | El número de finca   |
| cedula        | El número de cédula  |

:::tip

Solo se necesita uno de los parámetros.

:::

### Ejemplo

```javascript
# por número de cuenta
curl -XGET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/declaraciones/obtenerFinca?numeroCuenta=1273"

# por número de finca
curl -XGET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/declaraciones/obtenerFinca?numeroFinca=234567"

# por cédula
curl -XGET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/declaraciones/obtenerFinca?cedula=108780675"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "apartado": "",
        "apartadoRepresentanteLegal": "",
        "areaRegis": 100.0,
        "canton": "Escazú",
        "cantonRepresentanteLegal": "Escazú",
        "cedula": "000000000",
        "cedulaRepresentanteLegal": "000000000";
        "codigoDuplicado": "",
        "construcciones": [
            {
                "areaConstruccion": 220.0,
                "cielo": "BA",
                "detalleConstruccion": "prueba",
                "edad": 0.0,
                "estado": "O",
                "numeroConstruccion": 14,
                "numeroCuenta": 1273,
                "numeroPlantas": 1,
                "pared": "CONC",
                "piso": "ASFA",
                "techo": "HGA",
                "tipoConstruccion": "COM",
                "tipologia": "AP01",
                "vidaUtil": 50.0,
                "year": 2018
            }
        ],
        "correoRepresentanteLegal": "representante@example.com",
        "correoElectronico": "correo@example.com",
        "correoElectronicoAlterno": "alterno@example.com",
        "declaracionEnProceso": true,
        "declaracionIngresadaEnLinea": true,
        "direccion1": "LA PRIMERA CASA A MANO IZQ",
        "direccionPropiedad": "KKKKKKKKKKK",
        "distrito": "Escazú",
        "distritoRepresentanteLegal": "Escazú",
        "fax": "2222-2222",
        "faxRepresentanteLegal": "2222-2222",
        "fechaUltimaDeclaracion": "22/01/2019",
        "fechaUltimoAvaluo": "22/01/2019",
        "filial": false,
        "hidFiVal": "0",
        "mapa": "9999999",
        "nivelVia": "",
        "nombreCompleto": "PERSONA DE PRUEBA",
        "nombrePersona": "PERSONA",
        "nombreRepresentanteLegal": "",
        "numeroBloque": "",
        "numeroCuenta": 1111,
        "numeroDerecho": "002",
        "numeroFinca": "000000",
        "numeroParcela": "",
        "numeroPlano": null,
        "pendiente": null,
        "porcentajeAreaComun": 0.0,
        "porcentajeCondominio": 0.0,
        "porcentajeDominio": 0.0,
        "porcentajePosesion": 100.0,
        "predio": null,
        "primerApellido": "PRUEBA",
        "provincia": "San José",
        "provinciaRepresentanteLegal": "San José",
        "regularidad": 1.0,
        "sector": "",
        "segregacion": "",
        "segundoApellido": "PRUEBA",
        "segundoNombre": "DE",
        "telefonoHabitacionRepresentanteLegal": "2222-2222",
        "telefonoOficina": "2222-2222",
        "telefonoOficinaRepresentanteLegal": "2222-2222",
        "telefonoResidencia": "",
        "tieneAcera": true,
        "tieneAlumbrado": true,
        "tieneCaneria": false,
        "tieneCano": true,
        "tieneCordon": true,
        "tieneElectricidad": true,
        "tieneTelefono": true,
        "tipoDerecho": "D",
        "tipoViaPublica": "4",
        "totalFrente": 8.0,
        "ubicacionManzana": "5",
        "usoActual": "COM",
        "usoSuelo": "NA",
        "yearsVigenciaAvaluo": 3,
        "yearsVigenciaDeclaracion": 5,
        "zonaHomogenea": "ZZZZ"
    }
]
```

## Guardar Declaración

Este método guarda la información proporcionada por medio de una declaración en línea. En la declaración en línea, se debe incluir información sobre el valor del terreno y sus construcciones, fincas filiales, y un valor total.

También se pueden proporcionar detalles de la declaración. En el detalle se pueden declarar cambios en la `edad` de una o más construcciones asociadas. Cada cambio debe llevar el número de construcción correspondiente que identifique a la construcción.

:::important

 Este método verifica que no existan ni declaraciones existentes ingresadas en línea ni declaraciones en proceso para la finca antes de intentar guardar la declaración. En caso de que exista una o más declaraciones ingresadas en línea o en proceso, se devolverá un error.

 También se verifica que las fechas de último avalúo y última declaración excedan la cantidad de años de vigencia definidos (devueltos en la respuesta a obtener finca). Si no han pasado los años definidos como vigente para una declaración, no se permite guardar una declaración nueva.

:::

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/declaraciones/guardarDeclaracion
```

### Body Parameters

| Parámetro                     |     Descripción      |
| ----------------------------- | -------------------- |
| numeroCuenta                  | El número de la cuenta  |
| numeroFinca                   | El número de finca   |
| detalles                      | El detalle de la declaración  |

:::caution

Al llamar este método se debe proporcionar el `número de cuenta` y el `número de finca`, ya que son la llave del registro. En la estructura que devuelve el método `obtenerFinca` se puede encontrar el número de cuenta. El número de cuenta no es lo mismo que el número de finca ni la cédula.

:::

### Ejemplo

```javascript
curl -XPOST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" -H 'Content-Type: application/json'
   "https://webservice.ejemplo.com/v1/declaraciones/guardarDeclaracion"
   -d '{"numeroCuenta":1000,
        "numeroFinca":234567,
        "detalles":[
            {
                "numeroConstruccion": 14,
                "edad": 1
            }
        ]
      }'
```

Este método devuelvo JSON estructurado con el número de la declaración además de los valores calculados de terreno y construcción. También devuelve un código HTTP `200 OK` si se guardó correctamente:

```javascript
{
    "numeroDeclaracion": 4368,
    "valorConstruccionCalculado": 750000,
    "valorTerrenoCalculado": 2000000
}
```

## Actualizar Declaración

Este método actualiza la información de la declaración identificada por la información proporcionada.

:::important

 Este método se debe ejecutar luego de haber ejecutar guardar declaración, ya que de ahí se obtendría el número de declaración, además de los valores calculados de terreno y construcción.

:::

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/declaraciones/guardarDeclaracion
```

### Body Parameters

| Parámetro                     |     Descripción      |
| ----------------------------- | -------------------- |
| numeroDeclaracion             | El número de declaración  |
| valorTerreno                  | El valor del terreno  |
| valorConstruccion             | El valor de la construcción  |
| obrasComunesFincasFiliales    | El valor de obras comunes en fincas filiales  |
| terrenosComunesFincasFiliales | El valor de terrenos comunes en fincas filiales  |
| valorTotal                    | El valor total de la declaración  |

:::caution

Al llamar este método se debe proporcionar el `número de declaración` que se devuelve como parte del método guardar declaración.

:::

:::important

Este método utiliza códigos de respuesta para indicar el estado de la transacción. Por ejemplo, un `202 ACCEPTED` en el caso exitoso. En caso de que falle, puede devolver uno de los errores descritos en la sección de `Códigos de Error`.

:::

### Ejemplo

```javascript
curl -XPOST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" -H 'Content-Type: application/json'
   "https://webservice.ejemplo.com/v1/declaraciones/actualizarDeclaracion"
   -d '{"numeroDeclaracion":4368,
        "valorTerreno":50000.0,
        "valorConstruccion":25000.0,
        "obrasComunesFincasFiliales":0.0,
        "terrenosComunesFincasFiliales":0.0,
        "valorTotal":75000.0
      }'
```

## Obtener Valor Declarado

Este método obtiene el valor total declarado de una finca. El objeto JSON que se devuelve contiene el valor declarado acompañado del desglose.

El método devuelva una lista de todas las declaraciones que se están cobrando o se estarán cobrando el próximo año. Cada ítem de la lista incluye la fecha de la declaración.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/declaraciones/obtenerValorDeclarado
```

### Query Parameters

| Parámetro     |     Descripción      |
| ------------- | :------------------: |
| numeroCuenta  | El número de cuenta  |
| numeroFinca   | El número de finca   |
| cedula        | El número de cédula  |

:::tip

Solo se necesita uno de los parámetros.

:::

### Ejemplo

```javascript
# por número de cuenta
curl -XGET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/declaraciones/obtenerValorDeclarado?numeroCuenta=1273"

# por número de finca
curl -XGET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/declaraciones/obtenerValorDeclarado?numeroFinca=234567"

# por cédula
curl -XGET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/declaraciones/obtenerValorDeclarado?cedula=11068610"
```

Este método devuelvo JSON estructurado de la siguiente manera:

```javascript
[
    {
        "construccionesAreasComunes": 0.0,
        "construccionesAreaPrivada": 0.0,
        "numeroCuenta": 1275,
        "numeroFinca": "102992",
        "fechaDeclaracion": "10/08/2019",
        "terrenoAreaComun": 0.0,
        "terrenoAreaPrivada": 0.0,
        "valorTerrenoCalculado": 20000000.0,
        "valorConstruccionCalculado": 750000.0,
        "valorDeclarado": 1500000.0,
        "valorTerrenoDeclarado": 0.0,
        "valorConstruccionesDeclarado": 1500000.0,
        "valorAreaComunCondominioDeclarado": 0.0,
        "valorConstruccionCondominioDeclarado": 0.0
    }
]
```

## Validaciones

Estas son las validaciones que se aplican al guardar, que se deberían tomar en cuenta antes de intentar al método guardar:

`declaracionEnProceso`: Este valor indica si una finca tiene una a más declaraciones en proceso, lo cual no permitiría que se guarde una declaración nueva.

`declaracionIngresadaEnLinea`: Este valor indica si se ha guardado una declaración para la finca con el webservice, lo cual no permitiría que se guarde una declaración nueva.

`fechaUltimaDeclaracion`: Este valor indica la fecha de la última declaración. Sólo se permite guardar una declaración nueva si la cantidad de años que han transcurrido entre esa fecha y la fecha actual excede la cantidad de años definida en `yearsVigenciaDeclaracion`.

`fechaUltimoAvaluo`: Este valor indica la fecha del último avalúo. Sólo se permite guardar una declaración nueva si la cantidad de años que han transcurrido entre esa fecha y la fecha actual excede la cantidad de años definida en `yearsVigenciaAvaluo`.

```python
# Campo: declaracionEnProceso / declaracionIngresadaEnLinea
En caso de estar en `true`, no se permitirá guardar una declaración nueva.

# Cálculo de años (declaración)
int yearsDesdeUltimaFechaDeclaracion = yearFechaActual - year(fechaUltimaDeclaracion);
if (yearsDesdeUltimaFechaDeclaracion >= yearsVigenciaDeclaracion) {
  # Hacer la llamada para guardar declaración
}

# Cálculo de años (avalúo)
int yearsDesdeUltimaFechaAvaluo = yearFechaActual - year(fechaUltimoAvaluo);
if (yearsDesdeUltimaFechaAvaluo >= yearsVigenciaAvaluo) {
  # Hacer la llamada para guardar declaración
}
```
