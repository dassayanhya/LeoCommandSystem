// js/guest.js
// Simple guest flow: validate fields, store data in sessionStorage, redirect to dashboard
document.getElementById('btn-guest').addEventListener('click', () => {
  const name = document.getElementById('guest-name').value.trim();
  const id = document.getElementById('guest-id').value.trim();
  const badge = document.getElementById('guest-badge').value.trim();
  const org = document.getElementById('guest-org').value;
  const rank = document.getElementById('guest-rank').value.trim();
  const msg = document.getElementById('guest-msg');

  msg.textContent = '';

  if (!name || !id || !org) {
    msg.textContent = 'Please fill Name, ID and Org.';
    return;
  }

  const guestData = {
    type: 'guest',
    name, id, badge, org, rank,
    timestamp: Date.now()
  };

  sessionStorage.setItem('leo_user', JSON.stringify(guestData));
  // optionally store in Firestore logs (not included here)
  window.location.href = 'dashboard.html';
});
