---
id: integracion-conectividad
title: Integración Conectividad
sidebar_label: Integración Conectividad
---

Los APIs aquí enumerados se utilizan para hacer consultas y pagos por medio del web service de conectividad.

## Códigos de Convenio

Este web service funciona por medio de códigos de convenio. Un convenio es una agrupación de deudas vencidas, al cobro o futuras asociadas a un contribuyente. Hay casi 20 convenios distintos para crear agrupaciones de distintos períodos y distintos rubros.

:::important

Los posibles códigos de convenio se definen en el sistema, dentro de la ventana `cuf.conven`.

:::

## Obtener Persona

Método para obtener información de la persona asociada al número de identificación dada.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/integracion-conectividad/obtener-persona
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| identificacion | Identificación de la persona  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/integracion-conectividad/obtener-persona?identificacion=12345678"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
{
    "identificacion": "12345678",
    "nombre": "Julio Cascante",
    "tipoIdentificacion": "F"
}
```

## Saldos Persona Resumen

Método para consultar los saldos de una persona de forma resumida por año y rubro.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-persona-resumen
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| codigoConvenio | Código de convenio  |
| identificacion | Identificación de la persona  |
| numeroPagina | Número de página  |
| longitudPagina | Longitud de página  |
| fechaLimite | Fecha límite hasta donde filtrar saldos (opcional)  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-persona-resumen?codigoConvenio=001&&identificacion=12345678&numeroPagina=1&longitudPagina=5"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
{
    "cantidadPaginas": 3,
    "longitudPagina": 5,
    "numeroPagina": 1,
    "saldosPersonaResumen": [
        {
            "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS P\u00daBLICOS",
            "idReferencia": 201817,
            "idRubro": "17",
            "montoTotal": 1476.57,
            "year": 2018
        },
        {
            "descripcion": "SERVICIO DE RECOLECCI\u00d3N DE BASURA RESID",
            "idReferencia": 201813,
            "idRubro": "13",
            "montoTotal": 16188.960000000001,
            "year": 2018
        },
        {
            "descripcion": "PARQUES ZONAS VERDES",
            "idReferencia": 201824,
            "idRubro": "24",
            "montoTotal": 442.92999999999995,
            "year": 2018
        },
        {
            "descripcion": "Impuesto sobre Bienes Inmuebles",
            "idReferencia": 201939,
            "idRubro": "39",
            "montoTotal": 3750.0,
            "year": 2019
        },
        {
            "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS P\u00daBLICOS",
            "idReferencia": 201817,
            "idRubro": "17",
            "montoTotal": 1439.54,
            "year": 2018
        }
    ]
}
```

## Saldos Persona Resumen Detalle

