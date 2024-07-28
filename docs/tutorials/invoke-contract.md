# Invoke contract

This guide explains how to invoke a contract on the VSC network via javascript code.

There are currently 2 options to do so. Either by using the _VSC client_ or by sending HIVE layer 1 transactions via e.g. the _@hiveio/dhive_ library.

## Environment setup

We will use a simple NodeJS setup for our contract invocation code. To start we initialize an empty project:

`npm init -y`

Now we will create a file we can put our code in. In this tutorail we will create it in the root of the project.

`/index.js`

For the next step, we edit the package.json file and add a script to start our application.

`"start": "node --experimental-specifier-resolution=node index.js"`

Since we will be using ES modules (import statements), we also need to add the "type": "module" field to our package.json file.

The package.json then may look something like this:

```json
{
  "name": "invoke-contract-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node --experimental-specifier-resolution=node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "type": "module"
}
```

Afterwards, we will install the minimally required packages.

### VSC client based - setup

`npm install @vsc.eco/client dids key-did-provider-ed25519 key-did-resolver`

### HIVE based - setup

`npm install @hiveio/dhive`

## The payload

A VSC transaction usually contains a payload. The payload may be any arbitrary data the contract endpoint accepts.

In our example, we will use a simple JSON with some mock data.

```json
{
    hello: 'World'
}
```

The payload is the most interesting part for developers who build on top of VSC, your contract logic determines what a contract may require as input information.

## The code

We will now populate the `index.js` file with code in order to finally send the transaction.

Depending on the chosen method there are slight differences in the configuration. Regardless, there are a lot of common options like the transaction datastructure that are explained below.

**op**: the type of transaction that is sent (contract invocation = 'call_contract')
**action**: the entrypoint (method name) of the contract that is called
**contract_id**: the id of the contract that we want to invoke
**payload**: the data that is provided to the execution context of the contract invocation

### VSC client based - code

The VSC client setup uses the DID authentification method in this example. For this, we need to provide the private key of our public/ private key pair.

```js
import { vClient, vTransaction, hexToUint8Array } from '@vsc.eco/client'
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import KeyResolver from 'key-did-resolver'

void (async () => {
    const privateKey = 'my-private-key'

    const client = new vClient({
        api: 'https://api.vsc.eco:443',
        loginType: 'offchain'
    })
    const secret = hexToUint8Array(privateKey)
    const keyPrivate = new Ed25519Provider(secret)
    const did = new DID({ provider: keyPrivate, resolver: KeyResolver.getResolver() })
    await did.authenticate()
    
    await client.login(did)
    const tx = new vTransaction()
    tx.setTx({
        op: 'call_contract',
        action: 'testJSON',
        contract_id: 'vs41q9c3ygq38nldzh209g5aw0knllm45px5ycrwx5sv0jxddmd9ve4r0z6frcvv9h2j',
        payload: {
            hello: 'World'
        }
    })
    await tx.broadcast(client);
})()
```

## HIVE based - code

For the HIVE based setup we supply our HIVE account name and our HIVE account posting private key.

```js
import { Client, PrivateKey } from '@hiveio/dhive'

void (async () => {
    const hiveAccount = 'my-hive-account-name'
    const hiveAccountPosting = 'my-hive-posting-key'

    const broadcast = await Client.broadcast.json({

    required_auths: [],
    required_posting_auths: [hiveAccount],
    id: "vsc.tx",
    json: JSON.stringify({
        net_id: "testnet/0bf2e474-6b9e-4165-ad4e-a0d78968d20c",
        __v: '0.1',
        __t: 'native',
        tx: {
            op: 'call_contract',
            action: 'testJSON',
            contract_id: 'vs41q9c3ygq38nldzh209g5aw0knllm45px5ycrwx5sv0jxddmd9ve4r0z6frcvv9h2j',
            payload: {
                hello: 'World'
            }
        }
    })
    }, PrivateKey.fromString(hiveAccountPosting))
})()
```

## Execution

We can now run our example via:

`npm run start`

and should see the newly generated transaction ID in the console.

```js
{
  data: {
    submitTransactionV1: {
      id: 'bafyreienfcot24lizhpml45ileeoy5lsobdtjlb4n7dh3k7z7zlpqpyi6u'
    }
  }
}
```

If you get this response your contract invocation was successfully published to the VSC network!