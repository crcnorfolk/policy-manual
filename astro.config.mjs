// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://policies.crcnorfolk.com',
  integrations: [
    starlight({
      title: 'CrossRoads Church Policy Manual',
      description:
        'The policies of CrossRoads Church, Norfolk VA. Each policy shows when it takes effect, who approved it, and what it replaces.',
      // "Edit this page" opens the GitHub web editor. This is the edit path for
      // anyone at CRC who is not a developer. Do not remove it.
      editLink: {
        baseUrl: 'https://github.com/crcnorfolk/policy-manual/edit/main/',
      },
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      components: {
        // Renders the governance block (effective date, approving body,
        // approval date, supersedes, minutes) under the title of every policy.
        PageTitle: './src/components/PageTitle.astro',
      },
      social: [],
      sidebar: [
        { label: 'Start here', link: '/' },
        {
          label: 'Policies',
          items: [{ autogenerate: { directory: 'policy' } }],
        },
        {
          label: 'About this manual',
          items: [
            { label: 'How to edit a policy', link: '/how-to-edit/' },
          ],
        },
      ],
    }),
  ],
});
