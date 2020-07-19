module.exports = {
  title: 'Yaipan APIs',
  tagline: 'Documentación de los APIs de Yaipan',
  url: 'https://yaipan.github.io',
  baseUrl: '/apis',
  favicon: 'img/yaipan-favicon.png',
  organizationName: 'yaipan', // Usually your GitHub org/user name.
  projectName: 'apis', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yaipan APIs',
      logo: {
        alt: 'Yaipan Logo',
        src: 'img/yaipan-icon.png',
      },
      links: [
        {
          to: 'docs/dominio',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
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
              label: 'General',
              to: 'docs/dominio',
            },
            {
              label: 'Web Services',
              to: 'docs/integracion-conectividad',
            },
          ],
        },
        {
          title: 'Información',
          items: [
            {
              label: 'Página Web',
              to: 'https://www.yaipan.com/',
            },
            {
              label: 'Productos',
              href: 'https://www.yaipan.com/productos',
            },
            {
              label: 'Empleo',
              href: 'https://www.yaipan.com/empleo',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/yaipan',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/yaipancr',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/yaipancr',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yaipan`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
