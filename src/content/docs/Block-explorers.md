---
title: Block Explorers
sidebar:
  order: 15
---


*For now we have one mature block explorer in our ecosystem.*  

[https://vsc.techcoderx.com/](https://vsc.techcoderx.com/)

The block explorer was created and is maintained by _techcoderx_.

It exposes various metrics of the VSC network, which we elaborate on further below. 

### Block information

Inspect the block structure of the VSC network under [/blocks](https://vsc.techcoderx.com/blocks).

Click on a block hash to get a detailed view of its content. You can, for example, inspect the included transactions.

### Transaction view

By clicking on transaction hashes in various parts of the block explorer you are thrown into the transaction view.

Depending on the transaction type it exposes various information that is important in the current context.

For example, a contract invocation would show you the entrypoint/ contract action that was executed and the parameters/ payload.  

As a side note, when a contract invocation was successful and produced a contract output transaction, the result of the contract output transaction is also shown on the contract invocation transaction for a more seamless user experience!

### Witness information

If you host a VSC node you can checkout if your node is registered and up to date under [/witnesses](https://vsc.techcoderx.com/witnesses).

### Contract information

You can check if your contract was successfully deployed to the VSC network by checking [/contracts](https://vsc.techcoderx.com/contracts).