Método para consultar los saldos de una persona.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-persona-resumen-detalle
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| codigoConvenio | Código de convenio  |
| identificacion | Identificación de la persona  |
| idRubro        | Identificador de rubro  |
| year           | Año  |
| numeroPagina | Número de página  |
| longitudPagina | Longitud de página  |
| fechaLimite | Fecha límite hasta donde filtrar saldos (opcional)  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-persona-resumen-detalle?codigoConvenio=001&&identificacion=12345678&numeroPagina=1&longitudPagina=5"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
{
    "cantidadPaginas": 5,
    "longitudPagina": 5,
    "numeroPagina": 1,
    "saldosPersona": [
        {
            "descripcion": "SERVICIO DE RECOLECCI\u00d3N DE BASURA RESID",
            "estado": "pendiente",
            "fechaCorte": "30/06/2018",
            "idRubro": "13",
            "idSaldo": 20180213,
            "monto": 8578.130000000001,
            "numeroPersona": 1,
            "periodo": "02",
            "saldo": 7200.0,
            "saldoInteres": 1378.13,
            "tipoCobro": "SER",
            "year": "2018"
        },
        {
            "descripcion": "SERVICIO DE RECOLECCI\u00d3N DE BASURA RESID",
            "estado": "pendiente",
            "fechaCorte": "30/09/2018",
            "idRubro": "13",
            "idSaldo": 20180313,
            "monto": 8331.880000000001,
            "numeroPersona": 1,
            "periodo": "03",
            "saldo": 7200.0,
            "saldoInteres": 1131.88,
            "tipoCobro": "SER",
            "year": "2018"
        },
        {
            "descripcion": "SERVICIO DE RECOLECCI\u00d3N DE BASURA RESID",
            "estado": "pendiente",
            "fechaCorte": "31/12/2018",
            "idRubro": "13",
            "idSaldo": 20180413,
            "monto": 8085.63,
            "numeroPersona": 1,
            "periodo": "04",
            "saldo": 7200.0,
            "saldoInteres": 885.63,
            "tipoCobro": "SER",
            "year": "2018"
        },
        {
            "descripcion": "SERVICIO DE RECOLECCI\u00d3N DE BASURA RESID",
            "estado": "pendiente",
            "fechaCorte": "31/03/2019",
            "idRubro": "13",
            "idSaldo": 20190113,
            "monto": 8383.78,
            "numeroPersona": 1,
            "periodo": "01",
            "saldo": 7700.0,
            "saldoInteres": 683.78,
            "tipoCobro": "SER",
            "year": "2019"
        },
        {
            "descripcion": "SERVICIO DE RECOLECCI\u00d3N DE BASURA RESID",
            "estado": "pendiente",
            "fechaCorte": "30/06/2019",
            "idRubro": "13",
            "idSaldo": 20190213,
            "monto": 8120.43,
            "numeroPersona": 1,
            "periodo": "02",
            "saldo": 7700.0,
            "saldoInteres": 420.43,
            "tipoCobro": "SER",
            "year": "2019"
        }
    ]
}
```

## Saldos Persona

Método para consultar los saldos de una persona para el convenio dado.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-persona
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| codigoConvenio | Código de convenio  |
| identificacion | Identificación de la persona  |
| fechaLimite | Fecha límite hasta donde filtrar saldos (opcional)  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-persona?codigoConvenio=001&identificacion=12345678"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS PÚBLICOS",
        "estado": "pendiente",
        "fechaCorte": "30/03/2019",
        "idRubro": "17",
        "idSaldo": 20190317,
        "monto": 1032.84,
        "numeroPersona": 1,
        "periodo": "03",
        "saldo": 1030.34,
        "saldoInteres": 2.5,
        "tipoCobro": "SER",
        "year": "2019"
    },
    {
        "descripcion": "SERVICIO DE RECOLECCIÓN DE BASURA RESID                     ",
        "estado": "pendiente",
        "fechaCorte": "30/01/2019",
        "idRubro": "13",
        "idSaldo": 20190313,
        "monto": 7700,
        "numeroPersona": 1,
        "periodo": "03",
        "saldo": 7700,
        "saldoInteres": 0.0,
        "tipoCobro": "SER",
        "year": "2019"
    },
    {
        "descripcion": "SERVICIO DE RECOLECCIÓN DE BASURA RESID",
        "estado": "pendiente",
        "fechaCorte": "31/12/2019",
        "idRubro": "13",
        "idSaldo": 20190413,
        "monto": 5500,
        "numeroPersona": 1,
        "periodo": "04",
        "saldo": 5500,
        "saldoInteres": 0.0,
        "tipoCobro": "SER",
        "year": "2019"
    }
]
```

:::important

En el caso del convenio de carrito de compras, la respuesta a obtener saldos de persona también incluiría los siguientes campos:

* numeroPersona
* auxiliarContable
* numeroCuenta
* tipoTransaccion
* numeroDocumento

**NOTA:** Estos valores son necesarios para hacer la llamada al método ejecutarPago bajo el convenio de carrito de compras.

:::

## Saldos Persona (Convenio Total)

