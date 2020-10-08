---
id: estado-cuenta
title: Estado de Cuenta
sidebar_label: Estado de Cuenta
---

Los APIs aquí enumerados se utilizan para obtener o enviar por correo un estado de cuenta.

## Obtener Estado de Cuenta

Método para obtener un PDF del estado de cuenta de una persona identificada por la cédula.

### HTTP Request

```javascript
GET https://webservice.ejemplo.com/v1/estado-cuenta/get
```

### Query Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| cedula | Número de cédula de la persona  |

### Ejemplo

```javascript
curl -X GET -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/estado-cuenta/get?cedula=12345678"
```

Este método devuelve un PDF del estado de cuenta.

## Enviar Estado de Cuenta por Correo

Método encargado de enviar un PDF del estado de cuenta de una persona identificada por la cédula a la dirección de correo asociada a la persona o a un correo en particular.

### HTTP Request

```javascript
POST https://webservice.ejemplo.com/v1/estado-cuenta/enviar
```

### Body Parameters

| Parámetro      |     Descripción      |
| -------------- | -------------------- |
| cedula | Número de cédula de la persona  |
| correoElectronico | [Opcional] Correo electrónico adonde se desea enviar el estado de cuenta  |
| tituloCorreo | [Opcional] Título del correo que será enviado  |
| mensajeCorreo | [Opcional] Mensaje del correo que será enviado  |

### Ejemplo

```javascript
curl -X POST -H 'Content-Type: application/json' -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" "https://webservice.ejemplo.com/v1/estado-cuenta/enviar" -d '{"cedula":"12345678","correoElectronico":"test@example.com"}'
```

Este método devuelve JSON estructurado de la siguiente manera:

```javascript
{
    "resultado": "Correo de estado de cuenta ha sido enviado"
}
```
