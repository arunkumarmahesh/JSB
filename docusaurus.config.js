// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UWAJSB',
  tagline: 'Unity Welfare Association Jains Salzburg (Regd No: 339 of 2022)',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'UWAJSB',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'By-Laws',
          },
          {to: '/blog', label: 'FAQs', position: 'left'},
          {
            href: 'https://jainhousing.com/residential/ongoing-projects-hyderabad-bandlaguda-jagir/jains-salzburg',
            label: 'Jains Salzburg',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'By-Laws',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Instagram ',
                href: 'https://www.instagram.com/accounts/login/?next=/jainhousingltd/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/JainHousing',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/JainHousing01',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Jains Housing ',
                href: 'https://jainhousing.com/',
              },
              {
                label: 'Linkedln',
                href: 'https://www.linkedin.com/company/jain-housing-&-construction-ltd',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCMcOOIY_ok08DNvxnYb6NBA',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arun Kumar Mahesh (Block B-506).`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
