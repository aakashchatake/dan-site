// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Data Analytics Portal',
  tagline: 'Transparent, reproducible, agent-friendly learning',
  favicon: 'img/favicon.ico',

  // --- Deployment (GitHub Pages) ---
  url: 'https://aakashchatake.github.io', // Your GitHub Pages base URL
  baseUrl: '/dan-site/',                  // Project sub-path
  organizationName: 'aakashchatake',      // GitHub username/org
  projectName: 'dan-site',                // Repo name

  // Build/link behavior (gentle during setup)
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // i18n (single locale)
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // --- Presets ---
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // serve docs at root (i.e., /dan-site/)
          // editUrl: 'https://github.com/aakashchatake/dan-site/edit/main/', // optional
        },
        blog: false, // no blog for now
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // --- Theme / UI ---
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg', // social share image (optional)
    colorMode: {
      respectPrefersColorScheme: true, // auto light/dark
    },
    navbar: {
      title: 'Data Analytics Portal',
      logo: {
        alt: 'Mindforge Logo',
        src: 'img/Mindforgeai-logo.png',
      },
      items: [
        // Shows the full docs sidebar at root (since routeBasePath: '/')
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Units',
        },
        { href: 'https://mindforgeai.wordpress.com/about/', label: 'Mindforge', position: 'left' },
        { href: 'https://github.com/aakashchatake', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            { label: 'Units', to: '/' }, // docs root
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/aakashchatake' },
            { label: 'Mindforge', href: 'https://mindforgeai.wordpress.com/about/' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Akash Shivadas Chatake. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
