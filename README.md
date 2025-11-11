<div align="center">

# 🛡️ LEO Command System  
**A Glassmorphic Neon Dashboard for Law Enforcement Roleplay**

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-3-blue?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![Firebase](https://img.shields.io/badge/Backend-Firebase-orange?style=for-the-badge&logo=firebase)
![UI Style](https://img.shields.io/badge/UI-Glassmorphic%20Neon-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-Custom-lightgrey?style=for-the-badge)

</div>

---

## 📖 Overview
The **LEO Command System** is a modern, responsive web dashboard built for **Law Enforcement Organizations** in roleplay communities.  
It centralizes operations for officers — offering **Bodycam management**, **Duty Logs**, and **Penal/Traffic Codes** — all inside a unified, futuristic **neon-glass interface**.

This project blends **style and functionality**, built entirely with:
- Pure **HTML, CSS, JS (ES6)** — no frontend frameworks  
- **Firebase Authentication + Firestore**  
- Modular architecture for scalability and easy integration  

---

## 🚔 Core Features

### 🔐 Authentication
- Firebase-based **Registered** and **Guest User** system  
- Secure Firestore user data  
- Dynamic sidebar updates per user session  

### 🎥 Bodycam Commands
- Org-specific presets for **LSPD**, **SAHP**, **FIB**, **NG**, and **EMS**  
- IC Time integration (London timezone)  
- Structured command sections: Before Shift, Refreshing, Saving, and Finishing  

### 📋 Duty Log Generator
- Automatically formats logs with:  
  - Officer details (Name, ID, Rank, Badge)  
  - On/Off Duty time  
  - Patrol events & weapon logs  
- One-click **Copy Log** functionality  

### ⚖️ Penal & Traffic Codes
- Fully formatted code panels with:  
  - Fines, Jail Time, Class, and Notes  
  - **Click-to-Copy** feature for quick dispatch  
- Searchable dataset (Google Sheets or embedded local JSON)  

### 🎨 UI & Design
- **Pinned Sidebar** (solid dark with neon border)  
- **Unified glassmorphic panels** across all pages  
- **Responsive (Desktop-focused)** layout  
- Centralized color & glow variable system for easy theming  

---

## 🧩 Tech Stack

| Category | Tools / Frameworks |
|-----------|--------------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6 Modules) |
| **Backend** | Firebase Authentication & Firestore |
| **UI Design** | Custom Neon-Glass CSS System |
| **Hosting** | Netlify / Firebase Hosting Ready |
| **Fonts** | Poppins (Google Fonts) |

---

## 📁 Project Structure
```bash
LEO-Command-System/
├── css/
│   ├── style.css        # Login / Register pages
│   ├── dashboard.css    # Global layout, sidebar, and theme
│   ├── code.css         # Penal & Traffic code panels
│   └── dutylog.css      # Duty Log generator page
├── js/
│   ├── sidebar.js
│   ├── bodycam.js
│   ├── penal.js
│   ├── traffic.js
│   └── dutylog.js
├── html/
│   ├── login.html
│   ├── register.html
│   ├── bodycam.html
│   ├── penal.html
│   ├── traffic.html
│   └── dutylog.html
└── firebaseConfig.js
