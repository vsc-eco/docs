---
title: Validator Operations
sidebar:
  order: 10
---


This section outlines the operational responsibilities of validators within the VSC network and details the security architecture of the vault system.

## Validator Roles and Responsibilities

Validators in the VSC network are tasked with:

- **Transaction Processing**: Validators receive and process transactions, executing the associated smart contract logic within the VSC runtime environment.

- **State Management**: Post-execution, validators update the local state to reflect the outcomes of processed transactions.

- **Block Production**: Validators aggregate processed transactions into blocks and propose these blocks to the network for inclusion in the blockchain.

- **Consensus Participation**: Validators engage in the network's consensus mechanism to agree upon the canonical chain state, ensuring consistency across the distributed system.



## Vault Security Architecture



The VSC vault system securely manages cross-chain digital assets by using decentralized validator control and on-chain smart contract logic. Each vault tracks and manages assets on its respective external blockchain (e.g., Bitcoin UTXOs) without relying on a central operator.

Key security measures include:

- **Decentralized Control**: A network of validators, bonded with collateral, collectively manage vault operations through consensus, preventing single points of failure.

- **Transaction Verification**: Incoming and outgoing transactions are validated and confirmed on the relevant external blockchain before being processed by the vault.

- **Collateral-Backed Security**: Validators must maintain sufficient collateral. If collateral falls short, or if malicious behavior is detected, slashing penalties are applied and emergency protocols enable safe withdrawal or recovery of assets to protect users.

- **Dedicated Vault Instances**: Each supported blockchain has its own dedicated vault instance managed independently by validators.

These mechanisms ensure the integrity, security, and reliability of assets stored and transacted through VSC vaults.


 These security features collectively safeguard the assets managed within the VSC vault, aligning with best practices for digital asset management.

## Validator Onboarding and Maintenance

To become an active validator in the VSC network, entities must:

1. **Registration**: Submit a validator registration request, providing necessary identification and compliance information.

2. **Infrastructure Setup**: Deploy and configure the validator node software in accordance with the specifications outlined in the VSC documentation.

3. **Continuous Operation**: Maintain the validator node, ensuring high availability, timely software updates, and adherence to performance benchmarks.

 Detailed procedures and requirements for validator onboarding and maintenance are specified in the VSC validator documentation.
