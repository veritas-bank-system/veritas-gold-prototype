import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { roles, roleLabels, bars, bonds, accounts, approvals, settlements, cases, events } from "./data.js";

const expectedRoles = ["operator", "governor", "commercial", "bullion", "custodian", "settlement", "regulator", "auditor"];
assert.deepEqual(Object.keys(roles), expectedRoles);
assert.deepEqual(Object.keys(roleLabels), expectedRoles);
for (const role of expectedRoles) assert.ok(roles[role].nav.length > 0, `${role} has navigation`);
assert.ok(roles.auditor.permissions.startsWith("Read-only"));
assert.ok(!roles.auditor.nav.some(x => /transfer|payment|admin/i.test(x)));
assert.equal(bars.length, 5);
assert.equal(new Set(bars.map(x => x.id)).size, bars.length);
assert.ok(bars.every(x => x.id && x.serial && x.refinery && x.origin && x.gross > x.fine && x.purity && x.vault && x.owner && x.status && x.assay));
assert.equal(bonds.length, 3);
assert.ok(bonds.every(x => /^[A-Z0-9]{12}$/.test(x.isin) && x.value > 0 && x.currency));
assert.equal(accounts.length, 3);
assert.ok(accounts.every(x => x.balance === x.available + x.reserved));
assert.equal(approvals.length, 3);
assert.ok(approvals.every(x => x.id && x.requester && x.risk && x.status && x.evidence));
assert.equal(settlements.length, 3);
assert.equal(cases.length, 3);
assert.equal(events.length, 4);

const app = await readFile(new URL("./app.js", import.meta.url), "utf8");
const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const css = await readFile(new URL("./styles.css", import.meta.url), "utf8");
const readme = await readFile(new URL("./README.md", import.meta.url), "utf8");
for (const page of ["Dashboard", "Tasks & approvals", "Gold & bullion", "Government bonds", "Settlement accounts", "Settlement monitor", "Custody & vaults", "Risk & limits", "Compliance", "Audit center", "Reports", "Phase 2 workspaces"]) assert.ok(app.includes(`"${page}"`), `page covered: ${page}`);
for (const term of ["liveIntegrations:false", "environment:\"Sandbox\"", "Synthetic", "Read-only scope", "No counterparty contact or fund reservation", "PREVIOUS PERSONA", "NEW PERSONA"]) assert.ok(app.includes(term), `safety label present: ${term}`);
assert.ok(!/window\.open\(|fetch\(|XMLHttpRequest|https?:\/\//.test(app), "application does not contact external services");
assert.ok(html.includes("Sandbox · synthetic demonstration"));
assert.ok(html.includes("type=\"module\""));
assert.ok(css.includes("@media(max-width:680px)"));
assert.ok(readme.includes("has no backend"));

const base = process.argv[2];
if (base) {
  for (const [path, type] of [["/", "text/html"], ["/app.js", "text/javascript"], ["/data.js", "text/javascript"], ["/styles.css", "text/css"]]) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200, `${path} served`);
    assert.ok(response.headers.get("content-type").includes(type), `${path} content type`);
    assert.ok((await response.text()).length > 100, `${path} has content`);
  }
}
console.log("Veritas Gold prototype smoke checks passed (roles, scope, fixtures, safety, assets, HTTP).");
