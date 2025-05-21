import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'VSC Documentation',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/vsc-eco' }
      ],
      // no sidebar config here — Starlight auto-generates sidebar from your content folder
    }),
  ],
});
