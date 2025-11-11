import { auth, db } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const btnRegister = document.getElementById('btn-register');
const msg = document.getElementById('reg-msg');

btnRegister.addEventListener('click', async () => {
  msg.textContent = '';

  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const name = document.getElementById('ic-name').value.trim();
  const icid = document.getElementById('ic-id').value.trim();
  const badge = document.getElementById('badge-no').value.trim();
  const org = document.getElementById('org').value;
  const rank = document.getElementById('rank').value.trim();

  if (!email || !password || !name || !icid || !org) {
    msg.textContent = "⚠️ Please fill all required fields.";
    return;
  }

  try {
    // Create user in Firebase Auth
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    // Create Firestore document
    await setDoc(doc(db, "users", uid), {
      uid,
      email,
      name,
      icid,
      badge,
      org,
      rank,
      role: "user",
      createdAt: new Date().toISOString()
    });

    // ✅ Save to sessionStorage (for sidebar)
    sessionStorage.setItem("leo_user", JSON.stringify({
      uid,
      email,
      name,
      icid,
      badge,
      org,
      rank,
      type: "registered"  // Add a type field for UI display
    }));

    // Redirect to dashboard
    window.location.href = "bodycam.html";
  } catch (err) {
    console.error(err);
    msg.textContent = err.message || "❌ Registration failed. Please try again.";
  }
});
