---
id: constancias
title: Constancias
sidebar_label: Constancias
---

## Generar Constancia

Método para obtener un PDF generado de una constancia para la persona asociada a la cédula dada.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/constancias/generar
```

### Query Parameters

| Parámetro     |     Descripción      |
| ------------- | :------------------: |
| cedula        | Cédula de la persona |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/constancias/generar?cedula=12345678"
```
