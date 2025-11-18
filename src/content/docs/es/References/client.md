---
title: Cliente VSC
sidebar:
  order: 12
---


#### *NOTA: ESTA SECCIÓN NO HA SIDO ACTUALIZADA PARA LA RED PRINCIPAL (MAINNET) VSC (PROCEDER CON PRECAUCIÓN)*

# Cliente VSC

Los clientes VSC son librerías que ofrecen un conjunto de envoltorios *(wrappers)* y capas de abstracción para comunicarse más fácilmente con la red VSC.

## Cliente VSC de Javascript

La documentación de la API se puede encontrar [aquí](https://vsc-eco.github.io/client/).

### Instalación

El [cliente javascript VSC](https://github.com/vsc-eco/client) se puede instalar a través de [_npm_](https://www.npmjs.com/package/@vsc.eco/client).

`npm i @vsc.eco/client`

### Inicios de sesión en la cuenta

Puedes elegir entre varios métodos de inicio de sesión para autenticarte en la red VSC. A continuación se enumeran las opciones actualmente disponibles para este cliente.

Para obtener más información, como crear una cuenta para un tipo de cuenta específico, visita [este documento](../../references/account-types/).

#### DID | Clave pública/privada

Puedes usar tu billetera compatible con _ed25519_ generado con el cliente VSC de la siguiente manera:

1. Convierte la clave privada a bytes hexadecimales.
2. Registra un nuevo _Ed25519Provider_ con _converted secret_.
3. Genera un DID y autentícalo.
4. Inicia sesión en el cliente VSC.

```js reference
https://github.com/vsc-eco/client/blob/main/src/tests/testBench.ts#L11-L20
```

En el ejemplo anterior la clave privada que se utiliza es **44ab29dc82f227322cb924cdc66815da8edc9cb0b409f5ced26ced57e6077aa6**.

#### Ethereum (ETH)

Puedes usar tu billetera de Ethereum con el cliente VSC siguiendo los pasos a continuación:

1. Aplica el hash sha256 a tu clave privada y conviértela a hexadecimal.
2. Haz referencia a la cuenta en el proveedor Web3.
3. Usa el proveedor para autenticar tu cliente VSC.

```js reference
https://github.com/vsc-eco/client/blob/main/src/tests/ethTest.ts#L15-L46
```

En el ejemplo anterior, la clave privada que se utiliza es **44ab29dc82f227322cb924cdc66815da8edc9cb0b409f5ced26ced57e6077aa6**.

### Funcionalidades

#### Invocar contratos

Puedes invocar contratos a través del cliente VSC. Tenemos una [guía separada](../../tutorials/invoke-contract/) sobre cómo hacerlo.

#### Llamadas a la API

Aún no hemos implementado abstracciones API en el cliente VSC.
