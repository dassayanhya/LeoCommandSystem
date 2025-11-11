// js/sidebar.js
import { auth } from "./firebaseConfig.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

export function loadSidebar(active) {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) {
    console.error("Sidebar container not found!");
    return;
  }

  const user = JSON.parse(sessionStorage.getItem("leo_user")) || {};

  // --- Helper Functions ---
  const getLondonTime = (withSeconds = true) =>
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: withSeconds ? "2-digit" : undefined,
      timeZone: "Europe/London"
    });

  const getDate = () => new Date().toLocaleDateString("en-GB");

  // --- Load or Init Session Data ---
  const sessionData =
    JSON.parse(sessionStorage.getItem("session_data")) || {
      loginTime: getLondonTime(false),
      onDuty: "00:00",
      offDuty: "00:00",
      onBreak: "00:00",
      backOn: "00:00"
    };

  // --- Render Sidebar ---
  sidebar.innerHTML = `
    <aside class="sidebar">
      <div class="user-card">
        <h3>Name: ${user.name || "Guest User"}</h3>
        <p>ORG: <span>${user.org || "N/A"}</span></p>
        <p>ID: <span>${user.icid || user.id || "Not Assigned"}</span></p>
        <p>BADGE: <span>${user.badge || "-"}</span></p>
        <p>RANK: <span>${user.rank || "-"}</span></p>
        <button class="guest">${user.type === "guest" ? "GUEST LOGIN" : "REGISTERED"}</button>
      </div>

      <div class="info-card">
        <p id="icTime">IC TIME : ${getLondonTime()}</p>
        <p id="onDutyText">ON DUTY : ${sessionData.onDuty}</p>
        <p id="offDutyText">ON OFF : ${sessionData.offDuty}</p>
        <p id="onBreakText">ON BREAK : ${sessionData.onBreak}</p>
        <p id="backOnText">BACK ON : ${sessionData.backOn}</p>
        <p id="dateText">DATE : ${getDate()}</p>
        <p id="sessionTime">SESSION TIME : ${sessionData.loginTime}</p>
        <div class="status-buttons">
          <button class="on">ON DUTY</button>
          <button class="off">OFF DUTY</button>
          <button class="break">ON BREAK</button>
          <button class="back">BACK ON</button>
        </div>
      </div>

      <div class="action-card">
        <button class="logout">LOGOUT</button>
        <button class="how">HOW TO USE?</button>
        <button class="discord">JOIN DISCORD</button>
        <p class="credit">MADE BY <strong>GUILDLABS</strong></p>
      </div>
    </aside>
  `;

  // --- Element References ---
  const icTimeText = sidebar.querySelector("#icTime");
  const onDutyText = sidebar.querySelector("#onDutyText");
  const offDutyText = sidebar.querySelector("#offDutyText");
  const onBreakText = sidebar.querySelector("#onBreakText");
  const backOnText = sidebar.querySelector("#backOnText");

  const onDutyBtn = sidebar.querySelector(".on");
  const offDutyBtn = sidebar.querySelector(".off");
  const breakBtn = sidebar.querySelector(".break");
  const backBtn = sidebar.querySelector(".back");
  const logoutBtn = sidebar.querySelector(".logout");

  // --- Live IC Time (London Clock) ---
  setInterval(() => {
    icTimeText.textContent = `IC TIME : ${getLondonTime()}`;
  }, 1000);

  // --- Duty Logic ---
  const updateSession = (key, label, el) => {
    const time = getLondonTime(false);
    sessionData[key] = time;
    sessionStorage.setItem("session_data", JSON.stringify(sessionData));
    el.textContent = `${label} : ${time}`;
  };

  onDutyBtn.addEventListener("click", () => updateSession("onDuty", "ON DUTY", onDutyText));
  offDutyBtn.addEventListener("click", () => updateSession("offDuty", "ON OFF", offDutyText));
  breakBtn.addEventListener("click", () => updateSession("onBreak", "ON BREAK", onBreakText));
  backBtn.addEventListener("click", () => updateSession("backOn", "BACK ON", backOnText));

  // --- LOGOUT ---
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth); // ✅ Firebase logout
    } catch (error) {
      console.warn("Firebase signOut failed:", error);
    }

    // Clear local session
    sessionStorage.removeItem("leo_user");
    sessionStorage.removeItem("session_data");

    // Redirect to login
    window.location.href = "login.html";
  });
}
