---
title: Usando VSC
sidebar:
  order: 2
---

*Introducción a los conceptos que ayudan a comprender los servicios que VSC puede proporcionar.*

## Creadores de mercado automatizados (Automated Market Makers - AMMs) y fondos de liquidez

**Los Creadores de Mercado Automatizados (AMMs)** son un componente clave del ecosistema de finanzas descentralizadas (DeFi) de VSC. Los AMMs permiten a los usuarios intercambiar activos automáticamente a través de fondos de liquidez, sin necesidad de libros de órdenes centralizados o creadores de mercado tradicionales. Este sistema proporciona liquidez en el protocolo VSC, lo que permite realizar intercambios de activos entre cadenas (asset swaps across chains).

## ¿Qué Son los fondos de liquidez (LPs)?

Los fondos de liquidez (LPs) son colecciones de dos o más activos (tokens) que están bloqueados en un contrato inteligente. Estos fondos son utilizados por los **creadores de mercado automatizados (AMMs)** para facilitar el comercio descentralizado y asegurar la liquidez para los usuarios que interactúan con el protocolo.

En VSC, los fondos de liquidez están diseñados para emparejar un activo volátil (como Bitcoin, Ethereum, Solana, etc.) con un activo estable: **HBD (Hive Backed Dollars)**. Esta estructura tiene como objetivo gestionar el riesgo de la volatilidad en la provisión de liquidez, haciéndola más predecible para los usuarios que aportan dicha liquidez.

## Creación y emparejamiento del fondo de liquidez (LP)

Todo fondo de liquidez en VSC implica emparejar un activo volátil (como BTC, ETH, SOL) con **HBD**. Por ejemplo, un fondo de liquidez **BTC/HBD** contendría tanto tokens BTC como HBD. Al proporcionar liquidez a este fondo, los proveedores de liquidez (LPs) depositan valores iguales de ambos activos (por ejemplo, una cantidad de BTC y una cantidad equivalente de HBD) en el fondo.

## El rol de HBD

**HBD**, la stablecoin de VSC, funciona como el **activo base** en todos los fondos de liquidez. Esto significa que cada par de liquidez incluye a **HBD** como uno de los activos.

El rol de HBD como stablecoin mitiga los riesgos asociados a la volatilidad. Dado que HBD está respaldado algorítmicamente, los Proveedores de Liquidez (LPs) están expuestos a una volatilidad de un solo lado - la del activo volátil en el par (por ejemplo, BTC, ETH, HIVE). Esto reduce la complejidad de cubrirse (hedging) contra múltiples activos volátiles.

## Algoritmo del creador de mercado automatizado (AMM)

VSC utiliza un algoritmo de **creador de mercado automatizado (AMM)** para mantener el balance de los activos en el fondo de liquidez. Cuando un usuario realiza un intercambio (trade) (por ejemplo, intercambiar BTC por HBD o viceversa), el AMM ajusta la proporción de activos en el fondo automáticamente.

## Ingresos por comisiones (Earning Fees)

Los proveedores de liquidez (LPs) son recompensados con ingresos de comisiones por transacción en proporción a su contribución al fondo (pool). Cada vez que alguien intercambia activos a través del fondo, se cobra una pequeña comisión, que es distribuida entre los LPs como recompensa por suministrar liquidez.

Los proveedores de liquidez (LPs) pueden obtener recompensas de forma continua, haciendo de la provisión de liquidez una oportunidad de ingreso pasivo dentro del ecosistema de VSC.

## Ejecutar un nodo y bloquear (staking) HIVE como Garantía

Para participar en los mecanismos de validación y seguridad de VSC, los usuarios pueden optar por ejecutar un **nodo validador** o bloquear (stake) HIVE como garantía.

- **Ejecutar un Nodo:** Para convertirse en un validador en la red descentralizada de VSC, los usuarios deben ejecutar un nodo que participe activamente en la verificación de transacciones y en la seguridad de los activos bloqueados en la plataforma. Ejecutar un nodo contribuye al sistema de validación descentralizada de VSC y garantiza el funcionamiento correcto del protocolo.

- **Bloquear (Staking) HIVE:** Se requiere que los validadores mantengan bloqueado (stake) un mínimo de **2.000 tokens HIVE** como garantía. Esta garantía se utiliza para asegurar la red e incentivar el comportamiento honesto. Los validadores que actúen de forma maliciosa o no cumplan con sus obligaciones (duties) pueden perder parte del sus HIVE bloqueados.

- **Interacción con VSC (ALTERA):** Altera es la primera dApp (aplicación descentralizada) de VSC, una plataforma para gestionar activos e intercambios entre cadenas (cross-chain swaps) dentro de VSC. Permite a los usuarios llevar a cabo la gestión de activos, ejecutar intercambios entre cadenas e interactuar con el ecosistema VSC. Altera es compatible con transacciones y seguimiento de activos a través de múltiples blockchains, proporcionando una interfaz unificada que simplifica las actividades de finanzas descentralizadas (DeFi) sin requerir que los usuarios gestionen los detalles técnicos de cada blockchain individual.
