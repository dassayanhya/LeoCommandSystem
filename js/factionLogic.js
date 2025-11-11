// js/factionLogic.js
// This is a simple client-side demo: when loaded it reads sessionStorage leo_user
// and renders faction-specific commands. In a full app you'd fetch commands from Firestore.

const userRaw = sessionStorage.getItem('leo_user');
const userArea = document.getElementById('userArea');
const commandsArea = document.getElementById('commandsArea');
const logoutBtn = document.getElementById('btn-logout');

if (!userRaw) {
  // if no session, redirect back to login
  window.location.href = 'login.html';
} else {
  const user = JSON.parse(userRaw);
  renderUser(user);
  applyFactionTheme(user.org || user.org || 'GUEST');
  renderCommandsForFaction(user.org || 'GUEST');
}

function renderUser(user) {
  const html = `
    <h2 style="color:var(--neon); margin:0 0 8px 0;">Welcome, ${escapeHtml(user.name || user.email || 'User')}</h2>
    <div style="color:var(--muted); font-weight:700;">
      <div>Org: <strong style="color:var(--accent)">${escapeHtml(user.org || 'GUEST')}</strong></div>
      <div>Rank: ${escapeHtml(user.rank || '-')}</div>
      <div>ID: ${escapeHtml(user.uid || '-')}</div>
      <div>IC ID: <span>${user.icid || user.id || "Not Assigned"}</span></p>
    </div>
  `;
  userArea.innerHTML = html;
}

function applyFactionTheme(org) {
  // Example simple theme switch — extend as you like
  const card = document.getElementById('dashboardCard');
  org = (org || 'GUEST').toUpperCase();
  let accent = 'var(--neon)';
  if (org === 'LSPD') accent = '#00b3ff';
  if (org === 'EMS') accent = '#ff7a00';
  if (org === 'NG') accent = '#9bcf00';
  if (org === 'FIB') accent = '#c92cff';
  if (org === 'SAHP') accent = '#00ffcc';
  if (org === 'GOV') accent = '#ffd100';

  // set CSS variable locally
  card.style.borderColor = 'rgba(0,0,0,0.45)';
  card.querySelector('h2')?.style?.setProperty('color', accent);
  // set page root accent (so other components can use it)
  document.documentElement.style.setProperty('--neon', accent);
}

function renderCommandsForFaction(org) {
  org = (org || 'GUEST').toUpperCase();
  // Example static commands — replace with Firestore fetch in production
  const sampleCommands = {
    'LSPD': [
      '/me draws service weapon',
      '/do Requesting backup 10-99'
    ],
    'EMS': [
      '/me applies first aid',
      '/do Requesting med unit'
    ],
    'NG': [
      '/me attaches bodycam',
      '/do Securing perimeter'
    ],
    'GUEST': [
      '/me waves',
      '/do Observing area'
    ]
  };

  const commands = sampleCommands[org] || sampleCommands['GUEST'];

  const html = `<h3 style="color:var(--accent); margin-top:0">Commands (${org})</h3>
    <div style="display:flex; flex-direction:column; gap:10px;">
      ${commands.map(cmd => `
        <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.4); padding:10px 14px; border-radius:8px;">
          <div style="font-weight:700; color:#eaf7fb;">${escapeHtml(cmd)}</div>
          <button class="btn neon" onclick="copyCommand('${escapeJs(cmd)}')">Copy</button>
        </div>
      `).join('')}
    </div>
  `;
  commandsArea.innerHTML = html;
}

// logout
logoutBtn.addEventListener('click', () => {
  sessionStorage.removeItem('leo_user');
  window.location.href = 'index.html';
});

// small helpers
window.copyCommand = (txt) => {
  navigator.clipboard.writeText(txt).then(() => {
    alert('Command copied to clipboard');
  }).catch(() => alert('Copy failed'));
};

function escapeHtml(s){ return (s+'').replace(/[&<>"']/g, (m)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function escapeJs(s){ return s.replace(/'/g,"\\'").replace(/"/g,'\\"'); }