Método para consultar los saldos de una persona para el convenio total.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-total-persona
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| identificacion | Identificación de la persona  |
| fechaLimite | Fecha límite hasta donde filtrar saldos (opcional)  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-total-persona?identificacion=12345678"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS PÚBLICOS",
        "estado": "pendiente",
        "fechaCorte": "30/03/2019",
        "idRubro": "17",
        "idSaldo": 20190317,
        "monto": 1032.84,
        "numeroPersona": 1,
        "periodo": "03",
        "saldo": 1030.34,
        "saldoInteres": 2.5,
        "tipoCobro": "SER",
        "year": "2019"
    },
    {
        "descripcion": "SERVICIO DE RECOLECCIÓN DE BASURA RESID                     ",
        "estado": "pendiente",
        "fechaCorte": "30/01/2019",
        "idRubro": "13",
        "idSaldo": 20190313,
        "monto": 7700,
        "numeroPersona": 1,
        "periodo": "03",
        "saldo": 7700,
        "saldoInteres": 0.0,
        "tipoCobro": "SER",
        "year": "2019"
    },
    {
        "descripcion": "SERVICIO DE RECOLECCIÓN DE BASURA RESID",
        "estado": "pendiente",
        "fechaCorte": "31/12/2019",
        "idRubro": "13",
        "idSaldo": 20190413,
        "monto": 5500,
        "numeroPersona": 1,
        "periodo": "04",
        "saldo": 5500,
        "saldoInteres": 0.0,
        "tipoCobro": "SER",
        "year": "2019"
    }
]
```

## Saldos Persona (Convenio Parcial)

Método para consultar los saldos de una persona para el convenio parcial.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-parcial-persona
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| identificacion | Identificación de la persona  |
| fechaLimite | Fecha límite hasta donde filtrar saldos (opcional)  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-parcial-persona?identificacion=12345678"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS PÚBLICOS",
        "estado": "pendiente",
        "fechaCorte": "30/03/2019",
        "idRubro": "17",
        "idSaldo": 20190317,
        "monto": 1032.84,
        "numeroPersona": 1,
        "periodo": "03",
        "saldo": 1030.34,
        "saldoInteres": 2.5,
        "tipoCobro": "SER",
        "year": "2019"
    },
    {
        "descripcion": "SERVICIO DE RECOLECCIÓN DE BASURA RESID                     ",
        "estado": "pendiente",
        "fechaCorte": "30/01/2019",
        "idRubro": "13",
        "idSaldo": 20190313,
        "monto": 7700,
        "numeroPersona": 1,
        "periodo": "03",
        "saldo": 7700,
        "saldoInteres": 0.0,
        "tipoCobro": "SER",
        "year": "2019"
    },
    {
        "descripcion": "SERVICIO DE RECOLECCIÓN DE BASURA RESID",
        "estado": "pendiente",
        "fechaCorte": "31/12/2019",
        "idRubro": "13",
        "idSaldo": 20190413,
        "monto": 5500,
        "numeroPersona": 1,
        "periodo": "04",
        "saldo": 5500,
        "saldoInteres": 0.0,
        "tipoCobro": "SER",
        "year": "2019"
    }
]
```

## Saldos Persona (Convenio Vencido)

Método para consultar los saldos de una persona para el convenio vencido.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-vencido-persona
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| identificacion | Identificación de la persona  |
| fechaLimite | Fecha límite hasta donde filtrar saldos (opcional)  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/integracion-conectividad/saldos-vencido-persona?idDeudor=12345678"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS PÚBLICOS                     ",
        "estado": "pendiente",
        "fechaCorte": "30/01/2019",
        "idRubro": "1",
        "idSaldo": 20190906191853,
        "monto": 5017.73,
        "numeroPersona": 1,
        "periodo": "03",
        "saldo": 0.0,
        "saldoInteres": 0.0,
        "tipoCobro": "1",
        "year": "2019"
    },
    {
        "descripcion": "SERVICIO DE RECOLECCIÓN DE BASURA RESID                     ",
        "estado": "pendiente",
        "fechaCorte": "30/01/2019",
        "idRubro": "13",
        "idSaldo": 20190313,
        "monto": 7700,
        "numeroPersona": 1,
        "periodo": "03",
        "saldo": 7700,
        "saldoInteres": 0.0,
        "tipoCobro": "SER",
        "year": "2019"
    }
]
```

## Ejecutar Pago

Método para realizar la aplicación de un pago de una factura con el convenio dado.

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/integracion-conectividad/ejecutar-pago
```

