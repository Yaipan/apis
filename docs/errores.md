---
id: errores
title: Códigos de Error
sidebar_label: Códigos de Error
---

Los APIs utilizan los siguientes códigos de error:

| Código  |      Mensaje          |  Significado                                         |
| :-----: | --------------------- | ---------------------------------------------------- |
| 400     | Bad Request           | El request es inválido |
| 401     | Unauthorized          | El API key is incorrecto |
| 403     | Forbidden             | El método esta restringido, no tiene suficientes permisos |
| 404     | Not Found             | No se ha encontrado respuesta |
| 405     | Method Not Allowed    | Intentó acceder mediante un método incorrecto |
| 406     | Not Acceptable        | Pidió un formato que no es JSON |
| 429     | Too Many Requests     | Baje la velocidad! |
| 500     | Internal Server Error | Tuvimos un problema, intente de nuevo más tarde |
| 503     | Service Unavailable   | Estamos en mantenimiento, intente de nuevo más tarde |
