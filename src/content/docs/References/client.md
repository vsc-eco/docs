---
title: Magi client
sidebar:
  order: 12
---


## NOTE: THIS SECTION HAS NOT BEEN UPDATED FOR MAINNET Magi (PROCEED WITH CAUTION)

# Magi client

The Magi clients are libraries that serve a set of wrappers and abstraction layers to more easily communicate with the Magi network.

## Magi javascript client

The API documentation can be found [here](https://vsc-eco.github.io/client/).

### Installation

The [Magi javascript client](https://github.com/vsc-eco/client) can be installed via [_npm_](https://www.npmjs.com/package/@vsc.eco/client).

`npm i @vsc.eco/client`

### Account logins

You choose from various login methods to authenticate yourself on the Magi network. Listed below are the currently available options for this client.

For more information, like creating an account for a specific account type, visit [this document](../references/account-types.md).

#### DID | Private/ Public key

You can use your generated _ed25519_ compatible wallet with the Magi client in the following way.

1. convert the private key into hex bytes
2. register a new _Ed25519Provider_ with the converted secret
3. generate a DID and authenticate it
4. login to the Magi client

```js reference
https://github.com/vsc-eco/client/blob/main/src/tests/testBench.ts#L11-L20
```

In the example above the private key that is used is **44ab29dc82f227322cb924cdc66815da8edc9cb0b409f5ced26ced57e6077aa6**.

#### ETH

You can use your Ethereum wallet with the Magi client by following the steps below.

1. sha256 hash your private key and convert it to hex
2. reference the account in the Web3 provider
3. use the provider to authenticate your Magi client

```js reference
https://github.com/vsc-eco/client/blob/main/src/tests/ethTest.ts#L15-L46
```

In the example above the private key that is used is **44ab29dc82f227322cb924cdc66815da8edc9cb0b409f5ced26ced57e6077aa6**.

### Functionalities

#### Invoke contracts

You can invoke contracts via the Magi client. We have a [separate guide](../tutorials/invoke-contract.md) on how to do so.

#### API calls

We have not yet implemented API abstractions in the Magi client.  
