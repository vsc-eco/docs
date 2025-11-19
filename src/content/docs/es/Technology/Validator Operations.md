---
title: Operaciones del validador
sidebar:
  order: 10
---

Esta sección describe las responsabilidades operacionales de los validadores dentro de la red VSC y detalla la arquitectura de seguridad del sistema de bóvedas.

## Roles y responsabilidades del validador

Los validadores en la red VSC tienen las siguientes tareas:

- **Procesamiento de transacciones:** Los validadores reciben y procesan transacciones, ejecutando la lógica asociada del contrato inteligente dentro del entorno de ejecución de VSC.

- **Gestión de estado:** Después de la ejecución, los validadores actualizan el estado local para reflejar los resultados de las transacciones procesadas.

- **Producción de bloques:** Los validadores agregan las transacciones procesadas en bloques y proponen estos bloques a la red para su inclusión en la *blockchain*.

- **Participación en el consenso:** Los validadores participan en el mecanismo de consenso de la red para acordar el estado canónico de la cadena, asegurando la consistencia en todo el sistema distribuido.

## Arquitectura de seguridad de la bóveda

El sistema de bóvedas VSC gestiona de forma segura los activos digitales de cadena cruzada *(cross-chain)* utilizando el control de validación descentralizado y la lógica de contratos inteligentes en cadena. Cada bóveda rastrea y gestiona los activos en su respectiva *blockchain* externa (por ejemplo, las UTXO de Bitcoin) sin depender de un operador central.

Las medidas de seguridad clave incluyen:

- **Control descentralizado:** Una red de validadores, garantizados con colateral, gestiona colectivamente las operaciones de la bóveda a través del consenso, previniendo puntos únicos de fallo.

- **Verificación de transacciones:** Las transacciones entrantes y salientes son validadas y confirmadas en la *blockchain* externa pertinente antes de ser procesadas por la bóveda.

- **Seguridad respaldada por colateral:** Los validadores deben mantener un colateral suficiente. Si el colateral es insuficiente, o si se detecta un comportamiento malicioso, se aplican penalizaciones de confiscación *(slashing)* y los protocolos de emergencia permiten la retirada segura o la recuperación de activos para proteger a los usuarios.

- **Instancias de bóveda dedicadas:** Cada *blockchain* compatible tiene su propia instancia de bóveda dedicada, gestionada de forma independiente por los validadores.

Estos mecanismos garantizan la integridad, seguridad y fiabilidad de los activos almacenados y transaccionados a través de las bóvedas VSC.

Estas características de seguridad salvaguardan colectivamente los activos gestionados dentro de la bóveda VSC, alineándose con las mejores prácticas para la gestión de activos digitales.

## Incorporación y mantenimiento del validador

Para convertirse en un validador activo en la red VSC, las entidades deben:

1. **Registro:** Presentar una solicitud de registro de validador, proporcionando la identificación necesaria y la información de cumplimiento.

2. **Configuración de infraestructura:** Desplegar y configurar el *software* del nodo validador de acuerdo con las especificaciones descritas en la documentación de VSC.

3. **Operación continua:** Mantener el nodo validador, asegurando una alta disponibilidad, actualizaciones de *software* oportunas y el cumplimiento de los parámetros de rendimiento.

Los procedimientos y requisitos detallados para la incorporación y el mantenimiento de validadores están especificados en la documentación del validador de VSC.
