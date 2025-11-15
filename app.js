// app.js - minimal interactivity for the demo site
document.addEventListener('DOMContentLoaded', () => {
  const greeting = document.getElementById('greeting');
  const timeBtn = document.getElementById('timeBtn');
  const timeEl = document.getElementById('time');
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  greeting.textContent = 'Hello — this site was generated for you.';

  timeBtn.addEventListener('click', () => {
    const now = new Date();
    timeEl.textContent = now.toLocaleString();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    formMsg.textContent = `Thanks, ${data.get('name') || 'friend'} — message not actually sent in this demo.`;
    form.reset();
  });
});
