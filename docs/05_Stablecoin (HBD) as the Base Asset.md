# Stablecoin (HBD) as the Base Asset 


VSC employs Hive Backed Dollars (HBD), an algorithmic stablecoin, as the base asset in all liquidity pools. This design standardizes routing paths, simplifies liquidity provisioning, and reduces risk exposure due to all pools only having **1-sided volatility**. By using HBD as the common pair, liquidity providers are only exposed to the performance of their chosen volatile asset paired with HBD. This results in a portfolio that reflects the performance of the single volatile asset rather than multiple sources of price volatility, improving predictability and risk management.

## Design Rationale

### Simplified Liquidity Provisioning

By pairing every asset against HBD, VSC reduces the complexity of liquidity provisioning. Liquidity providers only need to supply HBD and one other asset, lowering the barrier to entry and concentrating liquidity more effectively.

### Efficient Routing

Using HBD as a universal intermediary enables straightforward asset swaps. For example, exchanging Asset A for Asset B involves two steps: 
`Asset A → HBD → Asset B`. This reduces the total number of required pools from O(n²) to O(n), where *n* is the number of assets, improving capital efficiency and routing simplicity.

| Number of Assets (eg. BTC, ETH, HIVE) | Pools Required (arbitrary pairs)       | Pools Required (HBD base asset)  |
|---------------------------------------|---------------------------------------|---------------------------------|
| n                                     | pools = n * (n - 1) / 2                       | n  = pools                             |
| 12                                    | 66                                    | 12                              |
| 36                                    | 630                                   | 36                              |
| 100                                   | 4,950                                 | 100                             |


### Stability and Predictability

HBD is designed to maintain a stable value, providing a predictable base for liquidity pools. This stability reduces exposure to volatility shocks often seen in systems that use volatile tokens as base pairs, protecting liquidity providers and traders from sudden price fluctuations.


- **Reduced Pool Fragmentation:** Pairing assets with HBD lowers the number of liquidity pools required, which can help concentrate liquidity and improve capital efficiency..

- **Simplified Price Discovery:** Pricing is more straightforward when based on a stable asset, relying primarily on the relative value between HBD and the paired asset.

---

## Considerations

- **Liquidity Depth:** Maintaining sufficient HBD liquidity is essential to ensure efficient swaps and reduce slippage across the ecosystem.

- **Stablecoin Peg Maintenance:** The effectiveness of this model relies on HBD maintaining its peg. The Hive blockchain includes built-in mechanisms and multiple safeguards designed to monitor and preserve HBD’s stability over time.

- **Cross-Chain Compatibility:** Support for assets from other blockchains depends on the development and deployment of specific vaults and validator integrations for each chain, enabling their secure pairing with HBD.




