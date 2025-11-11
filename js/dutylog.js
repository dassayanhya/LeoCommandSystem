document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  const outputText = document.getElementById("outputText");
  const copyBtn = document.getElementById("copyBtn");

  function getLondonTime() {
    return new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Europe/London"
    });
  }

  function getDate() {
    return new Date().toLocaleDateString("en-GB");
  }

  generateBtn.addEventListener("click", () => {
    const weapons = Array.from(document.querySelectorAll('.checkbox-grid input:checked'))
      .filter((c) => ["STUN GUN", "STUN GUN AMMO", "ASSAULT RIFLE", "ASSAULT RIFLE AMMO", "SHOTGUN", "SHOTGUN AMMO", "LIGHT MACHINE GUN", "LIGHT MACHINE GUN AMMO"].includes(c.value))
      .map(c => c.value);

    const events = Array.from(document.querySelectorAll('.checkbox-grid input:checked'))
      .filter((c) => !weapons.includes(c.value))
      .map(c => c.value);

    const log = `
Name: ${document.getElementById("user-name").textContent}
ID: ${document.getElementById("user-id").textContent}
Rank: ${document.getElementById("user-rank").textContent}

========== Clocking-out =============
Date: ${getDate()}
On Duty: ${getLondonTime()}
Off Duty: ${getLondonTime()}

=========== Patrol Logs =================
Attended Events: ${events.length ? events.join(", ") : "None"}

=========== Weapons Logs ================
Taken: ${weapons.length ? weapons.join(", ") : "None"}
Returned: ${weapons.length ? weapons.join(", ") : "None"}
Lost: None
Disposed: None`;

    outputText.value = log.trim();
  });

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(outputText.value);
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => (copyBtn.textContent = "📋 Copy Log"), 2000);
  });
});
