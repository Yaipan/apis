---
id: web-conectividad
title: Web Conectividad
sidebar_label: Web Conectividad
---

Los APIs aquí enumerados se utilizan para hacer consultas y pagos por medio de conectividad.

:::warning

No utilice este web service al menos que sea necesario. En vez, utilice el web service estándar llamado `integración conectividad`.

:::

## Consulta Factura

Método para consultar el monto de la(s) factura(s) asociada(s) a un deudor.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/web-conectividad/consulta-factura
```

### Query Parameters

| Parámetro     |     Descripción      |
| ------------- | -------------------- |
| idDeudor      | Identificador del deudor  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/web-conectividad/consulta-factura?idDeudor=12345678"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "codigoError": 1,
        "factura": 0.0,
        "fechaVencimiento": "00000000",
        "identificadorDeudor": "12345678",
        "monto": 0.0,
        "nombre": "Julio Cascante",
        "periodo": "00000000"
    }
]
```

## Consulta Nombre

Método para consultar el nombre de un deudor.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/web-conectividad/consulta-nombre
```

### Query Parameters

| Parámetro     |     Descripción      |
| ------------- | -------------------- |
| idDeudor      | Identificador del deudor  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/web-conectividad/consulta-nombre?idDeudor=12345678"
```

Este método devuelve la hilera con el nombre:

```javascript
Julio Cascante
```

## Consulta Rubros

Método que obtiene información de los rubros o detalle de la(s) factura(s) asociada(s) a un deudor.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/web-conectividad/consulta-rubros
```

### Query Parameters

| Parámetro     |     Descripción      |
| ------------- | -------------------- |
| idDeudor      | Identificador del deudor  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/web-conectividad/consulta-rubros?idDeudor=12345678"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[]
```

## Pagar

Método para ar la aplicación de un pago de una factura.

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/web-conectividad/pagar
```

### Body Parameters

| Parámetro     |     Descripción      |
| ------------- | -------------------- |
| identificadorDeudor      | Identificador del deudor  |
| factura      | Número de factura del recibo a pagar  |
| periodo      | Período del recibo a pagar  |
| banco      | Código de banco donde se realizó el pago  |
| agencia      | Agencia del banco donde se realizó el pago  |
| monto      | Monto total a pagar  |

### Ejemplo

```javascript
curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="
    -H "Content-Type: application/json"
    "https://webservice.ejemplo.com/v1/web-conectividad/pagar"
    -d '{"identificadorDeudor":"12345678",
         "factura":123.00,
         "periodo":"201903",
         "banco":"00152",
         "agencia":"033272",
         "monto":150000.00
       }'
```

Este método devuelve un código de retorno:

```javascript
0
```

## Reversar

Método para realizar una anulación de un pago.

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/web-conectividad/reversar
```

### Body Parameters

| Parámetro     |     Descripción      |
| ------------- | -------------------- |
| identificadorDeudor      | Identificador del deudor  |
| factura      | Número de factura del recibo a reversar  |
| periodo      | Período del recibo a reversar  |
| banco      | Código de banco donde se había realizado el pago  |
| agencia      | Agencia del banco donde se había realizado el pago  |

### Ejemplo

```javascript
curl -X POST -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU="
    -H "Content-Type: application/json"
    "https://webservice.ejemplo.com/v1/web-conectividad/reversar"
    -d '{"identificadorDeudor":"12345678",
         "factura":123.00,
         "periodo":"201903",
         "banco":"00152",
         "agencia":"033272"
       }'
```

Este método devuelve un código de retorno:

```javascript
0
```

## Consulta Receptor FE

Método que obtiene información sobre el receptor de factura electrónica asociado a la identificación de deudor dada.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/web-conectividad/consulta-receptor-fe
```

### Query Parameters

| Parámetro     |     Descripción      |
| ------------- | -------------------- |
| identificadorDeudor      | Identificador del deudor  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/web-conectividad/consulta-receptor-fe?idDeudor=12345678"
```

Este método devuelve un código de retorno:

```javascript
{
    "cedula": "12345678",
    "copiaCortesia": null,
    "correo": "correo@ejemplo.com",
    "direccion": "Cinco Esquinas de Tibás",
    "nombre": "Julio Cascante",
    "telefono": "12345678",
    "tipoCedula": "F"
}
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
