# Architecture — Statutepin

## System overview

Statutepin is a compliance-monitoring pipeline with human review and customer-specific impact mapping.

```text
Official sources → Fetchers → Normalizer → Change detector → LLM extractor → Review console → Alert service → Slack/Email/Dashboard → Audit log
                                                ↓
                                      Source snapshots + citations
```

## Components

### Source ingestion

- Scheduled fetchers for RSS, HTML pages, PDFs, legislative APIs, agency bulletins.
- Store immutable snapshots and content hashes.
- Diff against previous snapshots to suppress duplicates.
- Feed health monitor detects broken pages, CAPTCHA, or stale feeds.

### Change intelligence

- Classifier assigns policy domain and materiality.
- Extractor pulls effective date, affected employers, threshold conditions, enforcement/penalty notes, and official citation.
- Rules engine maps change to customer footprint.

### Review console

- Reviewer sees source diff, model output, confidence, similar prior alerts, and required disclaimers.
- Reviewer can approve, reject, merge duplicates, or escalate to legal expert.
- Every edit is logged.

### Customer app

- Dashboard: jurisdiction map, upcoming effective dates, open checklists, audit timeline.
- Alert detail: plain-English summary, “why this affects you,” checklist, citations, owner, due date.
- Settings: jurisdictions, employee counts, HRIS/payroll tools, Slack channels, notification rules.

### Delivery

- Slack: high-signal alert card with severity, due date, owner button, checklist link.
- Email: weekly digest plus critical immediate alerts.
- Webhooks/API later for HRIS/payroll integration.

## Suggested stack

- Frontend: Next.js or static-first React for app shell.
- Backend: Node/TypeScript or Python/FastAPI.
- Database: Postgres with pgvector for source and alert similarity.
- Queue: BullMQ/Redis or Temporal for ingestion/review workflows.
- Storage: S3-compatible snapshots.
- Auth: Clerk/Auth0 initially.
- Integrations: Slack OAuth; BambooHR first HRIS; CSV upload fallback.

## Security and compliance

- Role-based access for HR, legal, reviewer, admin.
- Immutable audit events.
- Encrypt source snapshots and customer footprint data at rest.
- Separate customer data from public regulatory sources.
- Clear non-legal-advice disclaimer and escalation workflow.

## Observability

- Feed latency and error rate.
- Alert review SLA.
- Model confidence drift.
- Duplicate suppression rate.
- Customer acknowledgement/completion rates.
- Missed-change incident reports.
