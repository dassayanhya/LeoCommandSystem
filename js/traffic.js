import { loadSidebar } from "./sidebar.js";
loadSidebar("traffic");

const trafficCodes = [
  { code: 'T.C. 2.1', title: 'Absence of a valid license plate', fine: '$5,000', jail: '-', class: '-', stars: '-', notes: '' },
  { code: 'T.C. 3.2.1', title: 'Driving in the opposite lane of the road', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '' },
  { code: 'T.C. 3.2.2', title: 'Driving the opposite lane of the highway', fine: '$15,000 + Revocation', jail: '30 months', class: 'Felony (Class D)', stars: '⭐⭐', notes: '' },
  { code: 'T.C. 6.2.a', title: 'Parking on red curbs', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: 'Vehicle may be towed' },
  { code: 'T.C. 6.2.c', title: 'Blocking exit from anywhere', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: 'Vehicle may be towed' },
  { code: 'T.C. 6.2.f', title: 'Parking on a driving lane', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: 'Vehicle may be towed' },
  { code: 'T.C. 6.2.i', title: 'Parking on the highway or freeway', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: 'Vehicle may be towed' }
];

const container = document.getElementById("trafficContainer");
const searchInput = document.getElementById("searchInput");

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  const toast = document.createElement("div");
  toast.className = "copy-toast";
  toast.textContent = "Copied!";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function renderCodes(data) {
  container.innerHTML = "";
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "code-card";

    const info = `${item.code} - ${item.title}`;

    card.innerHTML = `
      <button class="copy-btn" title="Copy Code">📋 Copy</button>
      <h3>${item.code} - ${item.title}</h3>
      <div class="code-details">
        <span><strong>Fine:</strong> ${item.fine}</span>
        <span><strong>Jail:</strong> ${item.jail}</span>
        <span><strong>Class:</strong> ${item.class}</span>
        <span><strong>Stars:</strong> ${item.stars}</span>
      </div>
      <p class="code-notes">${item.notes}</p>
    `;

    card.querySelector(".copy-btn").addEventListener("click", () => copyToClipboard(info));
    container.appendChild(card);
  });
}

renderCodes(trafficCodes);

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = trafficCodes.filter(i =>
    i.code.toLowerCase().includes(q) ||
    i.title.toLowerCase().includes(q) ||
    i.class.toLowerCase().includes(q)
  );
  renderCodes(filtered);
});
