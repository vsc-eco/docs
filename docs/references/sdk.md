## NOTE: THIS SECTION HAS NOT BEEN UPDATED FOR MAINNET VSC (PROCEED WITH CAUTION)

# SDK

The VSC sdks are libraries that abstract away various functionalities that are useful in the context of coding a VSC smart contract.

> Nice to know: They also serve access to e.g. the smart contract's database layer by exposing namespaces and interfaces. At the stage of the contract execution, invocations of such interfaces are translated to generalized calls of the VSC node. Thereby ensuring that those functionalities are equal regardless of the language implementation of the SDK.

## VSC javascript (assemblyscript) sdk

The [VSC javascript sdk](https://github.com/vsc-eco/sdk) is a library that is compatible with assemblyscript projects, thereby it can be used directly in the [contract template](git@github.com:vsc-eco/contract-template.git). It is included in the project by default.

The API documentation can be found [here](https://vsc-eco.github.io/sdk/).

### Example usage

Import the library.

```typescript
import { db, console } from "@vsc.eco/sdk/assembly";
```

Execute a function.

```typescript
export function mySampleMethod(payload: String): string {
  ...
  db.setObject("key-1", payload);
  const val = db.getObject("key-1");
  console.log(val)
  ...
}
```

### Frequently used

**namespace db**
- db.setObject
- db.getObject

**namespace arrays**
- Arrays.toHexString
- Arrays.fromHexString

**namespace console**
- console.log

**no namespace**
- getEnv