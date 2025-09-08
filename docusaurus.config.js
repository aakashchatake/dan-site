// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Data Analytics Portal',
  tagline: 'Transparent, reproducible, agent-friendly learning',
  favicon: 'img/favicon.ico',

  // --- Deployment (GitHub Pages) ---
  url: 'https://aakashchatake.github.io', // GitHub Pages base URL
  baseUrl: '/dan-site/',                  // Subpath for this project
  organizationName: 'aakashchatake',      // GitHub username/org
  projectName: 'dan-site',                // Repo name

  // --- Build behavior ---
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // --- Internationalization ---
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
          routeBasePath: '/', // Serve docs at root (/unit01, /assessments, etc.)
        },
        blog: false, // Blog disabled
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // --- Theme / UI ---
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg', // Social card image
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Data Analytics Portal',
      logo: {
        alt: 'Mindforge Logo',
        src: 'img/Mindforgeai-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Units',
        },
        {
          href: 'https://mindforgeai.wordpress.com/about/',
          label: 'Mindforge',
          position: 'left',
        },
        {
          href: 'https://github.com/aakashchatake',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [{ label: 'Units', to: '/' }],
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
