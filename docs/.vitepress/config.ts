import { defineConfig } from 'vitepress';

export default defineConfig({
  vue: {
    reactivityTransform: true,
  },
  title: 'Atom One Dark Devtools',
  themeConfig: {
    nav: [
      {
        text: 'Installation',
        link: '/installation.md',
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        items: [
          {
            text: 'Installation',
            link: '/installation.md',
          },
        ],
      },
    ],
  },
});
