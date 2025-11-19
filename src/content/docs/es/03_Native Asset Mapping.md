---
title: Asignación de Activos Nativos
sidebar:
  order: 4
---

**La Asignación de activos nativo _(Native Asset Mapping)_** es la principal característica innovadora del protocolo VSC que permite a los usuarios enviar y recibir activos nativos entre direcciones de billetera de distintas cadenas de bloques, a través de VSC, reduciendo las preocupaciones sobre la compatibilidad de cadenas.

Permite a los usuarios enviar, por ejemplo, **SOL de una billetera de Solana a una dirección de billetera de Ethereum**. El receptor recibe **SOL nativo**, visible y utilizable en VSC cuando inicia sesión con su billetera de Ethereum. Los *tokens* SOL recibidos permanecen en la bóveda VSC en la red principal de Solana y están asegurados por el sistema de validadores del protocolo VSC. Al completar la transacción, la propiedad de esos *tokens* se transfiere a la cuenta que recibe el SOL.

## Cómo funciona

La asignación de activos nativo vincula la dirección de una única billetera del usuario (por ejemplo, ETH) a su cuenta VSC, permitiéndole recibir activos nativos desde cualquier *blockchain* compatible, incluso si esos activos se originan en una cadena diferente a la billetera que conectó.

1. El usuario se conecta a VSC utilizando una billetera, por ejemplo, su billetera de Solana.
2. El emisor deposita *tokens* Sol en VSC. En la opción "transferir", el emisor introduce la dirección ETH del receptor. (Esto difiere de los intercambios atómicos entre cadenas, otra funcionalidad clave de VSC).
3. VSC asigna el activo entrante a la dirección ETH en su registro interno. (Las transferencias dentro de VSC **no incurren en tarifas de transacción directas para los usuarios**).
4. El receptor inicia sesión con su billetera ETH y ve el activo depositado (por ejemplo, SOL).
5. El receptor ahora puede **intercambiar**, **retirar** o **usar** el activo dentro de VSC.

## Implicaciones

Con la asignación de activos nativo, solo necesitas compartir una única dirección de billetera para recibir pagos, independientemente de la red en la que se encuentren el emisor o tú, el receptor. No hay necesidad de administrar múltiples billeteras ni de preocuparse por la compatibilidad entre *blockchains*. Los usuarios ya no tienen que pensar en qué red están ellos o los demás. Los fondos se pueden enviar y recibir sin problemas, sin fricción, confusión o la necesidad de conocimiento técnico. Este modelo establece un nuevo estándar para la experiencia del usuario (UX) en el mundo cripto. **Este enfoque busca simplificar la experiencia del usuario al reducir la fragmentación entre _blockchains_, avanzando hacia un sistema más unificado diseñado para una mayor usabilidad**.

- Hace que las transacciones criptomonedas sean tan sencillas como enviar un correo electrónico a una sola dirección.
- Elimina la necesidad de activos envueltos _(wrapped assets)_ custodiados y del **salto entre cadenas _(chain-hopping)_**.
- Abstrae la complejidad técnica de las transacciones en criptomonedas.
- Potencia los pagos globales, la adopción por parte de comercios y el uso de remesas.
- Permite que VSC sirva como una capa de liquidación unificada dentro de su red de *blockchains* compatibles. El protocolo VSC mantiene el registro de quién posee qué, a lo largo de todas las cadenas compatibles, de forma definitiva, con irrevocabilidad.
