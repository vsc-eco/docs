import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

export default defineConfig({
  site: 'https://docs.magi.eco',
  integrations: [
    starlight({
      title: 'Magi Documentation',
      logo: {
        src: './src/assets/magi-logo.svg',
        alt: 'Magi logo',
      },
      favicon: '/favicon.svg',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/vsc-eco' }],
      plugins: [
        starlightLlmsTxt({
          projectName: 'Magi',
          description:
            "Magi (formerly known as VSC, Virtual Smart Chain) is a Hive-based Layer-2 protocol for cross-chain interoperability and WebAssembly smart contract execution. It currently connects Bitcoin and Ethereum on mainnet, with Litecoin, Dash, and Solana planned, through validator-managed vaults. Every liquidity pair routes through HBD (Hive Backed Dollar) as the base asset, and end-user transactions are feeless via Hive's resource credit model. Validators observe each external chain by running native clients (e.g. bitcoind, geth) and reaching BLS-signed consensus; zero-knowledge proofs are currently used for EVM (Ethereum) validation, with broader use planned for other chains.",
          details:
            'The public brand is Magi; source code lives under the GitHub organization vsc-eco. Both magi.eco and vsc.eco resolve to the same project. The canonical node is go-vsc-node (Go); the older TypeScript vsc-node is archived. Smart contracts are written in Go (TinyGo) or AssemblyScript and compile to WebAssembly. The API is exclusively GraphQL — no REST.',
          optionalLinks: [
            {
              label: 'Altera (live app)',
              url: 'https://altera.vsc.eco',
              description: 'Flagship Magi dApp — multi-chain wallet and swaps.',
            },
            {
              label: 'Magi Blocks (block explorer)',
              url: 'https://vsc.techcoderx.com/',
              description: 'Inspect blocks, transactions, witnesses, contracts.',
            },
            {
              label: 'GitHub organization',
              url: 'https://github.com/vsc-eco',
              description: 'All open-source repositories.',
            },
            {
              label: 'Discord',
              url: 'https://discord.gg/yvGXZsQTU6',
            },
          ],
        }),
      ],
      // no sidebar config here — Starlight auto-generates sidebar from your content folder
    }),
  ],
});
