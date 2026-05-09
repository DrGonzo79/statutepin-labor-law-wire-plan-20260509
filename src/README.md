# Source Plan

This repo is a public build-plan/prototype, not the production application. A production implementation should start with:

- `apps/web`: customer dashboard and marketing site.
- `apps/admin`: reviewer console.
- `services/ingestion`: source fetchers and normalization.
- `services/intelligence`: LLM extraction and rules engine.
- `packages/schema`: shared TypeScript types for alerts, jurisdictions, and audit events.

The static prototype at the repo root demonstrates the desired product experience for GitHub Pages.