### Body Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| llaveAcceso | Llave de acceso  |
| codigoConvenio | Código de convenio  |
| codigoBanco | Código de banco donde se realizó el pago  |
| codigoAgencia | Agencia del banco donde se realizó el pago  |
| periodo | Periodo del recibo a pagar  |
| montoTotal | Monto total  |
| numeroFactura | Número de factura del recibo a pagar  |
| transacciones | Transacciones que se desean pagar `(sólo aplica para el convenio de carrito de compras)` |

Las transacciones incluyen los siguientes atributos:

| Atributo | Descripción |
| -- | -- |
| auxiliarContable | Auxiliar contable |
| numeroCuenta | Número de cuenta |
| tipoTransaccion | Tipo de transacción |
| numeroDocumento | Número de documento |

### Ejemplo

```javascript
curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="
    -H "Content-Type: application/json"
    "https://webservice.ejemplo.com/v1/integracion-conectividad/ejecutar-pago"
    -d '{"llaveAcceso": "",
         "codigoConvenio": "",
         "codigoBanco": "",
         "codigoAgencia": "",
         "periodo": "",
         "montoTotal": 0.0,
         "numeroFactura": 0.0,
         "transacciones": [
           {
             "auxiliarContable": "CUF",
             "numeroCuenta": 1,
             "tipoTransaccion": "IBI",
             "numeroDocumento": "123"
           }
         ]
       }'
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "numeroFactura": 20190906191853,
        "codigoRespuesta": 0,
        "idRubro": "1",
        "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS PÚBLICOS",
        "montoPagado": 123.45
    }
]
```

:::important

En el caso del convenio de carrito de compras, se debe incluir una lista de transacciones que incluyen los siguientes valores:

* numeroPersona
* auxiliarContable
* numeroCuenta
* tipoTransaccion
* numeroDocumento

Además, en el caso del convenio de carrito de compras, la respuesta sólo incluye el número de factura y código de respuesta.

:::

## Ejecutar Pago (Convenio Total)

Método para realizar la aplicación de un pago de una factura en el convenio total.

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/integracion-conectividad/ejecutar-pago-total
```

### Body Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| llaveAcceso | Llave de acceso  |
| codigoConvenio | Código de convenio  |
| codigoBanco | Código de banco donde se realizó el pago  |
| codigoAgencia | Agencia del banco donde se realizó el pago  |
| periodo | Periodo del recibo a pagar  |
| montoTotal | Monto total  |
| numeroFactura | Número de factura del recibo a pagar  |

### Ejemplo

```javascript
curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="
    -H "Content-Type: application/json"
    "https://webservice.ejemplo.com/v1/integracion-conectividad/ejecutar-pago-total"
    -d '{"llaveAcceso": "",
         "codigoConvenio": "",
         "codigoBanco": "",
         "codigoAgencia": "",
         "periodo": "",
         "montoTotal": 0.0,
         "numeroFactura": 0.0
       }'
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "numeroFactura": 20190906191853,
        "codigoRespuesta": 0,
        "idRubro": "1",
        "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS PÚBLICOS",
        "montoPagado": 123.45
    }
]
```

## Ejecutar Pago (Convenio Parcial)

Método para realizar la aplicación de un pago de una factura en el convenio parcial.

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/integracion-conectividad/ejecutar-pago-parcial
```

### Body Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| llaveAcceso | Llave de acceso  |
| codigoConvenio | Código de convenio  |
| codigoBanco | Código de banco donde se realizó el pago  |
| codigoAgencia | Agencia del banco donde se realizó el pago  |
| periodo | Periodo del recibo a pagar  |
| montoTotal | Monto total  |
| numeroFactura | Número de factura del recibo a pagar  |

### Ejemplo

