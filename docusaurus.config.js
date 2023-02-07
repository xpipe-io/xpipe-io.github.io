// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'X-Pipe',
  tagline: 'Next level remote data workflows for everyone',
  url: 'https://xpipe.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xpipe-io', // Usually your GitHub org/user name.
  projectName: 'xpipe-io.github.io', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      navbar: {
        title: 'X-Pipe',
        logo: {
          alt: 'X-Pipe Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/download', label: 'Download', position: 'left'},
          {
            href: '/docs',
            label: 'Docs',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/xpipe-io',
            label: 'GitHub',
            position: 'right',
          },
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
                href: 'https://discord.gg/8y89vS8cRb',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/x-pipe/shared_invite/zt-1awjq0t5j-5i4UjNJfNe1VN4b_auu6Cg',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xpipe-io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Docs',
                to: '/docs',
              },
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: '/privacy-policy',
              },
              {
                label: 'Imprint',
                to: '/imprint',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} X-Pipe`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
