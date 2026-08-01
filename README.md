# Ranchao user documentation

The working manual for running a shop on Ranchao. VitePress, published to
GitHub Pages on every push to `master`.

**Live:** https://vilorij.github.io/rentdocs/

```
npm install
npm run dev       # http://localhost:5173, hot reload
npm run build     # static site into .vitepress/dist
npm run preview   # serve the built site
```

Editing a page is editing a markdown file. Every page carries a
*Suggest a change to this page* link that opens it in the GitHub editor.

## What belongs here, and what does not

**This repository is public.** These pages are for the person running a shop:
the owner setting it up, and the manager, agent or employee working in it.

They describe what the product does **today**, checked against the running
product rather than against intentions. Where a screen implies something it does
not do, the page says so — that honesty is the point, and it is what makes the
manual usable without trying everything first.

What is *not* here is the consolidated catalogue of everything the product
cannot do yet. That lives with the team, in `plans/known-limits.md`: a single
page listing every gap is the one page least suited to a public site. Individual
pages still tell a shop owner the truth about the screen in front of them.

## Publishing

`.github/workflows/pages.yml` builds on every push and pull request, and deploys
only from `master`. A pull request that breaks the site fails before merge.

`ignoreDeadLinks` is off on purpose: a broken link is a dead end for somebody
looking for an answer, so it fails the build rather than shipping.

The site is served under `/rentdocs/`, and `DOCS_BASE` in the workflow sets
VitePress's `base` to match — get that wrong and the site loads with no styling.
Point a custom domain at it (a `CNAME` file plus the DNS record) and `DOCS_BASE`
becomes `/`.

## Where these came from

They lived in `frontend-new/docs/` until they moved here, as a devDependency of
the application. VitePress pulls in `@docsearch/react`, which wants React 18
peers while the app is on React 19, and that broke the production image build.
Separating them fixed it at the root rather than by patching a lock file: the
app installs no docs toolchain, and the docs can move to a newer VitePress
without anyone rebuilding the product.
