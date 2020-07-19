---
id: autenticacion
title: Autenticación
sidebar_label: Autenticación
---

## Autenticación

La autenticacón al servicio REST se maneja por medio de un API token. Para cada llamada que se hace, se debe incluir un header de autorización con el siguiente formato:

```javascript
Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=
```

:::caution

El valor 'RyNrhel3gtc92+4/Ml0RjbXTsJU=' es un valor de ejemplo.

:::

## Ejemplo

```javascript
curl -H "Authorization: Token RyNrhel3gtc92+4/Ml0RjbXTsJU=" ...
```
