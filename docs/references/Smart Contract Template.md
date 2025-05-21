# Smart Contract Template

Smart contracts on VSC are compiled using AssemblyScript. This is a template project to get started writing smart contracts.

### General Tips

For smart contract specific functionality, use the `@vsc.eco/sdk/assembly` module. For more general functionality, use the `assemblyscript/std/assembly` module. It contains useful data structures and functions that are usable in the smart contract.

**Note:** If you see a missing module error during testing, it is likely that that part of the AssemblyScript standard library is not yet supported by VSC contracts.

## Scripts

- `deploy`: Compiles & deploys a release build of the smart contract.  
  **Note:** Ensure both `HIVE_ACCOUNT_USERNAME` and `HIVE_ACCOUNT_ACTIVE_PRIVATE_KEY` are set in your environment or in the `.env` file in the root of this project. They are both used to deploy the smart contract via a `custom-json` operation on Hive.

- `asbuild:debug`: Compiles a debug build of the smart contract. This is used in both test environments. Used to manually compile this for the code changes to be reflected in the tests.

- `asbuild:debug-live`: Observes the changes in the smart contract and compiles a debug build on changes. This is best used in conjunction with `test:debug` for a small feedback loop.

- `test`: Runs the tests using `jest`. This is good for CI or running individual tests without debugging support.

- `test:debug`: Runs the tests using `mocha` & `vite`. This runs tests in the browser with sourcemap support allowing breakpoint debugging your smart contract with the original AssemblyScript source code.

## Folder Structure

- `assembly`: Where your smart contract source code lives.
- `build`: Where the build artifacts are placed.
- `scripts`: Where scripts live.
- `tests`: Where your tests live.

## Libraries

The following libraries are supported by VSC smart contracts:

- `@vsc.eco/sdk/assembly`: The VSC smart contract SDK. This library serves general purposes and provides various smart contract specific functionality.
- `as-bigint`: A very handy [library for simple arithmetic](https://github.com/polywrap/as-bigint) with large numbers. Also useful when an operation like taking the power of a number is required (`**` operator), as AssemblyScript does not natively support this.
