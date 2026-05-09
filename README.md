# Statutepin — Labor Law Wire Build Plan

Public build-plan repo for the 2026-05-09 Idea of the Day: **Labor law alert system for companies with remote teams**.

Source idea: https://www.ideabrowser.com/idea/state-labor-law-update-tracker-for-hr-officers

## One-line thesis

Remote teams hire across jurisdictions faster than HR can track wage, leave, sick-time, scheduling, and notice changes. Statutepin converts official labor-law changes into reviewed, actionable alerts before the next payroll cycle.

## Product

**Statutepin** is a B2B SaaS for HR generalists at 50–300 employee remote/hybrid companies. It monitors official labor-law sources, detects relevant changes, creates human-reviewed summaries and checklists, sends Slack/email alerts, and preserves an audit log of HR response.

## Why now

- Remote/hybrid hiring created multi-state compliance footprints for companies too small to have deep legal/compliance teams.
- State and local labor rules change faster than quarterly newsletters.
- HRIS/payroll systems hold employee footprint data but do not reliably translate rule changes into action.
- IdeaBrowser signals: Opportunity 9, Problem 9, Why Now 8, GTM 9/10, with “Employment law compliance” showing 8.1K volume and +3757% growth.

## ICP and JTBD

- **ICP:** HR generalists / HR officers at 50–300 employee companies with employees in 5–10 states.
- **JTBD:** “When labor rules change where we employ people, tell me what changed, what it means for us, what action to take, and keep proof that we responded.”

## MVP

1. Cover CA, NY, WA, CO, IL wage/hour, sick leave, paid leave, scheduling, notices/posters, and effective-date changes.
2. Monitor official feeds and agency pages.
3. Use LLMs for classification/extraction, but require human review.
4. Send Slack/email alerts with citations, severity, due date, and checklist.
5. Dashboard shows jurisdiction risk, open actions, and audit timeline.
6. Charge $299/month for 5 states, $499/month for 10 states + HRIS sync.

## Repo contents

- `index.html`, `styles.css`, `script.js` — polished static prototype.
- `docs/OFFICE_HOURS.md` — product diagnostic rubric.
- `docs/CEO_REVIEW.md` — CEO review critique and decisions.
- `docs/PRD.md` — product requirements.
- `docs/ARCHITECTURE.md` — technical architecture.
- `docs/ROADMAP.md` — 30/60/90 day roadmap.
- `docs/GTM.md` — go-to-market plan.
- `docs/RISKS.md` — risk register and kill criteria.
- `research/notes.md` — summarized, sanitized source research.
- `src/README.md` — implementation package plan.

## Legal boundary

Statutepin is not a law firm and does not provide legal advice. The product summarizes official sources, creates operational checklists, cites sources, and gives teams a workflow for review, escalation, and audit evidence.
