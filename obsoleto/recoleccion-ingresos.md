---
id: recoleccion-ingresos
title: Recolección de Ingresos
sidebar_label: Recolección de Ingresos
---

Este API se utiliza para obtener información sobre recolección de ingresos.

## Ingresos

Método para obtener la el detalle de recolección de ingresos agrupado por servicio y periodo.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/recoleccion-ingresos/servicio-periodo
```

### Ejemplo

```javascript
curl -X GET -H 'Content-Type: application/json' -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/recoleccion-ingresos/servicio-periodo?fechaInicio=01/01/2020&fechaFinal=01/10/2020"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
{
  "CUF": {
    "AGU": {
        "202001": {
            "auxiliar": "CUF",
            "codigoServicio": "AGU",
            "montoCancelado": 0.0,
            "montoIngreso": 0.0,
            "montoIntereses": 0.0,
            "nombreServicio": "SERVICIO DE AGUA",
            "periodo": 202001
        },
        "202002": {
            "auxiliar": "CUF",
            "codigoServicio": "AGU",
            "montoCancelado": 0.0,
            "montoIngreso": 0.0,
            "montoIntereses": 0.0,
            "nombreServicio": "SERVICIO DE AGUA",
            "periodo": 202002
        }
      }
    }
}
```
