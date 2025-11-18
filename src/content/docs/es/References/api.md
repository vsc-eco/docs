---
title: API
sidebar:
  order: 11
---


#### *NOTA: ESTA SECCIÓN NO HA SIDO ACTUALIZADA PARA LA RED PRINCIPAL (MAINNET) VSC (PROCEDER CON PRECAUCIÓN)*

# Documentación de la API

La API de VSC se puede usar para recuperar diversos tipos de información sobre la red VSC. Es el bloque de construcción central a la hora de crear aplicaciones sobre VSC.

Basada en GraphQL, proporciona opciones flexibles para recuperar datos. Te permite definir la estructura de datos que deseas recibir. Puedes leer más sobre GraphQL [aquí](https://graphql.org/learn/). Está activada por defecto en todos los nodos VSC bajo la ruta `NODE_IP:1337/api/v1/graphql`.

Esta URL se utiliza para consultas en el código, pero también se puede acceder a ella en el navegador (explorador GraphiQL).

Tenemos una API pública, accesible para todos en [https://api.vsc.eco/api/v1/graphql](https://api.vsc.eco/api/v1/graphql).

Este documento se centra en las funcionalidades que ofrece la API. Ten en cuenta que el estado de la API cambia frecuentemente en estas etapas tempranas de desarrollo, por lo que este documento podría no estar actualizado. Si una consulta no funciona o crees que falta una característica por completo, ¡no dudes en contactar al equipo de desarrollo de VSC en [Discord](https://discord.gg/a8eXS7TC)!

## Opciones de filtro

Diversas consultas admiten filtros para ayudarte a acotar tu búsqueda. A continuación, se enumeran los ejemplos de datos de entrada para dichos filtros.

## Contract state

Permite recuperar los datos (IPFS) almacenados por una ejecución de contrato. Te da la capacidad de recuperar datos de ejecuciones de contrato específicas y, por lo tanto, también tienes la posibilidad de inspeccionar ejecuciones pasadas, las cuales ya no representan el estado actual del contrato.

Como dato de entrada, toma la ID del `contract output` (un tipo de transacción VSC). Puedes encontrar las ID, por ejemplo, [en el explorador de bloques](https://vsc.techcoderx.com/block-by-hash/bafyreigzaqrifacmjw4ecwt2jolu46ommphf3wcow22tjg7fodem7gheoa) (la transacción única).

Ejemplo de consulta:
```txt
{
  contractState(id:"bafyreiazuqoxbhmkeygxf5tiifbvy6czjjyk4vot7nproi646gxp6rgcny"){
    id
    stateKeys
  }
}
```

## Contract output

Este endpoint te ayuda a encontrar los datos de transacción del `contract output` que necesitas para consultar el estado de la ejecución de tu contrato. Por lo tanto, normalmente estas dos consultas se ejecutan secuencialmente.

Generalmente, este endpoint se consulta utilizando las opciones de filtro disponibles. Sin ellas, solo devuelve las últimas salidas de contrato, lo cual no es una consulta fiable para obtener los resultados de contrato que te interesan.

Filtros admitidos

**byInput** -> [ID de la llamada al contrato](https://vsc.techcoderx.com/block-by-hash/bafyreic3mmkxy4fw2b23qu73lnbpcnqfn5tcgu623gnj6jyvsfw6xl6yom),
por ejemplo: `bafyreidwbhe7qrxt2ocpdruikfu3fjktoihgra3ybec3ecni6yd2jlh73e`

**byOutput** -> [ID de la salida del contrato](https://vsc.techcoderx.com/block-by-hash/bafyreigzaqrifacmjw4ecwt2jolu46ommphf3wcow22tjg7fodem7gheoa),
por ejemplo: `bafyreiazuqoxbhmkeygxf5tiifbvy6czjjyk4vot7nproi646gxp6rgcny`

**byContract** -> Dirección del contrato,
por ejemplo: `vs41q9c3yg9af6z8ptpc29pujuc9lj99qkwha2vdmwx7ketnyxtlpgv0d97pguchqe9s`

> Dato útil: Este es el método más conveniente para obtener la ID del resultado del contrato que representa el estado actual del contrato. Recupera las salidas del contrato por la ID del contrato, ordena por antigüedad, especifica que devuelva solo la ID y limita la consulta a una sola entrada. El resultado debería ser la ID de la salida del contrato que representa el estado actual.

Ejemplo de consulta:

```txt
{
  findContractOutput(filterOptions: {byContract: "vs41q9c3yg9af6z8ptpc29pujuc9lj99qkwha2vdmwx7ketnyxtlpgv0d97pguchqe9s", limit: 1}) {
    outputs {
      id
    }
  }
}
```

## Find transaction
Esta consulta se puede usar para encontrar datos generales de transacciones. Esta consulta, a diferencia de la consulta `contract output`, no se limita a encontrar solo salidas de contrato, sino todo tipo de transacciones (incluidas las no confirmadas).


Filtros admitidos

**byId** -> ID de la transacción,
por ejemplo: `bafyreidwbhe7qrxt2ocpdruikfu3fjktoihgra3ybec3ecni6yd2jlh73e`

**byStatus** -> Estado de confirmación de la transacción,
por ejemplo: `CONFIRMED`, `UNCONFIRMED`

**byContract** -> Dirección del contrato,
por ejemplo: `vs41q9c3yg9af6z8ptpc29pujuc9lj99qkwha2vdmwx7ketnyxtlpgv0d97pguchqe9s`

**byAccount** -> Cuenta,
por ejemplo: `did:key:z6Mkfn53NL5m9ncAprAUQpAhceUECRTfiZ7VV3xEcpKERJC4`

**byOpCategory** -> Categoría de la operación de transacción,
por ejemplo: `call_contract`

**byAction** -> Punto de entrada invocado en el contrato,
por ejemplo: `processXYZ`, `mint`, `testJSON`

Ejemplo de consulta:

```txt
{
  findTransaction(filterOptions: {byContract: "vs41q9c3yg9af6z8ptpc29pujuc9lj99qkwha2vdmwx7ketnyxtlpgv0d97pguchqe9s", limit: 1}) {
    txs {
      id
      first_seen
      anchored_height
    }
  }
}
```

## Local node info

Esta consulta se puede usar para determinar la identidad de un nodo.

```txt
{
  localNodeInfo {
    peer_id
  }
}
```

## Get Account balance

Este endpoint proporciona los balances de la cuenta que están vinculados a la dirección suministrada.

```txt
{
  getAccountBalance(account: "hive:vaultec") {
    account
    tokens {
      HBD
      HIVE
    }
  }
}
```

## Submit Transaction V1

Este endpoint se utiliza para enviar transacciones al nodo VSC. Si deseas ingresar transacciones a través de este endpoint, utiliza el [cliente VSC](https://github.com/vsc-eco/client) u obtén inspiración de su base de código.

## Otros endpoints

Los otros endpoints disponibles están dirigidos principalmente a la operación del nodo y a usuarios avanzados de la red VSC. No se utilizan comúnmente en la operación normal. Si tienes preguntas sobre estos endpoints, consulta a los desarrolladores de VSC.
