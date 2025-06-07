// ===== Responsive Sidebar & Mobile Nav =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    mobileMenuBtn.setAttribute('aria-expanded', mobileNav.classList.contains('show'));
  });

  // Close mobile nav on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('show');
      mobileMenuBtn.setAttribute('aria-expanded', "false");
    });
  });

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    if (
      mobileNav.classList.contains('show') &&
      !mobileNav.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      mobileNav.classList.remove('show');
      mobileMenuBtn.setAttribute('aria-expanded', "false");
    }
  });

  // ESC key closes mobile nav
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains('show')) {
      mobileNav.classList.remove('show');
      mobileMenuBtn.setAttribute('aria-expanded', "false");
    }
  });
}

// ===== Scroll-to-Top Button =====
const scrollBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 220) {
    scrollBtn?.classList.add('visible');
  } else {
    scrollBtn?.classList.remove('visible');
  }
});
scrollBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const hash = this.getAttribute('href');
    if (hash && hash.length > 1) {
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ===== Highlight Active Sidebar Link on Scroll =====
const sectionIds = ["about", "projects", "techstack", "contact", "more"];
const sidebarLinks = document.querySelectorAll('.sidebar-link');
function setActiveSidebarLink() {
  let found = false;
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const section = document.getElementById(sectionIds[i]);
    if (section && window.scrollY + 120 >= section.offsetTop) {
      sidebarLinks.forEach(link => link.classList.remove('active'));
      const activeLink = Array.from(sidebarLinks).find(link => link.getAttribute('href').includes(sectionIds[i]));
      if (activeLink) activeLink.classList.add('active');
      found = true;
      break;
    }
  }
  if (!found) sidebarLinks.forEach(link => link.classList.remove('active'));
}
window.addEventListener('scroll', setActiveSidebarLink);
window.addEventListener('DOMContentLoaded', setActiveSidebarLink);

// ===== Card Animation on Scroll (simple fade-in) =====
const animatedCards = document.querySelectorAll('.card, .project-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "none";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
animatedCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  observer.observe(card);
});