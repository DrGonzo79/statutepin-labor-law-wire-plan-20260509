const btn = document.getElementById('assignBtn');
const timeline = document.getElementById('timeline');
btn?.addEventListener('click', () => {
  btn.textContent = 'Assigned ✓';
  const li = document.createElement('li');
  li.innerHTML = '<b>10:15</b> Maya Chen assigned payroll threshold review';
  timeline.appendChild(li);
});
