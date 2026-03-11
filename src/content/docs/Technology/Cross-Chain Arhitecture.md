---
title: Cross-Chain Architecture
sidebar:
  order: 8
---


This section describes how Magi interfaces with external blockchains, processes inbound transactions, manages vaults, and ensures security during cross-chain operations.

## Interface with External Chains

Magi interfaces with external chains through a combination of:

- **Blockchain light clients**  
- **Zero-knowledge proofs (ZKPs)**  
- **Threshold signature schemes (TSS)**  

These components enable Magi to operate trustlessly and without centralized custodians. This architecture removes the need for centralized custodians, allowing users to interact with external blockchains without relinquishing control of their assets.

## Inbound Transaction Flow

Inbound transactions from external chains are processed as follows:

1. **Relays** monitor and index events or transactions on supported chains.
2. These transactions are **broadcasted to the Magi network**, where they are validated using the appropriate blockchain light client.
3. Once validated, the transaction triggers an operation on Magi, such as:
   - Minting a token
   - Executing a swap
   - Performing a contract call

This ensures external actions are securely mirrored within the Magi ecosystem.

## Vault Structure

Each supported external chain is assigned a **dedicated vault** on Magi. Vaults are smart contracts that:

- Function similarly to smart wallets
- Track balances on external chains
- Operate in a fully decentralized manner with **no single point of control**

Dedicated per-chain vaults provide fault isolation, limiting the impact of chain-specific failures on the broader Magi system.

### Bitcoin-Specific Logic

For Bitcoin, vaults track **UTXOs** on the Bitcoin mainnet. The vault smart contract maintains:

- A record of confirmed and validated inbound UTXOs
- The authority to determine which UTXOs are spendable

This enables secure handling of Bitcoin inputs and outputs directly from the Magi contract layer.

## Asset Movement Coordination

Once inbound transactions are validated, assets are:

- **Credited** to the relevant Magi vault
- **Managed** by the vault contract
- **Disbursed** on outbound requests by spending UTXOs or performing an equivalent action on the external chain

This system allows for seamless and auditable movement of assets between Magi and external chains.

## Security and Fallback Mechanisms

Vaults are secured by a **2/3 supermajority** of validators using TSS. Validators must be bonded with collateral, which acts as a security guarantee. This fallback design minimizes user risk ensuring asset safety across volatile conditions.

### Emergency Conditions

If collateral becomes insufficient or validators are compromised, a **fallback mechanism** is triggered. This may involve:

- Moving assets from Magi to the respective L1 chain
- Converting assets into a safer form
- Halting vault activity temporarily

This mechanism is modeled similarly to **Chainflip's emergency handling** system.

