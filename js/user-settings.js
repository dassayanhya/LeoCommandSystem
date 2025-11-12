import { loadSidebar } from "./sidebar.js";
loadSidebar("user-settings");

const form = document.getElementById("settingsForm");
const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
const saveMessage = document.getElementById("saveMessage");

// Fetch current user data
const user = JSON.parse(sessionStorage.getItem("leo_user")) || {
  name: "",
  badge: "",
  org: "",
  designation: "",
  email: "",
  password: ""
};

// Populate fields
document.getElementById("username").value = user.name || "";
document.getElementById("badge").value = user.badge || "";
document.getElementById("organization").value = user.org || "FIB";
document.getElementById("designation").value = user.designation || "";
document.getElementById("email").value = user.email || "";
document.getElementById("password").value = user.password || "";

// Save Changes
saveBtn.addEventListener("click", () => {
  const updatedUser = {
    name: document.getElementById("username").value.trim(),
    badge: document.getElementById("badge").value.trim(),
    org: document.getElementById("organization").value.trim(),
    designation: document.getElementById("designation").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim()
  };

  // Save to both sessionStorage and localStorage
  sessionStorage.setItem("leo_user", JSON.stringify(updatedUser));
  localStorage.setItem("leo_user", JSON.stringify(updatedUser));

  saveMessage.textContent = "✅ User information saved successfully!";
  saveMessage.style.color = "#00ffb3";
  setTimeout(() => (saveMessage.textContent = ""), 2500);
});

// Reset Button
resetBtn.addEventListener("click", () => {
  document.getElementById("username").value = "";
  document.getElementById("badge").value = "";
  document.getElementById("organization").value = "FIB";
  document.getElementById("designation").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  saveMessage.textContent = "Fields reset.";
  saveMessage.style.color = "#ff5f5f";
  setTimeout(() => (saveMessage.textContent = ""), 1500);
});
