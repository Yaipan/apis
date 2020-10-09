---
id: reconexion-hidrometros
title: Reconexión de Hidrómetros
sidebar_label: Reconexión de Hidrómetros
---

Los APIs aquí enumerados se utilizan para consultar los hidrómetros marcados para reconectar y ejecutar la reconexión de un hidrómetro.

## Lista Hidrómetros Reconectar

Método para obtener la lista de hidrómetros que están pendientes de reconectar.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/reconexion-hidrometros/lista
```

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/reconexion-hidrometros/lista"
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "compania": "EJEMPLO",
        "numeroMedidor": 202004.0,
        "reconectar": "S",
        "ruta": 2,
        "ubicacion": 4
    },
    {
        "compania": "EJEMPLO",
        "numeroMedidor": 202005.0,
        "reconectar": "S",
        "ruta": 2,
        "ubicacion": 5
    },
    {
        "compania": "EJEMPLO",
        "numeroMedidor": 202006.0,
        "reconectar": "S",
        "ruta": 2,
        "ubicacion": 6
    }
]
```

## Reconectar Hidrómetro

Método encargado de reconectar un hidrómetro identificado por el número de medidor dado.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/reconexion-hidrometros/reconectar/[numeroMedidor]
```

### Path Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| numeroMedidor | Número de medidor que se desea reconectar  |

### Body Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| usuario | Usuario que ejecuta la reconexión (longitud máxima de 8 caracteres)  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/reconexion-hidrometros/reconectar/202004" -d '{"usuario":"us_1801"}'
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
[
    {
        "compania": "EJEMPLO",
        "numeroMedidor": 202004.0,
        "reconectar": "N"
    }
]
```
