// js/bodycam.js
import { loadSidebar } from "./sidebar.js";
loadSidebar('bodycam');

window.copyCommand = (btn) => {
  const text = btn.previousElementSibling.textContent.trim();
  navigator.clipboard.writeText(text)
    .then(() => {
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 1200);
    })
    .catch(() => alert("Copy failed"));
};

const user = JSON.parse(sessionStorage.getItem('leo_user')) || {};
const org = (user.org || 'GUEST').toUpperCase();
const badge = user.badge || '000';
const londonTime = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/London" });
const section = document.getElementById('bodycam-section');

const templates = {
  LSPD: makeTemplate(true),
  SAHP: makeTemplate(true),
  FIB: makeTemplate(true),
  NG: makeTemplate(false),
  EMS: makeTemplate(false)
};

function makeTemplate(hasDispatch) {
  return [
    {
      heading: "BEFORE STARTING SHIFT",
      lines: [
        "/me Takes out bodycam, attaches it to chest, checks its ballistic, water proof",
        "/me makes sure it is recording and checks for the red light",
        "/do It is recording, is ballistic and water proof",
        `/me connects the PDA to the nearby cell tower of ${org}`,
        ...(hasDispatch ? [`${badge} to dispatch : Show me 10-41 at ${londonTime}`] : [])
      ]
    },
    {
      heading: "REFRESHING YOUR BODYCAM",
      lines: [
        "/me refreshing bodycam",
        "/do bodycam is recording"
      ]
    },
    {
      heading: "SAVING YOUR BODYCAM",
      lines: [
        `/me saves bodycam contents onto an SD card, then uploads SD to ${org} cloud servers using PDA`,
        "/do bodycam refreshes and continues recording"
      ]
    },
    {
      heading: "FINISHING YOUR SHIFT",
      lines: [
        `/me takes out an SD card from the bodycam, puts it in the phone and uploads it to the ${org}`,
        "/me puts an ID Badge inside the locker until the next shift",
        ...(hasDispatch ? [`${badge} to dispatch : Show me 10-42 at ${londonTime}`] : [])
      ]
    }
  ];
}

const data = templates[org] || templates['LSPD'];

// render
section.innerHTML = data.map(cat => `
  <div class="category">
    <h2>${cat.heading}</h2>
    <div class="command-list">
      ${cat.lines.map(line => `
        <div class="command">
          <span>${line}</span>
          <button onclick="copyCommand(this)">Copy</button>
        </div>
      `).join('')}
    </div>
  </div>
`).join('');
