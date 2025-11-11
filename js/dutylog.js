window.addEventListener("DOMContentLoaded", () => {
  // === Helper functions ===
  const getLondonTime = () =>
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/London",
    });

  const getLondonDate = () =>
    new Date().toLocaleDateString("en-GB", { timeZone: "Europe/London" });

  const safeParse = (key) => {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch {
      return null;
    }
  };

  // === Officer info ===
  const user = safeParse("leo_user") || {};
  document.getElementById("dl-name").textContent = user.name || "Unknown";
  document.getElementById("dl-org").textContent = user.org || "-";
  document.getElementById("dl-id").textContent = user.icid || user.id || "-";
  document.getElementById("dl-badge").textContent = user.badge || "-";
  document.getElementById("dl-rank").textContent = user.rank || "-";
  document.getElementById("dl-date").textContent =
    user.date || getLondonDate();

  // === Dynamic sidebar time sync ===
  let lastData = "";

  const updateTimes = () => {
    const data = safeParse("session_data") || {};
    const json = JSON.stringify(data);
    if (json === lastData) return;
    lastData = json;

    // Extract times (sidebar stores them in HH:MM format)
    const onDuty = data.onDuty || "--:--";
    const offDuty = data.offDuty || "--:--";

    // Show in inputs
    const onDutyInput = document.getElementById("onDuty");
    const offDutyInput = document.getElementById("offDuty");

    if (onDuty && onDuty !== "--:--") onDutyInput.value = formatTime(onDuty);
    if (offDuty && offDuty !== "--:--") offDutyInput.value = formatTime(offDuty);
  };

  const formatTime = (t) => {
    if (t.includes(":")) {
      const [h, m] = t.split(":");
      return `${h.padStart(2, "0")}:${m.padStart(2, "0")}`;
    }
    return "--:--";
  };

  // === Poll sessionStorage for updates (sidebar events) ===
  setInterval(updateTimes, 500);

  // === Generate Log ===
  const generateBtn = document.getElementById("generateLog");
  const copyBtn = document.getElementById("copyLog");
  const output = document.getElementById("generatedLog");

  generateBtn.addEventListener("click", () => {
    const onDuty = document.getElementById("onDuty").value || "--:--";
    const offDuty = document.getElementById("offDuty").value || "--:--";

    const weapons = [];
    document.querySelectorAll(".weapon-grid input[type='number']").forEach((el) => {
      const qty = parseInt(el.value);
      if (qty > 0) weapons.push(`${el.dataset.name} x${qty}`);
    });

    const events = [];
    document.querySelectorAll(".event-grid input[type='checkbox']:checked").forEach((el) =>
      events.push(el.value)
    );

    const log = `
Name: ${user.name || "N/A"}
ID: ${user.icid || user.id || "N/A"} | Badge: ${user.badge || "N/A"}
Rank: ${user.rank || "N/A"}
Date: ${getLondonDate()}

========== CLOCKING OUT ==========

On Duty: ${onDuty} 
Off Duty: ${offDuty} 

=========== WEAPONS LOG ===========

Taken:
${weapons.length ? weapons.join("\n") : "None"}
Returned:
Lost/Stolen: 

=========== PATROL LOG ===========
Attended Events:
${events.length ? events.join("\n") : "None"}


`;

    output.value = log.trim();
  });

  copyBtn.addEventListener("click", () => {
    if (!output.value.trim()) return alert("No log generated yet!");
    navigator.clipboard.writeText(output.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "COPY LOG"), 1500);
  });
});
