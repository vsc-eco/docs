# Native Asset Mapping

**Native Asset Mapping** is the primary innovative feature of the VSC protocol that enables users to send and receive native assets between different blockchains, through VSC, without worrying about chain compatibility.

It allows users to send, for example, **SOL from a Solana wallet to an Ethereum wallet address**. The recipient receives **native SOL**, viewable and usable on VSC when they log in with their Ethereum wallet. The received SOL tokens remain in the VSC vault on the Solana mainnet and are secured by the VSC protocol validator system. By completing the transaction, the ownership of those tokens is essentially passed on to the account receiving the SOL. 

## How It Works

Native Asset Mapping links a user’s single wallet address (e.g., ETH) to their VSC account, enabling them to receive native assets from any supported blockchain even if those assets originate from a different chain than the wallet they connected.

1. User connects to VSC using one wallet - for example, their Solana wallet.
2. Sender deposits Sol tokens to VSC. Under the "transfer" option the sender inputs the receiver’s ETH address. *(As opposed to directly doing a crosschain atomic swap which is another core feature of VSC)*
3. VSC maps the incoming asset to the ETH address on its internal ledger. *(All transfers within VSC are feeless)*
4. The receiver logs in with their ETH wallet and sees the deposited asset (e.g., SOL).
5. The receiver can now **swap**, **withdraw**, or **use** the asset within VSC.

With Native Asset Mapping, you only need to share one wallet address to receive payments, regardless of what network the sender or you, the receiver, are on. There’s no need to manage multiple wallets or worry about compatibility between blockchains. No longer do users need to think about what network they or others are on. Funds can be sent and received seamlessly, without friction, confusion, or the need for technical knowledge. This model sets a new standard for user experience in crypto. **It transforms blockchain from a fragmented, chain-centric experience into a unified system built for real-world usability**, one that finally matches the expectations of everyday users.

- Makes crypto transactions as easy as sending an email to just one address.
- Eliminates the need for custodial wrapped assets and **chain-hopping**.
- Abstracts **all** technical complexity from crypto transactions.
- Empowers global payments, merchant adoption, and remittance use.
- Allows VSC to be used as the **universal settlement layer** for all tokens across different blockchains.The VSC protocol keeping track of who owns what, across all supported chains, with finality.