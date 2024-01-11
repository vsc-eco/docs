// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VSC Network',
  tagline: 'Documentation for Hive Smart Contracts',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://vsc-eco.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vsc-eco', // Usually your GitHub org/user name.
  projectName: 'vsc-eco.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'VSC',
        logo: {
          alt: 'My Site Logo',
          src: 'img/vsc-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Home',
          },
          {href: 'https://peakd.com/@vsc.network', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/yvGXZsQTU6',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/vsc_eco',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: "https://peakd.com/@vsc.network"
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vsc-eco',
              },
            ],
          },
        ],
        copyright: `Built for the future of Hive`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: ["@gracefullight/docusaurus-plugin-vercel-analytics"],
};

module.exports = config;
