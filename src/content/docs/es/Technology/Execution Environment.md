---
title: Entorno de Ejecución
sidebar:
  order: 9
---

VSC ejecuta transacciones y lógica de contratos inteligentes utilizando un entorno de ejecución determinista y de alto rendimiento construido sobre estándares modernos de arquitectura blockchain. Esta sección describe la estructura de la máquina de estado del protocolo, la capa de ejecución y las herramientas compatibles.

## Estructura central de la máquina de estado

VSC sigue un **diseño tipo rollup**, donde las transacciones se procesan en lotes y se aplican a un estado de cadena compartido. Este enfoque proporciona una clara separación entre la ejecución y el consenso, permitiendo que el sistema tenga:

- Transiciones de estado deterministas.
- Procesamiento de lotes eficiente.
- Lógica de ejecución modular separada del consenso central.

Este diseño permite que VSC evolucione de forma independiente en la capa de ejecución sin perturbar la lógica de consenso o las integraciones externas.

## Validación de transacciones

La validación de transacciones y las actualizaciones de estado en VSC se basan en una **estructura similar a la tolerancia a fallos bizantinos (BFT)**. Los validadores procesan las transacciones entrantes y aplican los cambios de estado solo después de que se alcanza un acuerdo de mayoría cualificada. Esto garantiza:

- Tolerancia a fallos ante la presencia de nodos que se comportan mal o están desconectados.
- Acuerdo sobre el orden de las transacciones válidas.
- Garantías de consistencia y seguridad típicas de los modelos de consenso BFT.

Esto asegura que la red puede mantener la integridad operativa incluso cuando una parte de los validadores está comprometida o falla.

## Entorno de ejecución de contratos inteligentes

VSC soporta contratos inteligentes compilados a *WebAssembly (WASM)**, lo que permite a los desarrolladores construir lógica en cadena (on-chain) en un formato independiente de la plataforma (platform-agnostic). Los contratos WASM se ejecutan en un entorno aislado que impone:

- Comportamiento determinista.
- Límites de stack y memoria.
- Aislamiento del entorno de ejecución del host.

Los desarrolladores se benefician de resultados de ejecución consistentes sin necesidad de aprender un lenguaje específico de dominio.

## Soporte de lenguajes y herramientas

Actualmente, VSC soporta el desarrollo de contratos en:

- **Golang:** – Adecuado para contratos de bajo nivel o centrados en el sistema.
- ~~**AssemblyScript:** Un lenguaje similar a TypeScript con una huella ligera (lightweight footprint) y compatibilidad con WebAssembly.~~

Los contratos pueden ser compilados a WASM y desplegados en la red VSC utilizando SDKs o las herramientas de desarrollo proporcionadas por el protocolo. Apoyar lenguajes familiares y de alto rendimiento reduce la barrera de entrada y el tiempo de implementación (time-to-deploy) para nuevas aplicaciones.

## Características de ejecución

- Todas las interacciones con contratos inteligentes son **sin comisiones**, respaldadas por el modelo de créditos de recursos de Hive.
- La ejecución de los contratos es determinista, lo que se garantiza mediante las restricciones del entorno de ejecución de WASM.
- Las APIs internas de VSC proporcionan acceso a las funciones centrales de la blockchain, a los estados de activos externos y a la lógica de las bóvedas desde dentro de los contratos inteligentes.
