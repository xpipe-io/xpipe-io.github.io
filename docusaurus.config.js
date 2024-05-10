// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XPipe Docs',
  tagline: 'A shell connection hub and remote file manager ',
  url: 'https://docs.xpipe.io',
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
  // to replace "en" with "zh-Hans". ISO Language Code Table
  // You can find your code at: http://www.lingoes.net/en/translator/langcode.htm
  // Find more information at: https://docusaurus.io/docs/api/docusaurus-config#i18n

  // Be sure to run "npm run start -- --locale de" to generate the locale files.
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'da', 'de', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      de: {
        label: 'German',
        direction: 'ltr',
        htmlLang: 'de-DE',
        path: 'de',
      },
      da: {
        label: 'Danish',
        direction: 'ltr',
        htmlLang: 'da-DK',
        path: 'da',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fr: {
        label: 'French',
        direction: 'ltr',
        htmlLang: 'fr-FR',
        path: 'fr',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: false
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'XPipe Docs',
        logo: {
          alt: 'XPipe Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://xpipe.io',
            label: 'xpipe.io',
            position: 'right',
          },
          {
            href: 'https://github.com/xpipe-io',
            label: 'GitHub',
            position: 'right',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © 2023-${new Date().getFullYear()} XPipe UG (haftungsbeschränkt)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
