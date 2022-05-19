// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Academy of Learning Career College',
  tagline: 'Canada\'s Largest Career College Network',
  url: 'https:/academy-of-learning-career-college.github.io',
  baseUrl: '/student-handbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Academy-of-Learning-Career-College', // Usually your GitHub org/user name.
  projectName: 'student-handbook', // Usually your repo name.

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
            },
          {
            label: "Locations",
            to: "/locations"
          },
          {
            label: "About Us",
            to: "/aboutus"
          },
          {
            label: "myAOLCC",
            to: "https://my.aolcc.ca"
          },
          {
            type: 'doc',
            docId: '/category/health-and-safety',
            label: 'Health & Safety',
          },
          
          
          {
            label: "Student Resources",
            items: [
              {
                type: 'html',
                value: "<a href='ms-windows-store://pdp/?ProductId=9P7BP5VNWKX5&mode=mini' class='dropdown__link'>QuickAssist</a>"
                
              },
              {
                label: 'Attendance Tracker',
                href: 'https://acmeweb.academyoflearning.net/Forms/AttendanceLogin.aspx'
              },
              {
                label: 'Student Handbook',
                to: 'docs/Handbook'
              },
              {
                type: 'html',
                value: "<hr />"
                
              },
              {
                label: 'LockDown Browser Installer',
                href: 'https://download.respondus.com/lockdown/download.php?id=281950612'
              },
              {
                label: 'Typing Trainer Installer',
                href: 'https://meshcentral.aolccbc.com/TypingTrainer.exe'
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
                href: 'tel:16045324040',
              },
              {
                label: '#201-20621 Logan Ave',
                href: 'https://g.page/aolcclangley?share',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Privacy Policy',
                to: '/docs/Handbook/privacy-policy',
              },
              {
                label: 'Dispute Resolution Policy',
                to: '/docs/Handbook/academic-policies/dispute-resolution',
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
                href: '/docs/Handbook/academic-policies/refunds',
              },
              {
                label: 'System Requirements',
                href: '/docs/Handbook/general-info/system-requirements',
              }
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
        copyright: `Copyright © ${new Date().getFullYear()} Academy of Learning Career College. <br />Certified with the <a href="https://www.privatetraininginstitutions.gov.bc.ca">Private Training Institutions Branch (PTIB)</a> of the BC Ministry of Advanced Education and Skills Training`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
