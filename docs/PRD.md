# Product Requirements Document — Statutepin

## Product promise

Statutepin alerts HR before a jurisdictional labor-law change becomes a payroll, policy, or audit problem.

## ICP

Mid-market remote/hybrid companies with 50–300 employees and workers in 5–10 states. Primary user: HR generalist. Economic buyer: Head of People, COO, CFO. Influencers: legal counsel and payroll admin.

## JTBD

When labor rules change in any jurisdiction where we employ people, tell me what changed, whether it affects us, what to do next, and keep proof that we responded.

## MVP scope

### Must have

- Customer jurisdiction profile: states/cities, employee counts, payroll provider, HRIS.
- Source feed registry for initial jurisdictions.
- Ingestion jobs for legislative, agency, and official bulletin feeds.
- LLM-assisted change detection and classification.
- Human review console.
- Alert objects with source citations, confidence, effective date, affected policy area, and checklist.
- Slack and email delivery.
- Dashboard with jurisdiction risk status.
- Audit log of alert delivery, acknowledgement, owner assignment, completion, and legal escalation.

### Nice later

- HRIS sync for employee-location footprint.
- Payroll-provider policy mapping.
- Counsel collaboration portal.
- City/county ordinance depth.
- Benchmarking across similar companies.

## User stories

1. As an HR generalist, I want a daily risk digest so I know whether anything changed before payroll.
2. As an HR manager, I want an alert to include an action checklist so I can update policy without interpreting legal text from scratch.
3. As legal counsel, I want cited sources and an audit trail so I can validate what HR relied on.
4. As an admin, I want to configure jurisdictions and employee counts so alerts reflect our footprint.
5. As a reviewer, I want LLM-drafted summaries with highlighted source diffs so I can approve quickly.

## Data model

- **Organization:** name, plan, industry, employee_count, payroll_cycle, HRIS/payroll tools.
- **Jurisdiction:** country, state, city/county, policy domains, feed URLs, priority.
- **SourceDocument:** jurisdiction_id, URL, title, raw text hash, fetched_at, effective date if known, snapshot path.
- **DetectedChange:** source_document_id, change_type, domain, confidence, summary, diff, extracted dates.
- **Review:** detected_change_id, reviewer, status, edits, legal_boundary_notes, approved_at.
- **Alert:** org_id, jurisdiction_id, title, impact_summary, checklist, severity, due_date, citations.
- **ActionItem:** alert_id, owner, status, due_date, completion_notes.
- **AuditEvent:** entity_type, entity_id, actor, event, timestamp, metadata.

## AI/model strategy

- Use deterministic fetchers and source snapshots; never rely on a model as a source of truth.
- LLM stage 1: classify whether a document includes labor-law changes.
- LLM stage 2: extract structured fields: domain, affected employers, effective date, action required, confidence.
- LLM stage 3: draft plain-English HR summary and checklist.
- Human reviewer approves all customer-facing alerts until 95% precision/recall proxy over 100 consecutive reviewed alerts.
- Add retrieval from source text only; cite exact source snippets.
- No legal advice language; product gives operational summaries and recommends legal review for ambiguous/high-severity changes.

## Success metrics

- Time from official source publication to approved alert: <24 hours for priority feeds.
- Alert acknowledgement rate: >75%.
- Customer action per material alert: >50%.
- False positive rate: <10% after first 60 days.
- Verified missed material changes: zero for covered priority domains.
- Pilot conversion: 30%+ from concierge trial to paid.
