// arrestwarrant.js (patched version)
window.addEventListener("DOMContentLoaded", () => {

  const safeParse = (k) => { try { return JSON.parse(sessionStorage.getItem(k)); } catch { return null; } };
  const user = safeParse("leo_user") || {};

  // DOM refs
  const elName = document.getElementById("aw-name");
  const elOrg = document.getElementById("aw-org");
  const elId = document.getElementById("aw-id");
  const elBadge = document.getElementById("aw-badge");
  const elDate = document.getElementById("aw-date");

  const filingOrgInput = document.getElementById("filingOrg");
  const judgeInput = document.getElementById("judgeName");
  const suspectNameInput = document.getElementById("suspectName");
  const suspectSSNInput = document.getElementById("suspectSSN");
  const chargesInput = document.getElementById("charges");
  const warrantDateInput = document.getElementById("warrantDate");

  const generateBtn = document.getElementById("generateWarrant");
  const copyBtn = document.getElementById("copyWarrant");
  const downloadBtn = document.getElementById("downloadPdf");
  const output = document.getElementById("warrantOutput");

  // === TIME HELPERS ===
  const getUserNow = () => new Date(); // user local timezone
  const formatDDMMYYYY = (d) => {
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  const formatIDDate = (d) => {
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}${mm}${yyyy}`;
  };

  // === POPULATE HEADER INFO ===
  elName.textContent = user.name || "Unknown";
  elOrg.textContent = user.org || "-";
  elId.textContent = user.icid || user.id || "-";
  elBadge.textContent = user.badge || "-";
  elDate.textContent = formatDDMMYYYY(getUserNow());

  // === FIX 1 — Filing Org auto-fill & readonly ===
  filingOrgInput.value = user.org || "UNKNOWN";
  filingOrgInput.readOnly = true;

  // === FIX 2 — Date auto-fill today's date & readonly ===
  const today = getUserNow();
  warrantDateInput.value = formatDDMMYYYY(today);
  warrantDateInput.readOnly = true;

  // Warrant ID format: DDMMYYYY-DOJ-[ORG]-WA01
  const generateWarrantID = (dateStr, org) => {
    const safeOrg = (org || "ORG").replace(/\s+/g, "");
    return `${dateStr}-DOJ-${safeOrg}-WA01`;
  };

  // === MAIN GENERATOR ===
  generateBtn.addEventListener("click", () => {

    const filingOrg = user.org || "UNKNOWN";
    const judgeName = judgeInput.value.trim() || "Judge of the Court";
    const suspectName = suspectNameInput.value.trim() || "Unknown Suspect";
    const ssn = suspectSSNInput.value.trim() || "N/A";

    const chargesRaw = chargesInput.value.trim();
    const chargesList = chargesRaw
      ? chargesRaw.split(/\r?\n/).map(c => c.trim()).filter(Boolean)
      : [];

    const dateForId = formatIDDate(today);
    const humanDate = formatDDMMYYYY(today);

    const warrantID = generateWarrantID(dateForId, filingOrg);

    // === Warrant Text (exact Google Doc style) ===
    const text = `
Department of Justice for the State of San Andreas

WARRANT OF ARREST

Warrant ID: ${warrantID}

All Evidence has been reviewed by a Judge of the Court and the Suspect has been found Guilty by the Court under the laws of the State of San Andreas. This warrant authorizes the arrest of the person named below and the presentation of that person before the issuing court.

Suspect Name: ${suspectName}
SSN: ${ssn}

Charges:
${chargesList.length ? chargesList.map((c,i)=>`${i+1}. ${c}`).join("\n") : "No charges supplied."}

Issued By: ${judgeName}
Filing Organization: ${filingOrg}
Warrant Date: ${humanDate}

Signed:
_____________________________
${judgeName}
    `.trim();

    output.value = text;
  });

  // === COPY ===
  copyBtn.addEventListener("click", () => {
    if (!output.value.trim()) return alert("Generate the warrant first!");
    navigator.clipboard.writeText(output.value);
    copyBtn.textContent = "Copied!";
    setTimeout(()=> copyBtn.textContent = "COPY WARRANT", 1400);
  });

  // === TXT DOWNLOAD ===
  downloadBtn.addEventListener("click", () => {
    if (!output.value.trim()) return alert("Generate the warrant first!");
    const blob = new Blob([output.value], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `Warrant-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  });

});