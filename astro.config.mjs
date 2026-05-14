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
            "Magi (formerly known as VSC, Virtual Smart Chain) is a Hive-based Layer-2 protocol for cross-chain interoperability and WebAssembly smart contract execution. It connects EVM and non-EVM chains (Bitcoin, Ethereum, Solana, DASH, Hive) through validator-managed vaults, routes every liquidity pair through HBD (Hive Backed Dollar) as the base asset, and delivers feeless end-user transactions via Hive's resource credit model. Cross-chain state is validated using zero-knowledge proofs.",
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
