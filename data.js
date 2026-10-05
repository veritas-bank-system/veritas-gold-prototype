export const roles = {
  operator: {name:"A. Rahman", title:"Treasury operator", org:"Central Reserve Bank", unit:"Gold desk · CRB reserves", permissions:"View · draft · request quote", currency:"USD", nav:["Dashboard","Tasks & approvals","Gold & bullion","Government bonds","Settlement accounts","Settlement monitor","Custody & vaults","Risk & limits","Compliance","Audit center","Reports"]},
  governor: {name:"M. Okafor", title:"Central bank governor", org:"Central Reserve Bank", unit:"Executive office · CRB", permissions:"View · executive review", currency:"USD", nav:["Dashboard","Tasks & approvals","Reserve overview","Risk & limits","Compliance","Reports","Audit center"]},
  commercial: {name:"L. Chen", title:"Treasury dealer", org:"Meridian Commercial Bank", unit:"Treasury · Meridian Bank", permissions:"View · draft · request quote", currency:"USD", nav:["Dashboard","Tasks & approvals","Gold & bullion","Government bonds","Settlement accounts","Settlement monitor","Custody & vaults","Risk & limits","Compliance","Audit center"]},
  bullion: {name:"S. Laurent", title:"Bullion desk operator", org:"Auric Bullion Bank", unit:"Bullion desk · Auric", permissions:"View · draft · request quote", currency:"USD", nav:["Dashboard","Tasks & approvals","Gold & bullion","Government bonds","Settlement accounts","Settlement monitor","Custody & vaults","Risk & limits","Compliance","Audit center"]},
  custodian: {name:"E. Mensah", title:"Vault operations officer", org:"Crown Custody Services", unit:"Custody operations · Crown", permissions:"View · record inspection", currency:"USD", nav:["Dashboard","Custody & vaults","Gold & bullion","Settlement monitor","Settlement accounts","Compliance","Audit center"]},
  settlement: {name:"R. Silva", title:"Settlement operations officer", org:"Continental Settlement Bank", unit:"Settlement operations · CSB", permissions:"View · reconcile · record exception", currency:"USD", nav:["Dashboard","Settlement monitor","Settlement accounts","Custody & vaults","Tasks & approvals","Compliance","Audit center"]},
  regulator: {name:"N. Diallo", title:"Supervisory analyst", org:"Financial Supervisory Authority", unit:"Supervision · FSA", permissions:"Read-only · request evidence", currency:"USD", nav:["Dashboard","Risk & limits","Compliance","Settlement monitor","Custody & vaults","Reports","Audit center"]},
  auditor: {name:"J. Patel", title:"External auditor", org:"Office of Public Audit", unit:"Audit mandate · OPA", permissions:"Read-only · annotate evidence", currency:"USD", nav:["Dashboard","Audit center","Tasks & approvals","Gold & bullion","Government bonds","Settlement monitor","Custody & vaults","Compliance","Reports"]}
};
export const roleLabels = {operator:"Central bank operator",governor:"Central bank governor",commercial:"Commercial bank",bullion:"Bullion bank",custodian:"Custodian / vault operator",settlement:"Settlement bank",regulator:"Regulator / supervisor",auditor:"Auditor"};
export const bars = [
 {id:"VG-CRB-004281",serial:"PAMP 8F-29184",refinery:"MKS PAMP",origin:"Switzerland",gross:12.441,fine:12.438,purity:"999.8‰",vault:"Zurich Vault 02",owner:"Central Reserve Bank",status:"Available",assay:"Verified · 14 Feb 2025"},
 {id:"VG-CRB-004282",serial:"ARG-930177",refinery:"Argor-Heraeus",origin:"Switzerland",gross:12.502,fine:12.497,purity:"999.6‰",vault:"London Vault 01",owner:"Central Reserve Bank",status:"Reserved",assay:"Verified · 03 Mar 2025"},
 {id:"VG-CRB-004283",serial:"VAL-115802",refinery:"Valcambi",origin:"Ghana",gross:12.395,fine:12.391,purity:"999.7‰",vault:"Zurich Vault 02",owner:"Central Reserve Bank",status:"Pledged",assay:"Verified · 20 Jan 2025"},
 {id:"VG-CRB-004284",serial:"PAMP 8F-29190",refinery:"MKS PAMP",origin:"Switzerland",gross:12.512,fine:12.508,purity:"999.7‰",vault:"Singapore Vault 03",owner:"Central Reserve Bank",status:"Available",assay:"Verified · 14 Feb 2025"},
 {id:"VG-MCB-001105",serial:"ARG-882430",refinery:"Argor-Heraeus",origin:"Switzerland",gross:12.486,fine:12.481,purity:"999.6‰",vault:"London Vault 01",owner:"Meridian Commercial Bank",status:"Available",assay:"Verified · 18 Mar 2025"}
];
export const bonds = [
 {issuer:"Republic of Norland",isin:"XS2048117204",name:"Norland Government Bond 2030",currency:"USD",coupon:"3.250%",maturity:"15 Jun 2030",yield:"3.82%",value:428000000,duration:"3.7 yrs",rating:"AA"},
 {issuer:"Republic of Norland",isin:"XS2192843301",name:"Norland Treasury Note 2028",currency:"EUR",coupon:"2.100%",maturity:"02 Nov 2028",yield:"2.46%",value:286000000,duration:"2.2 yrs",rating:"AA"},
 {issuer:"European Stability Facility",isin:"EU000A3K4D57",name:"ESF Sustainability Bond 2032",currency:"EUR",coupon:"2.875%",maturity:"18 Sep 2032",yield:"2.98%",value:162000000,duration:"5.8 yrs",rating:"AAA"}
];
export const accounts = [
 {name:"Reserve settlement · USD",id:"CRB-SET-USD-01",currency:"USD",balance:1284500000,available:1084500000,reserved:200000000,status:"Reconciled"},
 {name:"Reserve settlement · EUR",id:"CRB-SET-EUR-02",currency:"EUR",balance:742800000,available:692800000,reserved:50000000,status:"Reconciled"},
 {name:"Bullion settlement · CHF",id:"CRB-BULL-CHF-01",currency:"CHF",balance:84600000,available:84600000,reserved:0,status:"Reconciled"}
];
export const approvals = [
 {id:"APR-2025-0194",title:"Bilateral allocated gold RFQ",detail:"Buy 2,500 fine oz · Auric Bullion Bank",amount:"$8,203,125",requester:"A. Rahman",age:"18 min ago",risk:"Medium",status:"Pending review",evidence:"RFQ-CRB-2025-0081"},
 {id:"APR-2025-0192",title:"Vault inspection record",detail:"Zurich Vault 02 · Q1 physical count",amount:"—",requester:"E. Mensah",age:"1 hr ago",risk:"Low",status:"Pending review",evidence:"INS-2025-0041"},
 {id:"APR-2025-0187",title:"Counterparty limit review",detail:"Auric Bullion Bank · annual refresh",amount:"$25.0M limit",requester:"K. Dlamini",age:"3 hrs ago",risk:"Elevated",status:"Pending review",evidence:"KYC-ABB-2025-01"}
];
export const settlements = [
 {id:"STL-2025-03821",trade:"TRD-2025-0081",counterparty:"Auric Bullion Bank",asset:"Allocated gold · 2,500 oz",cash:"$8,203,125 USD",date:"Today · 14:30 UTC",cashState:"Reserved",assetState:"Awaiting custodian",status:"In progress"},
 {id:"STL-2025-03818",trade:"TRD-2025-0078",counterparty:"Meridian Commercial Bank",asset:"Norland Bond 2030",cash:"€12,500,000 EUR",date:"Today · 12:00 UTC",cashState:"Settled",assetState:"Confirmed",status:"Reconciled"},
 {id:"STL-2025-03812",trade:"TRD-2025-0071",counterparty:"Crown Custody Services",asset:"Vault transfer · 8 bars",cash:"—",date:"Yesterday · 16:45 UTC",cashState:"N/A",assetState:"Exception · evidence",status:"Exception"}
];
export const cases = [
 {id:"CMP-2025-0082",title:"Responsible sourcing evidence refresh",entity:"Auric Bullion Bank",category:"Source of gold",severity:"Review",due:"Due in 2 days",status:"Evidence requested"},
 {id:"CMP-2025-0079",title:"Annual counterparty KYC review",entity:"Meridian Commercial Bank",category:"KYC / KYB",severity:"Normal",due:"Due in 8 days",status:"In progress"},
 {id:"CMP-2025-0071",title:"Vault insurance certificate expiry",entity:"Crown Custody Services",category:"Custody documentation",severity:"Elevated",due:"Expired 1 day ago",status:"Action required"}
];
export const events = [
 {time:"10:42:18",actor:"A. Rahman",event:"RFQ draft created",target:"RFQ-CRB-2025-0081",detail:"2,500 fine oz · sandbox only",kind:"Draft"},
 {time:"10:18:04",actor:"E. Mensah",event:"Inspection record viewed",target:"INS-2025-0041",detail:"Zurich Vault 02 · read access",kind:"Access"},
 {time:"09:56:31",actor:"J. Patel",event:"Evidence annotation added",target:"CMP-2025-0079",detail:"Auditor workpaper · synthetic",kind:"Evidence"},
 {time:"09:32:09",actor:"R. Silva",event:"Settlement exception recorded",target:"STL-2025-03812",detail:"Custodian proof pending",kind:"Exception"}
];
