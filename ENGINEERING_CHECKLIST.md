# Engineering quality checklist

Follow-up items from the engineering practices review, roughly ordered by priority. Evaluate each
item against the needs of this project and future projects. Some CI changes belong in
[shared-configs](https://github.com/miguelriosoliveira/shared-configs), which owns the reusable
workflow.

## Already in place

- [x] Biome formatting and lint checks run in CI.
- [x] TypeScript typechecking runs in CI.
- [x] Vitest tests run with coverage in CI.
- [x] Stryker mutation testing runs in CI.
- [x] Production builds and the SonarCloud quality gate run in CI.
- [x] CodeQL analysis is configured for JavaScript/TypeScript and GitHub Actions.
- [x] Renovate manages dependency updates.
- [x] Husky runs pre-commit checks.

## 1. Enforce quality gates

- [x] Protect `main` with branch protection or a ruleset that requires pull requests and passing CI.
- [x] Use squash-only merges and automatically delete merged branches.
- [x] Enable secret-scanning push protection where available.
- [x] Enable Dependabot alerts and auto-dismiss low, medium, and high severity alerts; keep
  Dependabot security-update PRs disabled and use Renovate for dependency updates.
- [x] Verify the Renovate GitHub App has read access to Dependabot alerts for security-fix PRs.

## 2. Supply-chain security

- [x] Require successful CodeQL analysis before merging.
- [ ] Add dependency review to pull requests.
- [ ] Evaluate OpenSSF Scorecard.
- [ ] Evaluate `harden-runner` for GitHub Actions.
- [ ] Pin GitHub Actions and reusable workflows to full commit SHAs, with Renovate updates.
- [ ] Add `pnpm audit` to CI with an actionable severity and exception policy.

## 3. Test layers and user experience

- [ ] Add Playwright end-to-end coverage for critical flows against Vercel preview deployments.
- [ ] Add automated accessibility checks with axe.
- [ ] Add Lighthouse CI and define performance budgets.
- [ ] Add a bundle-size budget, for example with `size-limit`.

## 4. CI and local feedback

- [ ] Split the sequential CI workflow into parallel lint, typecheck, test, mutation, and build jobs.
- [ ] Add workflow concurrency with cancel-in-progress.
- [ ] Set job timeouts.
- [ ] Decide whether both Coveralls and Sonar coverage reporting are needed, preserving the quality
  gate if either is removed.
- [ ] Keep `lint-staged` in pre-commit and move typechecking, coverage, and build checks to pre-push.

## 5. Code hygiene

- [ ] Add Knip to find unused files, exports, and dependencies.
- [ ] Validate environment variables where they are consumed, using a tool such as Zod or
  `@t3-oss/env-nextjs`.

## 6. Commits and releases

- [ ] Enforce Conventional Commits with commitlint and validate pull request titles.
- [ ] Evaluate release-please or Changesets for automated versioning and changelogs.

## 7. Repository documentation and templates

- [ ] Choose and add a license.
- [ ] Add `CONTRIBUTING.md`.
- [ ] Add `SECURITY.md`.
- [ ] Add `CODEOWNERS`.
- [ ] Add a pull request template.
- [ ] Add issue templates.
- [ ] Record significant decisions in an ADR directory.
- [ ] Document setup and scripts in the README.
- [ ] Add a CI badge.
- [ ] Add a mutation-score badge where supported.

## 8. Reuse across projects

- [ ] Choose between a GitHub template repository and a `create-*` scaffolder in shared-configs.
