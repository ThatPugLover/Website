document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const tabs = document.querySelector('nav.tabs');
  if (toggle && tabs) {
    toggle.addEventListener('click', () => {
      tabs.classList.toggle('open');
    });
  }
});
