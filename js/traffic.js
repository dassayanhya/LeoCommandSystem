import { loadSidebar } from "./sidebar.js";
loadSidebar("traffic");

const trafficCodes = [
  { code: 'T.C. 2.1', title: 'Absence of a valid license plate', fine: '$5,000', jail: '-', class: '-', stars: '-', notes: '-' },

  { code: 'T.C. 3.2.1', title: 'Driving in the opposite lane of the road', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },

  { code: 'T.C. 3.2.2', title: 'Driving the opposite lane of the highway', fine: '$15,000 + revocation of license', jail: '30 months', class: 'Felony (Class D)', stars: '⭐⭐', notes: '-' },

  { code: 'T.C. 3.2.3', title: 'Stopping on the road for no reason', fine: '$15,000', jail: '-', class: '-', stars: '-', notes: 'Stopping on the road for no reason and ignoring demands to continue moving' },

  { code: 'T.C. 3.2.4', title: 'Stopping on the highway for no reason', fine: '$25,000 + revocation of ALL transport licenses', jail: '-', class: 'Infraction (Class A)', stars: '-', notes: 'Stopping on the highway for no reason and ignoring demands to continue moving' },

  { code: 'T.C. 3.4.1', title: 'Driving on deserted sidewalks/bike paths', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: 'Driving on a sidewalk or bike path even if there are no people there' },

  { code: 'T.C. 3.4.2', title: 'Chaotic movement between lanes', fine: '$5,000', jail: '-', class: '-', stars: '-', notes: 'Randomly switching lanes for no reason' },

  { code: 'T.C. 3.4.3', title: 'Failure to keep the distance', fine: '$5,000', jail: '-', class: '-', stars: '-', notes: 'Not keeping distance from other cars on the road' },

  { code: 'T.C. 3.4.4', title: 'Hard braking', fine: '$20,000', jail: '-', class: '-', stars: '-', notes: 'Braking too quickly' },

  { code: 'T.C. 3.4.5', title: 'Creating an obstruction for overtaking', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: 'Not allowing another car to overtake' },

  { code: 'T.C. 3.5', title: 'Driving Under Influence', fine: '$20,000', jail: '30 months', class: 'Felony (Class D)', stars: '⭐⭐', notes: 'Operating a vehicle being drunk or under influence of drugs' },

  { code: 'T.C. 3.6.1', title: 'Participation in a street race', fine: '$15,000', jail: '-', class: '-', stars: '-', notes: 'Taking part in a race on a public road' },

  { code: 'T.C. 3.6.2', title: 'Organizing a street race', fine: '$25,000', jail: '30 months', class: 'Felony (Class D)', stars: '⭐⭐', notes: 'Organizing a race on a public road' },

  { code: 'T.C. 5.5', title: 'Violation of the speed limit inside a special zone', fine: '$20,000', jail: '-', class: '-', stars: '-', notes: 'Going over 90 km/h in a special zone mentioned in TC 5.4' },

  { code: 'T.C. 6.2.a', title: 'Parking on red curbs', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.b', title: 'Interfiring with traffic following their lane', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.c', title: 'Blocking exit from anywhere', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.d', title: 'Parking on a crosswalk', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.e', title: 'Blocking more than 2/3 of a sidewalk or bike path', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.f', title: 'Parking on a driving lane', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.g', title: 'Parking against direction of traffic', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.h', title: 'Parking on bridges or in tunnels', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.i', title: 'Parking on the highway or freeway', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.j', title: 'Parking closer than 50 meters from a building on fire', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.k', title: 'Parking at bus stops', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.l', title: 'Parking on railway tracks or within the skidding of a wagon', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.m', title: 'Parking in parking spaces marked in yellow', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.n', title: 'Parking in violation of the road surface markings', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.o', title: 'Parking closer than 20 meters from an entrance or exit', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.p', title: 'Parking on lawns, in green spaces, and in places not intended for parking', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.2.q', title: 'Parking in violation of Article 7', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: "Vehicle may be towed on officer's discretion" },

  { code: 'T.C. 6.4', title: 'Unauthorized presence of a vehicle on the territory of DOC', fine: '$15,000 + towing', jail: '-', class: '-', stars: '-', notes: '-' },

    { code: 'T.C. 7.1.1', title: 'Illegal parking at Capitol', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.2', title: 'Illegal parking at Casino', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.3', title: 'Illegal parking at Maze Bank', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.4', title: 'Illegal parking at Los Santos Police Department', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.5', title: 'Illegal parking at San Andreas Highway Patrol', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.6', title: 'Illegal parking at Power Plant', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.7', title: 'Illegal parking at Beach Market', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.8', title: 'Illegal parking at Power Street / Adam\'s Apple Boulevard', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.9', title: 'Illegal parking at Postal Downtown', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.10', title: 'Sawmill - Illegal parking', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.11', title: 'Illegal parking at Farm 1', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.12', title: 'Illegal parking at Farm 2', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' },
  { code: 'T.C. 7.1.13', title: 'Illegal parking at Mirror Park', fine: '$10,000', jail: '-', class: '-', stars: '-', notes: '-' }
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
