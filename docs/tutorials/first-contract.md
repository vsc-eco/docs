# Creating your first smart contract

This tutorial helps you to create your first simple `Hello-world` smart contract!

## Prerequisites

### NodeJS version 16

Our current ecosystem uses NodeJS version 16 LTS.  

You can download the installer for windows [here](https://nodejs.org/dist/v16.20.2/node-v16.20.2-x64.msi).  

If you are also using NodeJS for other projects, that require a different NodeJS version, we recommend [nvm-windows (windows)](https://github.com/coreybutler/nvm-windows) and [nvm (linux)](https://github.com/nvm-sh/nvm). Nvm is an abbreviation for _node version manager_ and helps you to keep track and switch to multiple versions of node on one operating system.

### IPFS

You need IPFS to be able to ingest data into the VSC network.  

For a user friendly desktop application you can use `IPFS Desktop`. It is available for windows/ mac/ ubuntu [here](https://docs.ipfs.tech/install/ipfs-desktop/#install-instructions).

For a more classical cli experience you can refer to the [binary installation tutorials](https://docs.ipfs.tech/install/command-line/#install-official-binary-distributions).

### Git

You need to install Git to clone the template repository. Refer to the [official installation instructions](https://git-scm.com/downloads).

### Hive account

A Hive account is required to deploy the contract to the VSC network, if you dont have one already please visit [signup.hive.io](https://signup.hive.io).

### Environment setup

1) Clone our smart contract template repo locally: `git clone https://github.com/vsc-eco/contract-template.git`
2) `cd contract-template`
3) Open with your favorite code editor. We recommend [visual studio code](https://code.visualstudio.com/download)
4) install the node modules: `npm i`

### Code the contract

The file that is used as an initial compilation target for the contract is `assembly/index.ts`.

By default, it is filled with sample code. We will remove all existing code from the file so that it is empty.

> For our simple example we will write a contract with one entrypoint that logs and stores `Hello world`.

We start by defining an entrypoint method. The methods name is important, it is also the name that is used to interact with the contract afterwards!

> It is also important that you _export_ the method. Only exported methods can be used as contract entrypoints.

```typescript
export function MyFirstContractTest(): void {
  
}
```

Then we start populating this method with some code. We will use the built in `console.log` mechanics to log and `db.setObject()` from the VSC sdk to store data inside of the contract.

To learn more about the exposed functionalities of the VSC sdk visit [this document](../references/sdk.md).

```typescript
import { db } from '@vsc.eco/sdk/assembly';

export function myFirstContractTest(): void {
  console.log("Hello world debug!")
  db.setObject("my-storage-key", "Hello world prod!")
}
```

### Test

For testing our contract, we use [_jest_](https://jestjs.io/).

The file we are going to write our tests under is `tests/index.ts`. It also contains sample code that can be removed. Don't remove the entire testing suite, though!

The basic setup after the removal of the sample code looks like this.

```typescript
import {
  contract,
  reset,
  stateCache,
  setContractImport,
} from "@vsc.eco/contract-testing-utils";

import { expect } from "chai";
const beforeAll = globalThis.beforeAll || globalThis.before;

const contractImport = import("../build/debug");

beforeAll(() => setContractImport(contractImport));

beforeEach(reset);

describe("hello-world", () => {

});
```

We can now start to implement our test. For that, we use _jest's_ commonly used `it()` syntax and insert expect statements to the test suite can verify our results. For now, we will test if a contract invocation actually changes the contract state. This may look like this:

```typescript
import {
  contract,
  reset,
  stateCache,
  setContractImport,
} from "@vsc.eco/contract-testing-utils";

import { expect } from "chai";
const beforeAll = globalThis.beforeAll || globalThis.before;

const contractImport = import("../build/debug");

beforeAll(() => setContractImport(contractImport));

beforeEach(reset);

describe("hello-world", () => {
  it("should set a value in persisting storage", () => {
    contract.myFirstContractTest()
  
    expect(stateCache.get("my-storage-key")).to.equal("Hello world prod!");
  });
});

```

But before we can execute the test, we need to compile our assembly script code to webassembly (the more generic, language agnostic compilation target).  

> We need to recompile every time we have done some changes on the assembly script code! 

For that we use:

`npm run asbuild:debug`

> As a side note, `assembly/index.ts` is _assembly script_ code. It looks similar to typescript, but is a superset of it. The tests are written in _typescript_ and what is being compiled to a contract is just the _assembly script_ code.

Now we can run the tests with:

`npm run test`

The tests should succeed and we should see the log `Hello world debug!` in our console. If this is the case for you, you are good to go!

### Deploy

The `contract-template` repository contains a deployment script to upload your contract to the VSC network. Keep in mind that an IPFS client needs to be running for a successful operation.

We can run the deployment script with:

`npm run deploy`

### Validate

The deployed contract should now be visible [in the block explorer](../references/block-explorers.md#contract-information).

Now it's time to invoke our contract's `MyFirstContractTest` method on the VSC network.

For that, we are going to create a small demo application that makes use of the _VSC client_. Please [refer to this guide](../tutorials/invoke-contract.md) for how to do so. After you created the application and sent the transaction to the VSC network come back to this guide.  

After a short amount of time, after the submission of the transaction, we should be able to see our transaction included in one of the latest VSC blocks.  

First, we should see a `CALL_CONTRACT` operation. This transaction is the directly linked to our transaction submission.

In the consecutive block, we should see a `CONTRACT_OUTPUT` transaction. This is the actual processed result by the network.  

We verify the functionality of our method, by checking the contract storage. Whilst the outputs of log method calls are also attached to a `CONTRACT_OUTPUT`, it is _NOT_ the recommended way of debugging a contract on the live network.  

We expect the contract state to contain a key by the name of `my-storage-key` with the value `Hello world prod!`.

To check the contract's current state please refer to the [API documentation](../references/api.md#contract-state).

If your contract's state contains this data, congratulations! You have successfully created, tested and deployed your first contract on the VSC network!