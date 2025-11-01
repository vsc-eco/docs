import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: {
        en: 'VSC Documentation',
        'es': 'VSC Documentación',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'es': {
          label: 'Español',
          lang: 'es',
        },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/vsc-eco' }
      ],
      // no sidebar config here — Starlight auto-generates sidebar from your content folder
    }),
  ],
});
