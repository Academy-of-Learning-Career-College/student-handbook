// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Academy of Learning Career College',
  tagline: 'Canada\'s Largest Career College Network',
  url: 'https://aolccbc.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Academy of Learning', // Usually your GitHub org/user name.
  projectName: 'aolccbc.com', // Usually your repo name.

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
      navbar: {
        title: 'Academy of Learning',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: "Home",
            to: "/"
          },
          {
            type: 'doc',
            docId: 'Handbook/index',
            position: 'right',
            label: 'Handbook',
          },
          {


            label: "CALL US",
            items: [
              {
                label: 'Abbotsford - 604-855-3315',
                to: 'tel:16048553315'
              },
              {
                label: 'Langley - 604-532-4040',
                to: 'tel:16045324040'
              }
            ]





          }


        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Langley',
            items: [
              {
                label: '604-532-4040',
                to: 'tel:16045324040',
              },
              {
                label: '#201-20621 Logan Ave',
                to: 'https://g.page/aolcclangley?share',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Privacy Policy',
                to: '/',
              },
              {
                label: 'Sexual Harassment Policy',
                href: '/docs/Handbook/general-info/health-and-safety/sexual-harrassment',
              },
              {
                label: 'Student Statement of Rights',
                to: '/docs/student-statement-of-rights',
              },
              {
                label: 'Refund Policy',
                href: '/',
              },
              {
                label: 'System Requirements',
                href: '/',
              },
              {
                label: 'Certified with the Private Training Institutions Branch (PTIB) of the BC Ministry of Advanced Education and Skills Training',
                href: 'https://www.privatetraininginstitutions.gov.bc.ca',
              },
            ],
          },
          {
            title: 'Abbotsford',
            items: [
              {
                label: '604-855-3315',
                href: 'tel:16045324040',
              },
              {
                label: '#204-2692 Clearbrook Road',
                href: 'https://goo.gl/maps/RyQKvXxeWe7oUT867',
              },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Academy of Learning Career College.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
