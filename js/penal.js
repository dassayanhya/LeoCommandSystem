import { loadSidebar } from "./sidebar.js";
loadSidebar("penal");

const penalCodes = [
  { code: 'P.C. 2.1.1', title: 'Possession of Cocaine in Small Quantities', fine: '$10,000 + Confiscation', jail: '-', class: '-', stars: '-', notes: 'Possession of no more than four (4) units of cocaine.' },
  { code: 'P.C. 2.1.2', title: 'Possession of Cocaine in Moderate Quantities', fine: '$30,000 + Confiscation', jail: '-', class: '-', stars: '-', notes: 'Between 5 to 8 units of cocaine (5-8)' },
  { code: 'P.C. 2.1.3', title: 'Possession of Cocaine with Intent to Supply', fine: '$55,000 + Confiscation', jail: '30 months', class: 'Felony (Class D)', stars: '⭐⭐', notes: 'Possession of more than eight (8) units of cocaine.' },
  { code: 'P.C. 2.5.1', title: 'Carrying Without a License', fine: '$20,000 + Confiscation', jail: '-', class: 'Infraction (Class A)', stars: '-', notes: 'Carrying weapons without the proper license.' },
  { code: 'P.C. 2.5.2', title: 'Overcarrying', fine: '$20,000 + Confiscation', jail: '30 months', class: 'Felony (Class D)', stars: '⭐⭐', notes: 'Exceeding the carrying limit as defined in the Gun Law.' },
  { code: 'P.C. 2.5.3', title: 'Open Carrying', fine: '$15,000 + Confiscation + Revocation', jail: '30 months', class: 'Felony (Class D)', stars: '⭐⭐', notes: 'Publicly displaying any object typically used to harm others.' },
  { code: 'P.C. 2.6.1', title: 'Non-lethal Battery', fine: '$10,000', jail: '15 months', class: 'Felony (Class E)', stars: '⭐', notes: 'Intentional infliction of bodily harm without the use of firearms' },
  { code: 'P.C. 2.6.2', title: 'Manslaughter', fine: '$20,000', jail: '45 months', class: 'Felony (Class C)', stars: '⭐⭐⭐', notes: 'Unintentionally causing the death of another person.' },
  { code: 'P.C. 2.6.4', title: 'Attempted Murder', fine: '$35,000', jail: '75 months', class: 'Felony (Class A)', stars: '⭐⭐⭐⭐⭐', notes: 'Attempting to murder another person either directly or indirectly.' },
  { code: 'P.C. 2.10.6', title: 'Robbery', fine: '$38,000', jail: '60 months', class: 'Felony (Class B)', stars: '⭐⭐⭐⭐', notes: 'Taking property from a person or place by force or threat.' },
  { code: 'P.C. 3.5', title: 'Failure to Comply', fine: '$35,000', jail: '60 months', class: 'Felony (Class B)', stars: '⭐⭐⭐⭐', notes: 'Intentionally refusing to cooperate with lawful requests from state employees.' },
  { code: 'P.C. 3.6', title: 'Failure to Identify', fine: '$20,000', jail: '30 months', class: 'Felony (Class D)', stars: '⭐⭐', notes: 'Intentionally refusing to provide state-issued identification upon lawful request.' },
  { code: 'P.C. 3.18.1', title: 'Evading Arrest', fine: '$25,000', jail: '45 months', class: 'Felony (Class C)', stars: '⭐⭐⭐', notes: 'Fleeing from a police officer attempting to arrest, detain, or investigate.' },
  { code: 'P.C. 6.5', title: 'Reckless Driving', fine: '$35,000', jail: '30 months', class: 'Felony (Class D)', stars: '⭐⭐', notes: 'Operating a vehicle in willful or wanton disregard for the traffic code.' }
];

const container = document.getElementById("penalContainer");
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
    const info = `
${item.code} - ${item.title}`;
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

renderCodes(penalCodes);

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = penalCodes.filter(i =>
    i.code.toLowerCase().includes(q) ||
    i.title.toLowerCase().includes(q) ||
    i.class.toLowerCase().includes(q)
  );
  renderCodes(filtered);
});
