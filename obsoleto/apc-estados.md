---
id: apc-estados
title: APC Municipal - Estados de Solicitud
sidebar_label: APC Municipal - Estados de Solicitud
---

Los APIs aquí enumerados se utilizan para consultar los estados de solicitudes relacionados al APC Municipal.

## Consultar Solicitudes

Método para obtener la lista de solicitudes que incluyen el estado de cada solicitud.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/apc-estados/consultar
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| codigoCFIA | Código de CFIA  |
| numeroCuenta | Número de cuenta |
| cedula | Cédula |
| numeroFinca | Número de finca |
| duplicado | Código de duplicado (**NOTA:** Se utiliza en conjunto con `numeroFinca`) |
| horizontalFilial | Indicador de filial (**NOTA:** Se utiliza en conjunto con `numeroFinca`) |
| numeroDerecho | Número de derecho (**NOTA:** Se utiliza en conjunto con `numeroFinca`) |
| numeroSolicitudPermiso | Número de solicitud de permiso |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/apc-estados/consultar?numeroSolicitudPermiso=1"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "cedula": "1234567890",
        "codigoCFIA": null,
        "duplicado": null,
        "estadoPermiso": "01 - INGRESADO",
        "fechaReciboPago": null,
        "horizontalFilial": false,
        "montoMultas": 0.0,
        "montoPermisoTasado": 0.0,
        "numeroCuenta": 10,
        "numeroDerecho": "000",
        "numeroFinca": "0081",
        "numeroSolicitudPermiso": 1,
        "observaciones": null
    }
]
```
