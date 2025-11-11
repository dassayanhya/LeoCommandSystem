// js/auth.js
import { auth, db } from "./firebaseConfig.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const tabRegistered = document.getElementById('tab-registered');
const tabGuest = document.getElementById('tab-guest');
const regForm = document.getElementById('registered-form');
const guestForm = document.getElementById('guest-form');

tabRegistered.addEventListener('click', () => {
  tabRegistered.classList.add('active');
  tabGuest.classList.remove('active');
  regForm.classList.remove('hidden');
  guestForm.classList.add('hidden');
});

tabGuest.addEventListener('click', () => {
  tabGuest.classList.add('active');
  tabRegistered.classList.remove('active');
  guestForm.classList.remove('hidden');
  regForm.classList.add('hidden');
});

// login
const btnLogin = document.getElementById('btn-login');
const btnReset = document.getElementById('btn-reset');
const regMsg = document.getElementById('reg-msg');

btnLogin.addEventListener('click', async () => {
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  regMsg.textContent = '';

  if (!email || !password) {
    regMsg.textContent = 'Please provide email and password.';
    return;
  }

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    // After login, fetch user doc to get org info
    const uid = cred.user.uid;
    const userDocRef = doc(db, "users", uid);
    const userSnap = await getDoc(userDocRef);
    let userData = { uid, email };
    if (userSnap.exists()) {
      userData = { ...userData, ...userSnap.data() };
    }

    // store in session and redirect to dashboard
    sessionStorage.setItem('leo_user', JSON.stringify(userData));
    window.location.href = 'bodycam.html';
  } catch (err) {
    console.error(err);
    regMsg.textContent = err.message || 'Login failed.';
  }
});

// password reset
btnReset.addEventListener('click', async () => {
  const email = document.getElementById('reg-email').value.trim();
  if (!email) {
    regMsg.textContent = 'Please enter your email to reset password.';
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    regMsg.textContent = 'Password reset email sent. Check your inbox.';
  } catch (err) {
    console.error(err);
    regMsg.textContent = err.message || 'Unable to send password reset.';
  }
});
