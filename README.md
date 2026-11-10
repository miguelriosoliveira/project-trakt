# project-trakt

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=miguelriosoliveira_project-trakt&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=miguelriosoliveira_project-trakt)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=miguelriosoliveira_project-trakt&metric=coverage)](https://sonarcloud.io/summary/new_code?id=miguelriosoliveira_project-trakt)

A work-in-progress [Trakt](https://trakt.tv/) clone built with
[Next.js](https://nextjs.org/), React, TypeScript, and Tailwind CSS. The project explores a film and
TV tracking experience while building a reusable foundation for engineering practices and CI.

The current app is a prototype home page with sample profile and viewing data. Integration with
[TMDB](https://www.themoviedb.org/) and authentication are not implemented yet.

## Getting started

Use the Node.js version in `.nvmrc` and the pnpm version specified in `package.json`.

```bash
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The Sentry variables in `.env.example` are
optional for local development; configure them to enable error reporting and build uploads. Keep
`SENTRY_AUTH_TOKEN` private.

## Commands

| Command              | Purpose                                                 |
| -------------------- | ------------------------------------------------------- |
| `pnpm dev`           | Start the development server.                           |
| `pnpm build`         | Create a production build.                              |
| `pnpm start`         | Serve the production build.                             |
| `pnpm lint`          | Apply Biome and tailwint fixes.                         |
| `pnpm lint:check`    | Check formatting and lint rules without changing files. |
| `pnpm typecheck`     | Generate Next.js types and check TypeScript.            |
| `pnpm test`          | Run the Vitest suite.                                   |
| `pnpm test:cov`      | Run tests with coverage.                                |
| `pnpm test:watch`    | Run tests in watch mode.                                |
| `pnpm test:mutation` | Run Stryker mutation tests.                             |

## Quality and observability

GitHub Actions uses the reusable workflow in
[shared-configs](https://github.com/miguelriosoliveira/shared-configs) to run linting, typechecking,
coverage, mutation tests, a production build, and the Sonar quality gate. Renovate manages dependency
updates, Husky runs pre-commit checks, and Sentry is configured for error monitoring.
