import { loadSidebar } from "./sidebar.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "./firebaseConfig.js";

loadSidebar("dashboard");

const user = JSON.parse(sessionStorage.getItem("leo_user")) || {};

document.getElementById("userName").textContent = `NAME: ${user.name || "Guest"}`;
document.getElementById("userOrg").textContent = user.org || "N/A";
document.getElementById("userID").textContent = user.icid || user.id || "-";
document.getElementById("userBadge").textContent = user.badge || "-";
document.getElementById("userRank").textContent = user.rank || "-";
document.getElementById("userUID").textContent = user.uid || "Pending UID";

// Load profile picture
const profilePic = document.getElementById("profilePic");
if (user.photo) profilePic.src = user.photo;

// Button navigation
document.querySelectorAll(".menu-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.getAttribute("data-page");
    window.location.href = page;
  });
});

document.getElementById("openSettings").addEventListener("click", () => {
  window.location.href = "user-settings.html";
});

document.getElementById("logout").addEventListener("click", async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.warn("Sign out failed", e);
  }
  sessionStorage.clear();
  window.location.href = "login.html";
});

// Dev Notes Section
const updateFeed = document.getElementById("updateFeed");
const updates = [
  { date: "Nov 2025", note: "Added Department Radio with dynamic recipients." },
  { date: "Nov 2025", note: "User Settings page is now fully editable and synced." },
  { date: "Nov 2025", note: "Dashboard central hub launched!" }
];

updateFeed.innerHTML = updates
  .map(u => `<p><strong>${u.date}</strong> — ${u.note}</p>`)
  .join("");
