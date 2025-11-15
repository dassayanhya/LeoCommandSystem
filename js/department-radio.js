// department-radio.js
import { loadSidebar } from "./sidebar.js";
loadSidebar("department-radio");

window.copyMessage = (btn) => {
  const text = btn.previousElementSibling.textContent.trim();
  navigator.clipboard.writeText(text)
    .then(() => {
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 1000);
    })
    .catch(() => alert("Copy failed"));
};

const user = JSON.parse(sessionStorage.getItem("leo_user")) || {};
const senderOrg = (user.org || "GUEST").toUpperCase();
document.getElementById("senderOrg").value = senderOrg;

// Recipient list (dynamic removal of user's own org)
const allOrgs = ["DOJ", "LSPD", "SAHP", "FIB", "NG", "EMS", "GOV", "GLOBAL", "LSPD/SAHP/FIB"];
const recipients = allOrgs.filter(org => org !== senderOrg);

const recipientSelect = document.getElementById("recipientSelect");
recipients.forEach(org => {
  const opt = document.createElement("option");
  opt.value = org;
  opt.textContent = org;
  recipientSelect.appendChild(opt);
});

// Message Templates (simplified subset, can expand)
const templates = {
  DOJ: [
    "How copy?",
    "Good copy, send traffic!",
    "Bad copy!",
    "Bad copy, we're currently in a situation!",
    "We have a 10-15 at DOC requesting a lawyer, are there any available?",
    "We have one of your [UNIT_TITLE]s in custody, could you 10-17 to DOC?",
    "10-4, much appreciated!",
    "Please standby for updates."
  ],

  LSPD: [
    "How copy?",
    "Good copy, send traffic!",
    "Bad copy!",
    "Bad copy, we're currently in a situation!",
    "Can we have a quick meeting at your HQ?",
    "Requesting permission to land at your helipad.",
    "We are entering your jurisdiction in chase of a car hijacker, help would be appreciated.",
    "We have one of your [UNIT_TITLE]s in custody, could you 10-17 to DOC?",
    "We're currently enroute!",
    "10-4, much appreciated!",
    "Permission Granted!",
    "Officers enroute!",
    "Global is for regrouping after latest Store Robbery. Please dispatch max units!",
    "Federals is getting robbed at global, send all available units!",
    "Global is for a checkpoint, everyone is invited!",
    "On standby for a possible hostage situation!",
    "The Global is 10-99."
  ],

  SAHP: [
    "How copy?",
    "Good copy, send traffic!",
    "Bad copy!",
    "Bad copy, we're currently in a pursuit!",
    "Requesting backup for a high-speed chase in your jurisdiction.",
    "We have one of your [UNIT_TITLE]s in custody, could you 10-17 to DOC?",
    "Requesting immediate medical assistance at highway collision.",
    "Can we have a quick meeting at your hall?",
    "Requesting permission to land at your helipad.",
    "Troopers enroute!",
    "10-4, much appreciated!",
    "Permission Granted!",
    "Be on standby for a possible roadblock activation!",
    "Global is for a sobriety checkpoint, everyone is invited!",
    "Major collision on the highway, send all available units!",
    "The Global is 10-99."
  ],

  FIB: [
    "How copy?",
    "Good copy, send traffic!",
    "Bad copy!",
    "Bad copy, we're currently in a situation!",
    "Can we have a quick meeting at your HQ?",
    "Requesting permission to land at your helipad.",
    "We are entering your jurisdiction in chase of a car hijacker, help would be appreciated.",
    "We have one of your [UNIT_TITLE]s in custody, could you 10-17 to DOC?",
    "We're currently enroute!",
    "10-4, much appreciated!",
    "Permission Granted!",
    "Agents enroute!",
    "Federals is getting robbed at global, send all available units!",
    "Global is for heavy 10-16s, send all available units!",
    "The Global is 10-99.",
    "Global is for a hood watch, send all available units!",
    "Global is for a checkpoint, everyone is invited!"
  ],

  NG: [
    "How copy?",
    "Good copy, send traffic!",
    "Bad copy!",
    "Bad copy, we're currently in a situation!",
    "Soldiers en route!",
    "Requesting permission to land at your HQ.",
    "Can we have a quick meeting at MB?",
    "We have one of your [UNIT_TITLE]s in custody, could you 10-17 to DOC?",
    "We have a 10-15 at MB, can you send a unit?",
    "We're currently enroute!",
    "10-4, much appreciated!",
    "Permission Granted!",
    "Global is for heavy 10-10s, send all available units!",
    "Global is for FZ Raid, send all available units!",
    "Soldiers are getting robbed at global, send all available units!",
    "Global is for a hood watch, send all available units!",
    "Global is for a checkpoint, everyone is invited!",
    "Be on standby for a possible hostage situation!",
    "Be on standby for possible FZ Raid!",
    "We are getting raided, please dispatch max units!",
    "10-4, waiting for your arrival!"
  ],

  EMS: [
    "How copy?",
    "Good copy, send traffic!",
    "Bad copy!",
    "Bad copy, we're currently in a situation!",
    "Ghetto is off-limits for the next 25 minutes, please inform all your units.",
    "Can we have a quick meeting at Pillbox Hospital?",
    "Requesting permission to land at your helipad.",
    "We have one of your [UNIT_TITLE]s in custody, could you 10-17 to DOC?",
    "We're currently enroute!",
    "Clean!",
    "10-4, much appreciated!",
    "Permission Granted!"
  ],

  GOV: [
    "How copy?",
    "Good copy, send traffic!",
    "Bad copy!",
    "Bad copy, we're currently in a situation!",
    "Agents enroute!",
    "Can we have a quick meeting at the Capitol?",
    "Requesting permission to land on your lawn.",
    "We have one of your [UNIT_TITLE]s in custody, could you 10-17 to DOC?",
    "We're currently enroute!",
    "10-4, much appreciated!",
    "Permission Granted!",
    "Agents enroute!",
    "Global is for regrouping for latest Store Robbery. Please dispatch max units!",
    "Global is for heavy 10-16s, send all available units!",
    "Federals is getting robbed at global, send all available units!",
    "Global is for a hood watch, send all available units!",
    "Global is for a checkpoint, everyone is invited!",
    "On standby for a possible hostage situation!",
    "The Global is 10-99."
  ],

  GLOBAL: [
    "What's the situation?",
    "Global is for regrouping after latest Store Robbery — dispatch max units!",
    "Global is for heavy 10-16s — send all available units!",
    "Federals is getting robbed at global, send all available units!",
    "Global is for a hood watch, send all available units!",
    "Global is for a checkpoint, everyone is invited!",
    "On standby for a possible hostage situation!",
    "Be on standby for a possible roadblock activation!",
    "Soldiers enroute!",
    "The Global is 10-99."
  ],

  "LSPD/SAHP/FIB": [
    "How copy?",
    "We have a 10-15 at MB, can you send a unit?",
    "We have multiple 10-15s at MB, can you send units?",
    "Global is for heavy 10-10s, send all available units!",
    "Be on standby for possible FZ Raid!",
    "We are getting raided, please dispatch max units!",
  ]
};


