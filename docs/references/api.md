## NOTE: THIS SECTION HAS NOT BEEN UPDATED FOR MAINNET VSC (PROCEED WITH CAUTION)

# API documentation



The VSC API can be used to retrieve various kinds of information about the VSC network. It is the core building block when it comes to creating applications on top of VSC.

Based on GraphQL it provides flexible options to retrieve data. It lets _you_ define the data structure you want to receive. You can read more about GraphQL [here](https://graphql.org/learn/). It is activated per default on all VSC nodes under the path `NODE_IP:1337/api/v1/graphql`.

This url is used for queries in the code, but can also be accessed in the browser (GraphiQL explorer).

We have a public API, accessible to everyone under [https://api.vsc.eco/api/v1/graphql](https://api.vsc.eco/api/v1/graphql). 

This document focuses on the functionalities the API offers, be aware that the state of the API changes frequently in these early stages of development so this document might not be up to date. If a query doesn't work or you think a feature is missing entirely, feel free to contact the VSC dev team on [discord](https://discord.gg/a8eXS7TC)!

## Filter options

Various queries support filters to help you enclose your search. The sample inputs for those filters are listed below.

## Contract state

Allows you to retrieve the (IPFS) data stored by a contract execution. It allows you to retrieve data from specific contract executions, therefore you also have the ability to inspect past executions, which don't represent the current state of the contract anymore.

As an input it takes the id of the `contract output` (a type of VSC transaction). You can find the id's for example [in the block explorer](https://vsc.techcoderx.com/block-by-hash/bafyreigzaqrifacmjw4ecwt2jolu46ommphf3wcow22tjg7fodem7gheoa)(the one transaction).

Example query:
```txt
{
  contractState(id:"bafyreiazuqoxbhmkeygxf5tiifbvy6czjjyk4vot7nproi646gxp6rgcny"){
    id
    stateKeys
  }
}
```

## Contract output

This endpoint helps you to find `contract output` transaction data you need to query the state of your contract execution. Thereby usually those 2 queries are executed sequentially.

Generally this endpoint is queried with the available filter options. Without them it just returns the last contract outputs, which is not a reliable query to get to the contract outputs you care about.

Supported filters

**byInput** -> [contract call id](https://vsc.techcoderx.com/block-by-hash/bafyreic3mmkxy4fw2b23qu73lnbpcnqfn5tcgu623gnj6jyvsfw6xl6yom)
e.g.: `bafyreidwbhe7qrxt2ocpdruikfu3fjktoihgra3ybec3ecni6yd2jlh73e`

**byOutput** -> [contract output id](https://vsc.techcoderx.com/block-by-hash/bafyreigzaqrifacmjw4ecwt2jolu46ommphf3wcow22tjg7fodem7gheoa)
e.g.: `bafyreiazuqoxbhmkeygxf5tiifbvy6czjjyk4vot7nproi646gxp6rgcny`

**byContract** -> contract address
e.g.: `vs41q9c3yg9af6z8ptpc29pujuc9lj99qkwha2vdmwx7ketnyxtlpgv0d97pguchqe9s`

> Nice to know: This is the most convenient method to get the contract output id that represents the current state of the contract. Fetch contract outputs by contract id, sort by recency, specify to return the id and limit the query by one entry. The result should be the contract output id that represents the current state.

Example query:
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

This query can be used to find general transaction data. This query, in contrast to the `contract output` query, is not limited to only finding contract outputs, but all kinds of transaction types (also unconfirmed ones).

Supported filters

**byId** -> transaction id
e.g.: `bafyreidwbhe7qrxt2ocpdruikfu3fjktoihgra3ybec3ecni6yd2jlh73e`

**byStatus** -> transaction confirmation status
e.g.: `CONFIRMED`, `UNCONFIRMED`

**byContract** -> contract address
e.g.: `vs41q9c3yg9af6z8ptpc29pujuc9lj99qkwha2vdmwx7ketnyxtlpgv0d97pguchqe9s`

**byAccount** -> account
e.g.: `did:key:z6Mkfn53NL5m9ncAprAUQpAhceUECRTfiZ7VV3xEcpKERJC4`

**byOpCategory** -> transaction operation category
e.g.: `call_contract`

**byAction** -> entrypoint invoked on contract
e.g.: `processXYZ`, `mint`, `testJSON`

Example query:
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

This query can be used to figure out a node's identity.

```txt
{
  localNodeInfo {
    peer_id
  }
}
```

## Get Account balance

The endpoint serves account balances that are tied to the supplied address.

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

This endpoint is used to submit transactions to the VSC node. If you want to ingest transactions over this endpoint, please use the [VSC client](https://github.com/vsc-eco/client) or get inspiration from it's codebase.

## Other endpoints

The other available endpoints are mainly directed at node operation and power-users of the VSC network. They are not commonly used in normal operation. If you have questions in regards to those endpoints, please consult the VSC devs.