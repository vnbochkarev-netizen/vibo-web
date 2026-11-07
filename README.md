# vibo-web

Source for the ViBo website — React 19, Vite, TypeScript.

Five pages: platform and skills, agent-skill architecture, benchmarks, private
execution, and pricing. English, Russian and Chinese copy live in one place per
page, so a language switch does not require a second build.

## Build

```bash
pnpm install
pnpm --filter client build     # output: apps/client/dist
```

## Deploy

The compiled output is published from the `vibo-site` repository, which GitHub
Pages serves at https://wwwvibo.com.

```bash
rsync -a --delete apps/client/dist/ ../vibo-site/   # keep CNAME
cp ../vibo-site/index.html ../vibo-site/404.html
```

Each route also gets a static `index.html` so the host answers 200 instead of 404.

## Design

Light brand book 2.0: Cobalt `#1557FF`, Action Orange `#FF642F`, Graphite `#171D27`,
Warm White `#FAF9F6`; Space Grotesk for text, IBM Plex Mono for code and identifiers.
The mark is the three-module V from the brand assets.
