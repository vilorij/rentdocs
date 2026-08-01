import { defineConfig } from 'vitepress'

/**
 * The user documentation site, published to GitHub Pages by
 * `.github/workflows/pages.yml` on every push to master.
 *
 *   npm run dev       write and preview with hot reload
 *   npm run build     -> .vitepress/dist
 *   npm run preview   serve the built site locally
 *
 * `base` is '/' because the site is served from the root of its own domain
 * (docs.ranchao.app, set by .vitepress/public/CNAME). It matters: every asset
 * URL is built from it, so if the custom domain were dropped and Pages fell
 * back to vilorij.github.io/rentdocs/, DOCS_BASE would have to be set to
 * '/rentdocs/' or the site would load with no CSS.
 *
 * Page files carry NO number prefix, and the order lives in the sidebar below.
 * The app and the marketing pages link into these URLs from outside, where a
 * broken link fails silently — VitePress only checks links between its own
 * pages. A slug that never has to change because something was inserted above
 * it is worth more than a filename that sorts.
 *
 * This repository is PUBLIC. The catalogue of what the product cannot do yet is
 * deliberately not here — it lives with the team, in `plans/known-limits.md`.
 * Pages here still say plainly where a screen implies something it does not do;
 * what does not belong on a public site is the consolidated list.
 */
export default defineConfig({
  title: 'Ranchao',
  description: 'How to run your rental or tour business on Ranchao',
  lang: 'en',
  base: process.env.DOCS_BASE || '/',
  cleanUrls: true,
  lastUpdated: true,
  // The docs are written for shop owners, not developers: a broken link is a
  // dead end for someone looking for an answer, so fail the build on one.
  ignoreDeadLinks: false,

  head: [['meta', { name: 'theme-color', content: '#4f46e5' }]],

  themeConfig: {
    outline: [2, 3],
    search: { provider: 'local' },

    nav: [
      { text: 'Start here', link: '/what-the-platform-does' },
      { text: 'A day in the life', link: '/vehicle-rental' },
      { text: 'Reference', link: '/getting-paid' },
    ],

    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'What the platform does', link: '/what-the-platform-does' },
        ],
      },
      {
        text: 'A day in the life',
        collapsed: false,
        items: [
          { text: 'Vehicle rental', link: '/vehicle-rental' },
          { text: 'Trips and tours', link: '/trips' },
          { text: 'Property rental', link: '/property' },
          { text: 'The owner', link: '/owner' },
        ],
      },
      {
        text: 'Reference',
        collapsed: false,
        items: [
          { text: 'Getting paid', link: '/getting-paid' },
          { text: 'The inbox and the AI', link: '/inbox-and-ai' },
          { text: 'Where do I turn that on?', link: '/where-do-i-turn-that-on' },
          { text: 'Plans, trial and accounts', link: '/plans-and-accounts' },
        ],
      },
    ],

    docFooter: { prev: 'Previous', next: 'Next' },
    editLink: {
      pattern: 'https://github.com/vilorij/rentdocs/edit/master/:path',
      text: 'Suggest a change to this page',
    },
    lastUpdatedText: 'Updated',
    footer: {
      message: 'Ranchao — rental and tour operations.',
    },
  },
})
