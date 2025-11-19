---
title: Exploradores de bloques
sidebar:
  order: 15
---

*Por ahora, tenemos un explorador de bloques maduro en nuestro ecosistema.*

[https://vsc.techcoderx.com/](https://vsc.techcoderx.com/)

El explorador de bloques fue creado y es mantenido por _techcoderx_. 

Expone varias métricas de la red VSC, sobre las que daremos más detalles a continuación. 

### Información del bloque

Inspecciona la estructura del bloque de la red VSC en [/blocks](https://vsc.techcoderx.com/blocks).

Haz clic en un hash de bloque para obtener una vista detallada de su contenido. Puedes, por ejemplo, inspeccionar las transacciones incluidas.

### Vista de transacción

Al hacer clic en los hashes de transacción en varias partes del explorador de bloques, se le dirige a la vista de transacción.

Dependiendo del tipo de transacción, esta expone diversa información que es importante en el contexto actual.

Por ejemplo, una invocación de contrato le mostraría el punto de entrada (o acción del contrato) que se ejecutó, así como los parámetros (o el cuerpo de la llamada - *payload*).

Como nota adicional, cuando una invocación de contrato es exitosa y produce una transacción de salida de contrato, el resultado de la transacción de salida del contrato también se muestra en la transacción de invocación del contrato, ¡lo que permite una experiencia de usuario más fluida!

### Información del testigos *(witness)*.

Si alojas un nodo VSC, puedes comprobar si tu nodo está registrado y actualizado en [/witnesses](https://vsc.techcoderx.com/witnesses).

### Información del contrato

Puede comprobar si su contrato se ha implementado correctamente en la red VSC consultando [/contracts](https://vsc.techcoderx.com/contracts).