```javascript
curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="
    -H "Content-Type: application/json"
    "https://webservice.ejemplo.com/v1/integracion-conectividad/ejecutar-pago-parcial"
    -d '{"llaveAcceso": "",
         "codigoConvenio": "",
         "codigoBanco": "",
         "codigoAgencia": "",
         "periodo": "",
         "montoTotal": 0.0,
         "numeroFactura": 0.0
       }'
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "numeroFactura": 20190906191853,
        "codigoRespuesta": 0,
        "idRubro": "1",
        "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS PÚBLICOS",
        "montoPagado": 123.45
    }
]
```

## Ejecutar Pago (Convenio Vencido)

Método para realizar la aplicación de un pago de una factura en el convenio vencido.

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/integracion-conectividad/ejecutar-pago-vencido
```

### Body Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| llaveAcceso | Llave de acceso  |
| codigoConvenio | Código de convenio  |
| codigoBanco | Código de banco donde se realizó el pago  |
| codigoAgencia | Agencia del banco donde se realizó el pago  |
| periodo | Periodo del recibo a pagar  |
| montoTotal | Monto total  |
| numeroFactura | Número de factura del recibo a pagar  |

### Ejemplo

```javascript
curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="
    -H "Content-Type: application/json"
    "https://webservice.ejemplo.com/v1/integracion-conectividad/ejecutar-pago-vencido"
    -d '{"llaveAcceso": "",
         "codigoConvenio": "",
         "codigoBanco": 0,
         "codigoAgencia": "",
         "periodo": "",
         "montoTotal": 0.0,
         "numeroFactura": 0.0
       }'
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "numeroFactura": 20190906191853,
        "codigoRespuesta": 0,
        "idRubro": "1",
        "descripcion": "MANTENIMIENTO DE VIAS Y SITIOS PÚBLICOS",
        "montoPagado": 123.45
    }
]
```

## Reversar Pago

Método para realizar una anulación de un pago.

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/integracion-conectividad/reversar-pago
```

### Body Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| llaveAcceso | Llave de acceso  |
| codigoConvenio | Código de convenio  |
| codigoBanco | Código de banco donde se realizó el pago  |
| codigoAgencia | Agencia del banco donde se realizó el pago  |
| periodo | Periodo del recibo a pagar  |
| numeroFactura | Número de factura del recibo a pagar  |

### Ejemplo

```javascript
curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="
    -H "Content-Type: application/json"
    "https://webservice.ejemplo.com/v1/integracion-conectividad/reversar-pago"
    -d '{"llaveAcceso": "",
         "codigoConvenio": "",
         "codigoBanco": 0,
         "codigoAgencia": "",
         "periodo": "",
         "numeroFactura": 0.0
       }'
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
0
```

## Historial Pagos

Método para consultar el historial de pagos de una persona, filtrado por las fechas de inicio/final.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/integracion-conectividad/historial-pagos
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| cedula | Identificación de la persona  |
| fechaInicio | Fecha inicio  |
| fechaFinal | Fecha final  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/integracion-conectividad/historial-pagos?cedula=12345678&fechaInicio=01/01/2019&fechaFinal=01/03/2019"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "numeroTransaccion": 78219,
        "fechaPago": "15/02/2019",
        "montoPago": 23749.58,
        "cuentaOrigen": "Cuenta Ahorros"
    }
]
```

## Verificar Pago

Método para verificar existencia del pago de una persona.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/integracion-conectividad/verificar-pago
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| numeroFactura | Número de factura  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/integracion-conectividad/verificar-pago?numeroFactura=20190906191853"
```

Este método devuelve un código HTTP que indica si la factura existe o no.

```javascript
200 (la factura existe)
```

```javascript
404 (no se encontró la factura)
```

## Códigos de Retorno

Estos son los posibles códigos de retorno de los APIs del web service:

| Código  |     Descripción      |
| :-----: | -------------------- |
| 0       | Ejecución correcta  |
| 1       | Error de sistema   |
| 2       | Identificador de deudor no existe  |
| 3       | Deudor no tiene facturas pendientes  |
| 4       | No autenticado  |
| 5       | Parámetros incorrectos  |