const messageGrid = document.getElementById("messageGrid");
const searchInput = document.getElementById("searchInput");

const unitTitles = {
  FIB: "Agent",
  LSPD: "Officer",
  SAHP: "Trooper",
  EMS: "Employee",
  GOV: "Agent",
  NG: "Soldier",
  DOJ: "Representative",
  GLOBAL: "Unit"
};

function renderMessages(targetOrg, filter = "") {
  messageGrid.innerHTML = "";
  const messages = templates[targetOrg] || [];

  const filtered = messages.filter(m => m.toLowerCase().includes(filter.toLowerCase()));

  if (!filtered.length) {
    messageGrid.innerHTML = `<p style="text-align:center; opacity:0.7;">No messages found.</p>`;
    return;
  }

  filtered.forEach(msg => {
    // Replace dynamic [UNIT_TITLE] placeholders
    const unitTitle = unitTitles[targetOrg] || "Unit";
    const line = msg.replace("[UNIT_TITLE]", unitTitle);

    const formatted = `${senderOrg} to ${targetOrg}: ${line}`;
    const div = document.createElement("div");
    div.className = "command";
    div.innerHTML = `<span>${formatted}</span><button onclick="copyMessage(this)">Copy</button>`;
    messageGrid.appendChild(div);
  });
}

recipientSelect.addEventListener("change", () => renderMessages(recipientSelect.value, searchInput.value));
searchInput.addEventListener("input", () => renderMessages(recipientSelect.value, searchInput.value));

// initial load
renderMessages(recipientSelect.value);
