// Theme toggle and intersection observer for reveal animations
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Initialize theme from localStorage
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    body.classList.add('dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  }

  // Toggle dark/light mode when clicking the button
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      // Swap icon
      themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
  }

  // Intersection observer to reveal elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden');
      }
    });
  }, {
    threshold: 0.1,
  });

  // Select elements to reveal
  const revealElements = document.querySelectorAll(
    'section, .timeline-item, .project-card, .skill-card, .blog-card'
  );
  revealElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
  });
});
