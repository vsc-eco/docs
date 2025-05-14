# **Swappers: Execute Cross-Chain Asset Swaps**

Swappers are users who wish to exchange one native asset for another, such as Bitcoin for Ethereum, without relying on centralized exchanges, wrapped assets, or synthetic tokens. VSC enables this through its in-protocol liquidity layer, which facilitates direct swaps between native assets in a decentralized, trust-minimized way.

When a swapper initiates a transaction, they send their native asset (e.g., BTC) into the VSC's vault secured on the Bitcoin mainnet by the VSC validator system. VSC then processes the transaction by drawing from available liquidity pools and routing the output asset (e.g., ETH) to the swapper’s destination wallet. This happens transparently and securely across chains, while the swapper only needs to sign a single transaction from their wallet.

VSC ensures that swappers always receive native assets on both ends of the swap. This is a core difference from systems that rely on wrapped or bridged assets, which introduce significant trust and custodial risks. Instead, VSC maintains a decentralized smart contract-based system that can interact natively with external chains using inbound and outbound vaults and smart routing logic. Every swap is atomic and either completes fully or fails, eliminating the risk of partial fills or stuck funds.

Swappers benefit from:

- **Simplicity**: Users don’t need to understand the technical details of how cross-chain communication works. They just initiate a swap.
- **Security**: Funds remain non-custodial throughout the process. VSC's validator network oversees the process to ensure integrity.
- **Transparency**: All swap logic and movement of funds happen on-chain, verifiable by anyone.
- **Native settlement**: Swappers always end up with actual native tokens (e.g., native BTC or native ETH), never wrapped variants.
- **Decentralization**: No need to rely on third parties or central liquidity sources. The protocol handles everything.

Swapping on VSC is a key use case for users looking to interact with multiple blockchain ecosystems from one unified system without sacrificing the benefits of decentralization, custody, and asset integrity. As liquidity grows, swaps become faster, deeper, and more efficient — supporting not only individuals but also dApps, payment systems, and arbitrageurs.

