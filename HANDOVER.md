# Perplexity Handover — Suite Monorepo Frontend (A/B/C)
**Repo:** https://github.com/shardie-github/suite-monorepo  
**Owner:** Scott Hardie (Hardonia)  
**Implementer:** Perplexity

## Mission
Build production-grade UIs for Suite A, Suite B, Suite C aligned to health endpoints and service patterns. Use this branch + live repo to wire UIs to running services and open PRs.

## Scope (Frontend)
- Next.js 15 (App Router, TS, Tailwind)
- Apps: `apps/suite-a-ui`, `apps/suite-b-ui`, `apps/suite-c-ui`
- Health dashboards for `/healthz`, `/readyz`, `/v1/ping`
- Typed SDK (zod) via `NEXT_PUBLIC_API_BASE`
- A11y (WCAG 2.2 AA), perf hygiene, CI

## Out of Scope
- DB/auth/billing (placeholders & mocks only); avoid native binaries (Termux-safe)

## How to Work
1) Run `tools/collect-repo-context.sh` → `artifacts/` with files, commits, README head.
2) Implement routes per `docs/FRONTEND_TASKS.md`, using `apps/*-ui/sdk`.
3) Set `apps/*/.env.local`: `NEXT_PUBLIC_API_BASE=http://localhost:3000`
4) Verify health pages and open PR.
