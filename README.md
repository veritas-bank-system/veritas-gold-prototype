# Veritas Gold prototype

A separate, static interface prototype based on the Veritas Gold central-bank and participant-persona menu specifications. It covers a representative Phase 1 slice and the eight Phase 1 participant personas.

## Run locally

No dependencies, build step, or network connection is required. Open `index.html` in a modern browser, or serve this folder over localhost:

```sh
python3 -m http.server 4177 --bind 127.0.0.1
```

Then visit <http://127.0.0.1:4177>. Stop the server with Ctrl+C. The application uses local ES modules; use a local HTTP server if opening from `file://` is blocked by the browser.

## Included in the prototype

- Sandbox-only dashboard, role and institution context, synthetic data provenance, valuations and refresh timestamp.
- Persona switching for central bank operator/governor, commercial bank, bullion bank, custodian/vault operator, settlement bank, regulator and auditor. Each persona has its own visible menu/context, and the switch summary shows the previous and new role.
- Phase 1 screens for gold/bar registry and draft RFQ, government bond holdings, settlement accounts/monitor, custody/vaults, tasks/approvals, risk/limits, compliance, reports and audit.
- Sample record details, status filters, synthetic global search, and explanatory dialogs for blocked actions and roadmap-only features.
- Phase 2 sandbox workspaces for dealing personas (central bank operator, commercial bank, bullion bank): FX & money markets (indicative rate board), Repo & collateral (sample repo/reverse-repo trades with haircuts), and Gold financing (sample loans and leases). All are static fixtures labelled "not executable"; no pricing, margin, accrual or settlement engine exists.

## Safety and scope

This is a **static UI prototype**, not an operational financial application. Every institution, user, asset, balance, price, workflow, event and status shown is synthetic or illustrative. RFQ drafts are local UI interactions only. This prototype has no backend, durable storage, authentication, server-side authorization, live ledger, production mode, live money, real transfer, actual approval, external service, custody or payment integration, or verified audit evidence. Persona switching is an interface demonstration and must not be treated as access control. Auditor/read-only behaviour is a UI affordance only, not an authorization boundary. No action in this app moves assets or funds.

Phase 2/3 specifications such as auctions and issuance, ISO 20022 and custodian/market-data integrations, accounting and general ledger, production payment rails, tokenized assets and cross-border settlement remain roadmap-only, not implemented. The three implemented Phase 2 sandbox workspaces are demonstrative fixtures only — nothing is quoted, pledged, lent or settled. The prototype is intentionally not registered in the modified umbrella `programs.json`; the separate folder avoids changing the umbrella registry or adjacent projects.
