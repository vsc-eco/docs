---
title: Feeless In-Protocol Transactions
sidebar:
  order: 5
---

VSC offers users a **feeless experience** for on-chain interactions by adopting a system similar to the **Hive blockchain’s Resource Credit (RC) system** which allocates bandwidth instead of charging traditional gas fees. This approach removes traditional gas fees from the user experience while preserving decentralization and network integrity. It enables scalable, low-friction onboarding and usage suited for mainstream applications. The difference being that VSC uses HBD as the base for RC distribution while Hive uses staked Hive (HP).



## What Are Resource Credits?

VSC uses a **Resource Credit (RC)** model in place of conventional transaction fees. RCs act as an internal bandwidth allocation system, ensuring fair use of the network without requiring payments in a native token for each action.

- RCs are **not tradable tokens**.
- They are **tied to the amount of HBD** an account holds.
- RCs are often automatically delegated to users by dApps and other Hive associated projects like VSC, creating an instant gasless experience.
- Every user account has an RC pool that **regenerates over time** at a rate of approximately 25% per day, reaching full capacity in about 4 days if unused.

RCs are **consumed** when a user performs actions on-chain, such as:

- Transferring tokens  
- Posting or commenting  
- Signing transactions  
- Interacting with smart contracts or dApps built on Hive



## How VSC Uses Resource Credits

VSC is built on top of the Hive blockchain and **directly utilizes Hive’s RC system** to cover the computational and bandwidth costs of user transactions. Instead of charging gas fees, VSC relies on these regenerating credits, enabling:

- **Effectively feeless user interactions under typical usage conditions**  
  Users do not need to hold or spend any token to interact with the network.

- **Simplified onboarding**  
  No upfront token purchases or complex fee management—ideal for users unfamiliar with crypto.

- **Predictable scalability**  
  Since RCs regenerate and are linked to account stake, applications can model resource needs over time and delegate power accordingly.


## Implications for Developers and Users

### For Users

- **No gas fees**: Interacting with VSC does not require the user to spend HIVE, HBD or any other token for transactions.
- **Automatic regeneration**: RCs recharge over time.
- **Usage-based limits**: Heavier usage temporarily depletes RCs; activity resumes as they recharge, user stakes more Hive. Currently owning single digit $ values of HBD tokens covers average daily transaction usage. Generally this is not a problem due to projects like VSC or Hive dApps covering RC expenditure for users.

### For Developers

- **Delegation models**: Apps can delegate Hive Power to users or service accounts to ensure adequate RC availability.
- **Feeless UX**: Enables the design of mainstream-friendly applications without friction from transaction fees. 
- **Capacity planning**: Developers can estimate how much Hive Power is needed to support a given volume of activity based on RC usage profiles. As user activity grows, applications benefit from greater engagement, forming a symbiotic system where usage and resource provisioning reinforce each other.

## Considerations

While the RC model offers a gasless experience, it’s important to note:

- **High-frequency usage** may lead to temporary RC exhaustion. This does not incur a fee but delays further transactions until RCs recharge.
- **Applications must manage HP effectively**, either by maintaining reserves or using delegation to support active users.
- **Stake-backed access** supports sustainability and reduces abuse, aligning incentives with network health.

---

## Conclusion

VSC’s adoption of the Hive’s RC system enables a feeless, scalable, and user-friendly blockchain experience. By abstracting away gas fees and utilizing regenerative credits, VSC provides a platform for mainstream adoption without compromising on decentralization or performance.

For developers, this model encourages thoughtful resource management while opening the door to applications that are as seamless as traditional web services.