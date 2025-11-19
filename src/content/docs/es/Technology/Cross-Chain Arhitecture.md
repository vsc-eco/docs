---
title: Arquitectura Cross-Chain
sidebar:
  order: 8
---

Esta sección describe cómo VSC se interconecta con *blockchains* externas, procesa las transacciones entrantes, gestiona las bóvedas y garantiza la seguridad durante las operaciones de cadena cruzada *(Cross-Chain)*.

## Interfaz con cadenas externas

VSC se interconecta con cadenas externas a través de una combinación de:

- **Clientes ligeros de _blockchain_.**
- **Pruebas de conocimiento cero _(Zero-knowledge proofs - ZKPs)_.**
- **Esquemas de firma umbral (TSS).**

Estos componentes permiten a VSC operar sin la necesidad de una autoridad central o un tercero de confianza *(trustlessly)* y sin custodios centralizados. Esta arquitectura elimina la necesidad de custodios centralizados, permitiendo a los usuarios interactuar con *blockchains* externas sin renunciar al control de sus activos.

## Flujo de transacciones entrantes

Las transacciones entrantes de cadenas externas se procesan de la siguiente manera:

1. **Los retransmisores _(relays)_** monitorean e indexan eventos o transacciones en las cadenas compatibles.
2. Estas transacciones son **transmitidas a la red VSC**, donde son validadas utilizando el cliente ligero de *blockchain* apropiado.
3. Una vez validada, la transacción desencadena una operación en VSC, como por ejemplo:

   - La acuñación de un *token* *(Minting)*.
   - La ejecución de un intercambio *(swap)*.
   - La realización de una llamada a contrato *(contract call)*.

Esto garantiza que las acciones externas se reflejen de forma segura dentro del ecosistema VSC.

## Estructura de bóveda

A cada cadena externa compatible se le asigna una **bóveda dedicada** en VSC. Las bóvedas son contratos inteligentes que:

- Funcionan de manera similar a carteras inteligentes *(smart wallets)*.
- Supervisan los saldos en cadenas externas.
- Operan de manera totalmente descentralizada **sin un único punto de control**.

Las bóvedas dedicadas por cadena proporcionan aislamiento de fallos, limitando el impacto de los fallos específicos de la cadena en el sistema VSC en general.

### Lógica específica de Bitcoin

Para Bitcoin, las bóvedas rastrean las UTXO *(Unspent Transaction Outputs)* en la red principal de Bitcoin. El contrato inteligente de la bóveda mantiene:

- Un registro de las UTXO entrantes confirmadas y validadas.
- La autoridad para determinar qué UTXO se pueden gastar.

Esto permite el manejo seguro de las entradas y salidas de Bitcoin directamente desde la capa de contratos VSC.

## Coordinación del movimiento de activos

Una vez que las transacciones entrantes son validadas, los activos son:

- **Acreditados** a la bóveda VSC pertinente.
- **Gestionados** por el contrato de la bóveda.
- **Desembolsados** en solicitudes salientes al gastar UTXO o realizar una acción equivalente en la cadena externa.

Este sistema permite un movimiento fluido de activos y auditable entre VSC y las cadenas externas.

## Mecanismos de seguridad y respaldo

Las bóvedas están aseguradas por una **mayoría cualificada  de 2/3** de los validadores que utilizan TSS (Esquemas de Firma Umbral). Los validadores deben estar garantizados con colateral, que actúa como una garantía de seguridad. Este diseño de respaldo minimiza el riesgo del usuario, garantizando la seguridad de los activos incluso en condiciones volátiles.

### Condiciones de emergencia

Si el colateral resulta insuficiente o los validadores son comprometidos, se desencadena un **mecanismo de respaldo**. Esto puede implicar:

- Mover los activos de VSC a la respectiva cadena L1 (Capa 1).
- Convertir los activos a una forma más segura.
- Detener la actividad de la bóveda temporalmente.

Este mecanismo está modelado de forma similar al sistema de **manejo de emergencias de Chainflip**.
