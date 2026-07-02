// ============================================
// MAIN.JS — Dynamic Rendering & Interactions
// (Standalone vanilla JS version — the index.html
//  uses React inline, so this file is the vanilla
//  alternative if you prefer non-React rendering.)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initSmoothScroll();
  initNavbarScroll();
  initScrollReveal();
  initTypingEffect();
  initMobileMenu();
  initActiveNavHighlight();
  initContactForm();
  initScrollToTop();
});

/* ── Loader ──────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1500);
  });

  // Fallback: hide after 4s even if load event didn't fire
  setTimeout(() => {
    if (loader && !loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
    }
  }, 4000);
}

/* ── Smooth Scrolling ────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ── Navbar Scroll Effect ────────────────── */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ── Scroll Reveal (IntersectionObserver) ── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
    observer.observe(el);
  });
}

/* ── Typing Effect ───────────────────────── */
function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const words = PORTFOLIO_DATA?.personal?.roles || ['Developer', 'Designer'];
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIdx];

    if (!isDeleting) {
      el.textContent = currentWord.substring(0, charIdx + 1);
      charIdx++;

      if (charIdx === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // pause before deleting
        return;
      }
      setTimeout(type, 120);
    } else {
      el.textContent = currentWord.substring(0, charIdx - 1);
      charIdx--;

      if (charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
      }
      setTimeout(type, 60);
    }
  }

  type();
}

/* ── Mobile Menu ─────────────────────────── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Active Navbar Highlight ─────────────── */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link, [data-nav-link]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active', 'nav-link-active');
            } else {
              link.classList.remove('active', 'nav-link-active');
            }
          });
        }
      });
    },
    { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ── Contact Form ────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show success message
    const successEl = document.getElementById('form-success');
    if (successEl) {
      form.style.display = 'none';
      successEl.style.display = 'block';

      setTimeout(() => {
        form.style.display = '';
        successEl.style.display = 'none';
        form.reset();
      }, 4000);
    } else {
      alert('Thanks for your message! I will get back to you soon.');
      form.reset();
    }
  });
}

/* ── Scroll to Top ───────────────────────── */
function initScrollToTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Dynamic Rendering Helpers ───────────── */

/**
 * Renders project cards into a container.
 * @param {string} containerId - The ID of the container element.
 * @param {string} [filter='All'] - Category to filter by.
 */
function renderProjects(containerId, filter = 'All') {
  const container = document.getElementById(containerId);
  if (!container || !PORTFOLIO_DATA?.projects) return;

  const projects = filter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

  container.innerHTML = projects.map((project) => `
    <div class="glass rounded-2xl overflow-hidden card-glow flex flex-col reveal-scale">
      <div class="project-accent w-full" style="background:${project.color}"></div>
      <div class="p-7 flex-1 flex flex-col">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-mono px-2.5 py-1 rounded bg-purple-500/[0.08] text-purple-300 border border-purple-500/15">${project.category}</span>
          <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/15">✓ ${project.status}</span>
        </div>
        <h3 class="text-lg font-bold text-white mb-3">${project.title}</h3>
        <p class="text-sm text-gray-400 leading-relaxed mb-5 flex-1">${project.description}</p>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${project.tech.slice(0, 5).map((t) => `<span class="text-[0.68rem] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/[0.06]">${t}</span>`).join('')}
          ${project.tech.length > 5 ? `<span class="text-[0.68rem] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-500">+${project.tech.length - 5}</span>` : ''}
        </div>
        <div class="flex gap-4 pt-4 border-t border-white/[0.06]">
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-400 hover:text-purple-400 transition-colors">GitHub</a>` : ''}
          ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Live Demo</a>` : ''}
          ${!project.github && !project.liveDemo ? '<span class="text-sm text-gray-500 italic">Private Repository</span>' : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe for scroll reveal
  initScrollReveal();
}

/**
 * Renders skill badges into a container.
 * @param {string} containerId - The ID of the container element.
 */
function renderSkills(containerId) {
  const container = document.getElementById(containerId);
  if (!container || !PORTFOLIO_DATA?.skills) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map((cat) => `
    <div class="mb-8 reveal">
      <h3 class="text-lg font-bold text-gray-200 mb-4 flex items-center gap-2">
        <span class="text-xl">${cat.icon}</span> ${cat.category}
      </h3>
      <div class="flex flex-wrap gap-3">
        ${cat.items.map((skill) => `
          <div class="glass rounded-xl px-4 py-2.5 flex items-center gap-2.5 card-glow cursor-default group">
            ${skill.devicon
              ? `<i class="${skill.devicon} text-lg group-hover:scale-110 transition-transform"></i>`
              : `<span class="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center text-[0.65rem] text-purple-300 font-bold">${skill.name.charAt(0)}</span>`
            }
            <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">${skill.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * Renders certifications into a container.
 * @param {string} containerId - The ID of the container element.
 */
function renderCertifications(containerId) {
  const container = document.getElementById(containerId);
  if (!container || !PORTFOLIO_DATA?.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map((cert, idx) => `
    <div class="glass rounded-2xl p-6 card-glow flex flex-col reveal-scale" style="transition-delay:${idx * 100}ms">
      <div class="flex items-start justify-between mb-3">
        <span class="text-2xl">🏆</span>
        <span class="text-xs font-mono text-gray-500">${cert.date}</span>
      </div>
      <h3 class="text-base font-bold text-white mb-1.5 leading-snug">${cert.name}</h3>
      <p class="text-sm text-gray-400 mb-4">${cert.platform}</p>
      <div class="flex flex-wrap gap-1.5 mb-5 flex-1">
        ${cert.skills.map((s) => `<span class="text-[0.67rem] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/[0.06]">${s}</span>`).join('')}
      </div>
      ${cert.verification ? `<a href="${cert.verification}" target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-gray-400 hover:text-purple-400 transition-colors mt-auto pt-4 border-t border-white/[0.06]">🔗 Verify Credential</a>` : ''}
    </div>
  `).join('');
}
