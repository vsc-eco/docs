# Execution Environment

VSC executes transactions and smart contract logic using a deterministic, high-throughput runtime built on modern blockchain architecture standards. This section outlines the structure of the protocol’s state machine, execution layer, and supported tooling.

## Core State Machine Structure

VSC follows a **rollup-like design**, where transactions are processed in batches and applied to a shared chain state. This approach provides a clean separation between execution and consensus, allowing the system to:

- Deterministic state transitions  
- Efficient batch processing  
- Modular execution logic separated from core consensus


 This design allows VSC to evolve independently at the execution layer without disrupting consensus logic or external integrations.

## Transaction Validation

Transaction validation and state updates in VSC rely on a **Byzantine Fault Tolerant (BFT)-like structure**. Validators process incoming transactions and apply state changes only after a supermajority agreement is reached. This ensures:

- Fault tolerance in the presence of misbehaving or offline nodes  
- Agreement on the order of valid transactions
- Consistency and security guarantees typical of BFT consensus models

 This ensures the network can maintain operational integrity even when a portion of validators are compromised or fail.

## Smart Contract Execution Environment

VSC supports smart contracts compiled to **WebAssembly (WASM)**, enabling developers to build on-chain logic in a platform-agnostic format. WASM contracts run in a sandboxed environment that enforces:

- Deterministic behavior  
- Stack and memory limits  
- Isolation from the host runtime

 Developers benefit from consistent execution outcomes without needing to learn a domain-specific language.

## Language Support and Tooling

VSC currently supports contract development in:

- **Golang** – Suitable for lower-level or system-focused contracts  
- **AssemblyScript** – A TypeScript-like language with a lightweight footprint and WebAssembly compatibility  

Contracts can be compiled to WASM and deployed to the VSC network using SDKs or developer tooling provided by the protocol.
Supporting familiar and performant languages lowers the barrier to entry and reduces time-to-deploy for new applications.

## Execution Characteristics

- All smart contract interactions are **feeless**, supported by Hive’s resource credit model.  
- Contract execution is **deterministic**, enforced through WASM's runtime constraints.  
- VSC’s internal APIs provide access to core blockchain functions, external asset states, and vault logic from within smart contracts.


