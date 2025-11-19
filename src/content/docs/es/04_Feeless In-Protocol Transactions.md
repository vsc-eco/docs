---
title: Transacciones dentro del protocolo sin comisiones
sidebar:
  order: 5
---

VSC ofrece a los usuarios una **experiencia sin comisiones** para las interacciones en la cadena al adoptar un sistema similar al **sistema de crédito de recursos (RC) de la _blockchain_ de Hive**, el cual asigna ancho de banda en lugar de cobrar las tarifas de gas tradicionales. Este enfoque elimina las tarifas de gas tradicionales de la experiencia del usuario mientras preserva la descentralización y la integridad de la red. Permite una incorporación y un uso escalables y de baja fricción, adecuados para aplicaciones masivas. La diferencia es que VSC utiliza HBD como base para la distribución de RC, mientras que Hive utiliza HIVE en *staking* (HP).

## ¿Qué son los créditos de recursos *(Resource Credits - RC)*?

VSC utiliza un modelo de **crédito de recursos (RC)** en lugar de las tarifas de transacción convencionales. Los RC actúan como un sistema interno de asignación de ancho de banda, asegurando el uso justo de la red sin requerir pagos en un *token* nativo por cada acción.

- Los RC **no son _tokens_ comerciables**.
- Están **vinculados a la cantidad de HBD** que posee una cuenta.
- Los RC a menudo son delegados automáticamente a los usuarios por las dApps y otros proyectos asociados a Hive, como VSC, creando una experiencia instantánea sin gas *(gasless)*.
- Cada cuenta de usuario tiene un fondo de RC que **se regenera con el tiempo** a una tasa de aproximadamente el 25% por día, alcanzando su capacidad máxima en unos 4 días si no se utiliza.

Los RC se **consumen** cuando un usuario realiza acciones en la cadena, tales como:

- Transferir *tokens*
- Publicar o comentar
- Firmar transacciones
- Interactuar con contratos inteligentes o dApps construidas sobre Hive

## Cómo VSC utiliza los créditos de recursos (RC)

VSC está construido sobre la *blockchain* de Hive y **utiliza directamente el sistema de RC de Hive** para cubrir los costes computacionales y de ancho de banda de las transacciones de los usuarios. En lugar de cobrar tarifas de gas, VSC se basa en estos créditos que se regeneran, lo que permite:

- **Interacciones de usuario efectivamente sin comisiones bajo condiciones de uso típicas:** Los usuarios no necesitan poseer ni gastar ningún *token* para interactuar con la red.

- **Incorporación simplificada:** Sin compras de *tokens* iniciales ni gestión compleja de tarifas, ideal para usuarios no familiarizados con las criptomonedas.

- **Escalabilidad predecible:** Dado que los RC se regeneran y están vinculados al *stake* de la cuenta, las aplicaciones pueden modelar las necesidades de recursos a lo largo del tiempo y delegar poder en consecuencia.


## Implicaciones para desarrolladores y usuarios

### Para usuarios

- **Sin tarifas de gas:** La interacción con VSC no requiere que el usuario gaste HIVE, HBD o cualquier otro *token* para las transacciones.
- **Regeneración automática:** Los RC se recargan con el tiempo.
- **Límites basados en el uso:** El uso intensivo agota temporalmente los RC; la actividad se reanuda a medida que se recargan, o el usuario deposita más HBD. Actualmente, poseer valores de HBD de un solo dígito en dólares cubre el uso promedio diario de transacciones. Generalmente, esto no es un problema debido a que proyectos como VSC o las dApps de Hive cubren el gasto de RC de los usuarios.

### Para desarrolladores

- **Modelos de delegación:** Las aplicaciones pueden delegar Hive Power a los usuarios o a cuentas de servicio para garantizar una disponibilidad adecuada de RC.
- **Experiencia de usuario sin comisiones:** Permite el diseño de aplicaciones amigables para el público masivo sin la fricción de las tarifas de transacción.
- **Planificación de capacidad:** Los desarrolladores pueden estimar la cantidad de Hive Power necesaria para soportar un volumen determinado de actividad basándose en los perfiles de uso de RC. A medida que la actividad de los usuarios crece, las aplicaciones se benefician de una mayor interacción, formando un sistema simbiótico en el que el uso y el aprovisionamiento de recursos se refuerzan mutuamente.

## Consideraciones

Aunque el modelo de creditos de recursos (RC) ofrece una experiencia sin comisión, es importante señalar que:

- **El uso de alta frecuencia** puede llevar al agotamiento temporal de los RC. Esto no conlleva una tarifa, pero retrasa las transacciones posteriores hasta que los RC se recarguen.
- **Las aplicaciones deben gestionar el HBD de forma efectiva**, ya sea manteniendo reservas o utilizando la delegación para dar soporte a los usuarios activos.
- **El acceso respaldado por _stake_** favorece la sostenibilidad y reduce el abuso, alineando los incentivos con la salud de la red.

---

## Conclusión

La adopción por parte de VSC del sistema RC de Hive permite una experiencia de *blockchain* sin comisiones, escalable y fácil de usar. Al abstraer las tarifas de gas y utilizar créditos regenerativos, VSC proporciona una plataforma para la adopción masiva sin comprometer la descentralización o el rendimiento.

Para los desarrolladores, este modelo fomenta una gestión reflexiva de los recursos al tiempo que abre la puerta a aplicaciones tan fluidas como los servicios web tradicionales.
