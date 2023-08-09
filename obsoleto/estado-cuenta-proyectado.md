---
id: estado-cuenta-proyectado
title: Estado de Cuenta Proyectado
sidebar_label: Estado de Cuenta Proyectado
---

Los APIs aquí enumerados se utilizan para obtener un estado de cuenta con proyección de deuda.

## Obtener Estado de Cuenta Proyectado

Método para obtener un PDF del estado de cuenta proyectado de una persona identificada por la cédula y fechas para la proyección.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/proyeccion-deuda/calcular
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| cedula | Número de cédula de la persona  |
| fechaIntereses | Fecha de cuándo se estima hacer el pago  |
| fechaProyeccionPago | Fecha del último periodo que se desea cancelar.  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/proyeccion-deuda/calcular?cedula=12345678&fechaIntereses=01/09/2021&fechaProyeccionPago=01/11/2021"
```

Este método devuelve un PDF del estado de cuenta proyectado.
