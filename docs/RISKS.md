# Risks — Statutepin

## Product and trust risks

- **False negative:** Missing a material change is catastrophic. Mitigation: constrained coverage, feed health checks, reviewer QA, customer-visible coverage boundaries.
- **False positive/noise:** HR mutes noisy alerts. Mitigation: materiality thresholds, weekly digests for low severity, customer feedback loops.
- **Legal advice boundary:** Users may treat summaries as legal advice. Mitigation: disclaimers, citations, legal escalation, operational checklist framing.

## Market risks

- **Incumbents bundle alerts:** J.J. Keller, payroll providers, and law firms can offer newsletters. Mitigation: real-time workflow, customer-specific footprint, audit log, integrations.
- **Willingness-to-pay ambiguity:** HR may want free content. Mitigation: sell to penalty avoidance and payroll-cycle urgency; require paid pilots.
- **Sprawl:** Every jurisdiction/domain asks for custom coverage. Mitigation: publish coverage matrix and only expand where revenue supports review cost.

## Operational risks

- **Human review bottleneck:** Margins suffer at $299/month. Mitigation: structured templates, source diffing, active learning, reviewer productivity metrics.
- **Source fragility:** Government sites change. Mitigation: monitoring, fallback fetchers, source registry ownership.
- **Integration delays:** HRIS APIs vary. Mitigation: start with CSV/manual employee-location profile before BambooHR.

## Technical risks

- LLM hallucination or over-summary.
- Duplicate and contradictory source updates.
- Effective-date extraction errors.
- Poor audit-log integrity.

## Kill criteria

- Fewer than 3 of 15 pilots will pay $299/month after a real alert.
- Customers do not take action from alerts.
- Review cost remains above 35% gross margin after 60 days for narrow coverage.
- Trust score from legal/payroll reviewers is below 8/10.
