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

const user = JSON.parse(sessionStorage.getItem("leo_user")) || {};
const org = (user.org || "GUEST").toUpperCase();
const badge = user.badge || "000";
const londonTime = new Date().toLocaleTimeString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/London",
});

const section = document.getElementById("bodycam-section");

//
// -------------------------------
// CATEGORY DATA
// -------------------------------
//

const categories = [
  {
    id: "before-shift",
    heading: "BEFORE STARTING SHIFT",

    tabs: {
      MAIN: [
        "/me Takes out bodycam, attaches it to chest, checks its ballistic and waterproof integrity",
        "/me makes sure it is recording and checks for the red light",
        "/do It is recording, is ballistic and water proof",
        `/me connects the PDA to the nearest cell tower of ${org}`,

        // ---- NEW FIX: Only show dispatch for these orgs ----
        ...( ["LSPD", "SAHP", "FIB"].includes(org)
            ? [`${badge} to dispatch : Show me 10-41 at ${londonTime}`]
            : []
        )
        // -----------------------------------------------------
      ],

      UNDERCOVER: [
        "/me takes out bodycam and attaches it to belt, hides it, checks its ballistic and water proof",
        "/me makes sure it is recording and checks for the red light",
        "/do It is recording, is ballistic and water proof",
        "/me connects PDA to the nearest cell tower",
      ],
    },
  },

  {
  id: "drone",
  heading: "DRONE COMMANDS",

  tabs: {
    MAIN: [
      `/me launches the ${org} drone`,
      `/me takes the ${org} drone from the ground and puts it in the backpack`
    ],

    UNDERCOVER: [
      `/me takes the ${org} drone from the trunk and puts it in the backpack`,
      `/me takes the ${org} drone from the backpack and launches it`,
      `/me takes the ${org} drone from the ground and puts it in the backpack`
    ],
  },
},

  //
  // -------------------------------
  // NORMAL CATEGORIES (NO SUBTABS)
  // -------------------------------
  //

  {
    id: "refresh",
    heading: "REFRESHING YOUR BODYCAM",
    lines: [
      "/me refreshing bodycam",
      "/do bodycam is recording",
    ],
  },

  {
    id: "save",
    heading: "SAVING YOUR BODYCAM",
    lines: [
      `/me saves bodycam contents onto an SD card, then uploads SD to ${org} cloud servers using PDA`,
      "/do bodycam refreshes and continues recording",
    ],
  },

  {
    id: "lawyer",
    heading: "HANDING FOOTAGE TO LAWYER",
    lines: [
      `/me saves bodycam contents onto an SD card and uploads contents to ${org} servers`,
      "/me takes SD card out of the bodycam and hands it to the lawyer",
      "/do bodycam refreshes and continues recording",
    ],
  },

  {
    id: "trunk",
    heading: "SEARCHING A TRUNK",
    lines: [
      "/me carefully inspects the trunk and uses a crowbar to attempt opening it",
      "/me applies pressure with the crowbar to force the trunk open",
    ],
  },

  {
  id: "finish",
  heading: "FINISHING YOUR SHIFT",
  lines: [
    `/me takes out an SD card from the bodycam, puts it in the phone and uploads it to the ${org}`,
    "/me puts an ID Badge inside the locker until the next shift",

    // ---- NEW FIX: Only show dispatch for allowed orgs ----
    ...( ["LSPD", "SAHP", "FIB"].includes(org)
        ? [`${badge} to dispatch : Show me 10-42 at ${londonTime}`]
        : []
    )
    // -------------------------------------------------------
  ],
},
];


//
// -------------------------------
// RENDER LOGIC
// -------------------------------
//

function renderCategories() {
  section.innerHTML = categories
    .map((cat) => {
      // Categories WITH SUBTABS
      if (cat.tabs) {
        const defaultTab = "MAIN";
        return `
          <div class="category" id="${cat.id}">
            <h2>${cat.heading}</h2>

            <div class="code-tabs">
              <button class="subtab active"
                onclick="switchTab('${cat.id}', 'MAIN')">
                ${cat.heading}
              </button>

              <button class="subtab"
                onclick="switchTab('${cat.id}', 'UNDERCOVER')">
                UNDER COVER
              </button>
            </div>

            <div class="command-list" id="${cat.id}-content">
              ${renderLines(cat.tabs[defaultTab])}
            </div>
          </div>
        `;
      }

      // NORMAL CATEGORIES
      return `
        <div class="category">
          <h2>${cat.heading}</h2>
          <div class="command-list">
            ${renderLines(cat.lines)}
          </div>
        </div>
      `;
    })
    .join("");
}

function renderLines(lines) {
  return lines
    .map(
      (line) => `
      <div class="command">
          <span>${line}</span>
          <button onclick="copyCommand(this)">Copy</button>
      </div>
    `
    )
    .join("");
}

//
// -------------------------------
// SUBTAB SWITCHING
// -------------------------------
//

window.switchTab = (categoryId, tab) => {
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return;

  // Update active buttons
  document
    .querySelectorAll(`#${categoryId} .subtab`)
    .forEach((btn) => btn.classList.remove("active"));

  const buttons = document.querySelectorAll(
    `#${categoryId} .subtab`
  );

  if (tab === "MAIN") buttons[0].classList.add("active");
  else buttons[1].classList.add("active");

  // Update content
  const content = document.getElementById(`${categoryId}-content`);
  content.innerHTML = renderLines(cat.tabs[tab]);
};


//
// RENDER EVERYTHING
//
renderCategories();
