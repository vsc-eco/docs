---
title: Consensus and security
---

# Consensus Mechanisms and Executor Pools for Scalability

In the VSC network, two core consensus mechanisms are at play: validators and executors. Validators are responsible for crucial network functions such as managing the main anchor chain, hive multisig, treasury account, and rewarding node operators. At least five validators oversee the hive multisig.

Executors, on the other hand, handle the execution and data storage of smart contracts. Multiple executor groups exist, usually one for each smart contract. These groups form as nodes "join" smart contracts by staking tokens and waiting briefly. Executor nodes participate in minutely execution rounds overseen by validators, requiring a 3/5 consensus to execute a smart contract.

To achieve scalability in the VSC network, the execution of smart contracts is divided into smaller units called Executor Pools. Each smart contract or group of smart contracts forms an individual pool, randomly assigned 25-50 nodes based on an epoch schedule. This randomization and the node quantity ensure pool security.

Executor nodes in these pools must stake collateral. After transaction processing, a majority of executor nodes must agree on the pool's state. In case of disagreement, a set of executors can trigger a fraud request, staking collateral from both sides. Anchor chain validators make the final decision based on input transactions and smart contract logic, producing a fraud proof indicating the winning side.

Throughout this process, the smart contract state is briefly frozen within the main executor pool, but other nodes can continue processing states independently. The use of collateral, multiple executor nodes, and fraud requests effectively mitigates the internal risk of smart contract attacks, facilitating scalable growth across these executor pools without a significant single point of failure.