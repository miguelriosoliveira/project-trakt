# Lint

`.lintstagedrc.json` passes staged paths straight to `tailwint`. Keep that while every staged path is free of glob characters.

`tailwint` expands each argument as a glob. Escape `*`, `?`, `[`, `]`, `(`, and `)` in a staged path before `tailwint` sees it. `src/app/[slug]/page.tsx` selects `src/app/s/page.tsx` unless the brackets are escaped.
