# Senders & Receivers (via Native Asset Mapping)

**Feeless Value Transfer via Native Asset Mapping Within VSC**

**Senders & Receivers** are users who leverage VSC to send value **between different blockchain wallet addresses that are connected to VSC -** like sending BTC to an Ethereum wallet address — without using traditional bridges, swaps, or liquidity pools. All of this happens **inside VSC**, using its internal accounting system and wallet-layer abstraction, powered by **Native Asset Mapping**.

### What Native Asset Mapping Enables

**Native Asset Mapping** is VSC’s mechanism for linking different blockchain wallet addresses and allowing transfers of the respective native assets between those wallets. It allows users to:

- Connect wallets from different blockchains (BTC, ETH, SOL, etc.) to VSC.
- Send native assets (e.g., BTC) to a connected wallet address associated with another blockchain (e.g., an ETH wallet).
- Receive those assets natively.

The sender pays a one-time network fee to deposit the asset into VSC; the protocol handles the internal ledger shift and the receiver can send that asset to any other wallet address connected to VSC.

### Key Features of This Role

- **Protocol-level value movement** - no external bridges or intermediaries.
- **Receive native BTC to a connected ETH wallet** (and vice versa).
- **Only fees are for entry and exit** - transfers within VSC are feeless.
- **Receivers must connect to VSC to access funds** - the system auto-resolves the deposit to their mapped address.
- **Receivers can withdraw funds after completing a swap to the asset of their choice**.
- **All assets remain native throughout**.

### Implications & Use Cases

- **Remittances**: A user in country A can send BTC directly to someone’s ETH wallet in country B.
- **Payments**: Customers can pay with the wallet address they have; merchants receive to the wallet address they have with no fees within VSC.
- **Wallet abstraction**: Users don’t need to know what chain someone is using — just send to their connected wallet.
- **UX simplification**: No need to swap, bridge, or even know which asset a recipient prefers — VSC resolves it.

