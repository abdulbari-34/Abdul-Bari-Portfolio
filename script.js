/* ============================
   SHERAZ PORTFOLIO — script.js
   ============================ */

(function () {
  'use strict';

  // ============================================================
  // 1. PARTICLE CANVAS BACKGROUND
  // ============================================================
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrameId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.05,
      hue: Math.random() > 0.5 ? 210 : 270,
    };
  }

  function initParticles() {
    particles = [];
    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 14000));
    for (let i = 0; i < count; i++) particles.push(createParticle());
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
      ctx.fill();
    });

    // Draw connections
    particles.forEach((p, i) => {
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(78,143,255,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    animFrameId = requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  initParticles();
  drawParticles();

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  // ============================================================
  // 2. CUSTOM CURSOR
  // ============================================================
  const cursor = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursorTrail');

  if (cursor && cursorTrail) {
    let mx = 0, my = 0;
    let tx = 0, ty = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    function animTrail() {
      tx += (mx - tx) * 0.12;
      ty += (my - ty) * 0.12;
      cursorTrail.style.left = tx + 'px';
      cursorTrail.style.top = ty + 'px';
      requestAnimationFrame(animTrail);
    }
    animTrail();

    const hoverEls = document.querySelectorAll('a, button, .tilt-card, .filter-btn, .service-cta, .nav-cta');
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        cursorTrail.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        cursorTrail.classList.remove('hovering');
      });
    });
  }

  // ============================================================
  // 3. NAVBAR SCROLL EFFECT
  // ============================================================
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ============================================================
  // 4. MOBILE MENU
  // ============================================================
  const mobileMenuBtn = document.getElementById('mobileMenu');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // ============================================================
  // 5. TYPING ANIMATION
  // ============================================================
  const typedEl = document.getElementById('heroTyped');
  const words = [
    'High-Converting Websites',
    'Full-Stack Web Apps',
    'E-Commerce Stores',
    'Digital Products',
    'SaaS Platforms',
  ];
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeTimeout;

  function typeLoop() {
    const word = words[wordIdx];

    if (!isDeleting) {
      typedEl.textContent = word.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === word.length) {
        isDeleting = true;
        typeTimeout = setTimeout(typeLoop, 2000);
        return;
      }
    } else {
      typedEl.textContent = word.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
      }
    }

    typeTimeout = setTimeout(typeLoop, isDeleting ? 50 : 80);
  }

  if (typedEl) {
    setTimeout(typeLoop, 800);
  }

  // ============================================================
  // 6. SCROLL REVEAL (Intersection Observer)
  // ============================================================
  const revealEls = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  // ============================================================
  // 7. ANIMATED COUNTERS
  // ============================================================
  const counterEls = document.querySelectorAll('.trust-num[data-count]');

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'));
          let current = 0;
          const step = target / 50;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current);
            if (current >= target) clearInterval(timer);
          }, 30);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterEls.forEach((el) => counterObserver.observe(el));

  // ============================================================
  // 8. PROGRESS BARS ANIMATION
  // ============================================================
  const barFills = document.querySelectorAll('.av-bar-fill');

  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  barFills.forEach((el) => barObserver.observe(el));

  // ============================================================
  // 9. 3D CARD TILT EFFECT
  // ============================================================
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      const rotX = -dy * 8;
      const rotY = dx * 8;

      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`;
      card.style.boxShadow = `${-rotY * 2}px ${rotX * 2}px 40px rgba(78,143,255,0.15)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      card.style.boxShadow = '';
    });
  });

  // ============================================================
  // 10. 3D HERO CARD PARALLAX ON MOUSE
  // ============================================================
  const heroCard = document.getElementById('heroCard');

  if (heroCard) {
    document.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      const rotX = -dy * 6;
      const rotY = dx * 6;
      heroCard.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    document.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    });
  }

  // ============================================================
  // 11. PROJECT FILTERING
  // ============================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cats = card.getAttribute('data-cat') || 'all';
        const show = filter === 'all' || cats.includes(filter);

        if (show) {
          card.classList.remove('hidden');
          card.style.animation = 'none';
          requestAnimationFrame(() => {
            card.style.animation = 'fadeIn 0.4s ease forwards';
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Inject keyframe for filter animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // ============================================================
  // 12. THEME TOGGLE
  // ============================================================
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('sheraz-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('sheraz-theme', next);
    });
  }

  // ============================================================
  // 13. ACTIVE NAV LINK HIGHLIGHT (scroll spy)
  // ============================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.style.color = 'var(--text)';
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((s) => spyObserver.observe(s));

  // ============================================================
  // 14. CONTACT FORM SUBMIT MOCK
  // ============================================================
  const submitBtn = document.getElementById('submitBtn');

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const original = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Sending...</span>';
      submitBtn.style.opacity = '0.7';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<span>✓ Message Sent!</span>';
        submitBtn.style.background = 'linear-gradient(135deg, #06d6a0 0%, #4e8fff 100%)';
        submitBtn.style.opacity = '1';

        setTimeout(() => {
          submitBtn.innerHTML = original;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  // ============================================================
  // 15. SMOOTH SCROLL FOR NAV LINKS
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ============================================================
  // 16. GLOWING MOUSE FOLLOWER ON HERO SECTION
  // ============================================================
  const hero = document.getElementById('hero');
  const heroGlows = document.querySelectorAll('.hero-glow');

  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroGlows.forEach((g, i) => {
        const speed = [0.04, 0.025, 0.06][i] || 0.04;
        const cx = parseFloat(g.style.left || '0') || 0;
        const cy = parseFloat(g.style.top || '0') || 0;
        g.style.left = cx + (x * speed - cx * 0.05) + 'px';
        g.style.top = cy + (y * speed - cy * 0.05) + 'px';
      });
    });
  }

  // ============================================================
  // 17. PAGE LOAD REVEAL
  // ============================================================
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });

  // Already kick off visible for elements in viewport on load
  setTimeout(() => {
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 100);

})();
