const PHOTO_URL = 'https://z-cdn-media.chatglm.cn/files/b3115690-6e4e-4991-ac47-04d47744fa2d.jpg?auth_key=1875333616-cecf099a30854d02b80098492340ea13-0-0202d893539afd2c6749f9b5179c05da';

const skillsData = [
  { name: 'HTML / CSS', icon: 'devicon-html5-plain colored', sub: 'Semantic, responsive', pct: 95 },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', sub: 'ES6+, async, DOM', pct: 90 },
  { name: 'React', icon: 'devicon-react-original colored', sub: 'Hooks, state, SPA', pct: 85 },
  { name: 'Next.js', icon: 'devicon-nextjs-original', sub: 'SSR, routing, API', pct: 78 },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', sub: 'Express, REST API', pct: 82 },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', sub: 'Mongoose, Atlas', pct: 75 },
  { name: 'Git', icon: 'devicon-git-plain colored', sub: 'Version control', pct: 90 },
  { name: 'TailwindCSS', icon: 'devicon-tailwindcss-original colored', sub: 'Utility-first', pct: 90 },
  { name: 'AI Tools', icon: 'devicon-openai-plain', sub: 'Claude, ChatGPT, n8n', pct: 88 },
  { name: 'Vercel', icon: 'devicon-vercel-original', sub: 'Deploy, hosting', pct: 85 }
];

const projectsData = [
  {
    title: 'CodeDost — AI Coding Tutor',
    desc: 'Pakistani AI tutor that explains code bugs in Roman Urdu with JWT auth and quota management.',
    category: 'ai',
    tags: [{ text: 'AI', color: '#00ff88' }, { text: 'Full-Stack', color: '#00d4ff' }],
    tools: ['devicon-nodejs-plain colored', 'devicon-mongodb-plain colored', 'devicon-vercel-original'],
    img: 'https://picsum.photos/seed/codedost/600/400.jpg',
    problem: 'Pakistani students struggle with debugging — most resources are in English, creating a language barrier.',
    solution: 'Built an AI-powered tutor using Claude API that explains bugs in Roman Urdu, with JWT auth, MongoDB quota system, and a clean chat UI.',
    results: 'Live on Vercel + Railway. 500+ debugging sessions in first month. Users report 3x faster bug resolution.'
  },
  {
    title: 'FasalScan — Crop Disease AI',
    desc: 'AI-powered crop disease detection app for Pakistani farmers, built for MNSUAM competition.',
    category: 'ai',
    tags: [{ text: 'AI Vision', color: '#00ff88' }, { text: 'Agri-Tech', color: '#7b2fff' }],
    tools: ['devicon-python-plain colored', 'devicon-flask-original', 'devicon-android-plain'],
    img: 'https://picsum.photos/seed/fasalscan/600/400.jpg',
    problem: 'Pakistani farmers lose 30-40% of crops to undetected diseases. No accessible, local-language tool existed.',
    solution: 'Developed a computer vision model trained on local crop images with a mobile-friendly interface for real-time disease identification.',
    results: 'Selected for MNSUAM Business Ideas Competition. 85% detection accuracy on local crop varieties.'
  },
  {
    title: 'E-Commerce SEO & Ads Campaign',
    desc: 'Full Shopify store optimization — Google Ads, 1000+ keyword dataset, conversion-focused SEO.',
    category: 'shopify',
    tags: [{ text: 'Shopify', color: '#95bf47' }, { text: 'SEO', color: '#00d4ff' }],
    tools: ['devicon-shopify-plain colored', 'devicon-google-plain colored'],
    img: 'https://picsum.photos/seed/ecomseo/600/400.jpg',
    problem: "Client's Shopify store had zero organic traffic and was burning ad budget with no conversions.",
    solution: 'Rebuilt the entire SEO structure, created a 1000+ keyword dataset, set up Google Ads with precise targeting, and optimized product pages.',
    results: 'Organic traffic grew 4x in 60 days. Ad ROAS improved from 0.8 to 3.2. Store now generates consistent daily sales.'
  },
  {
    title: 'Full-Stack Auth System + PWA',
    desc: 'JWT authentication, email verification, quota management, and PWA with service workers.',
    category: 'fullstack',
    tags: [{ text: 'Full-Stack', color: '#00d4ff' }, { text: 'PWA', color: '#7b2fff' }],
    tools: ['devicon-nodejs-plain colored', 'devicon-javascript-plain colored', 'devicon-mongodb-plain colored'],
    img: 'https://picsum.photos/seed/authpwa/600/400.jpg',
    problem: 'Needed a reusable auth system with email verification, rate limiting, and offline capability.',
    solution: 'Built a complete auth microservice with JWT, Nodemailer verification, MongoDB session management, and converted to PWA with service workers.',
    results: 'Deployed and production-ready. Now used as the auth layer for 3+ projects. PWA score: 95 on Lighthouse.'
  },
  {
    title: 'Business Landing Page — Agency',
    desc: 'High-converting landing page for a digital agency with smooth scroll animations and clear CTAs.',
    category: 'fullstack',
    tags: [{ text: 'Landing Page', color: '#ff2fff' }, { text: 'Conversion', color: '#00ff88' }],
    tools: ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-javascript-plain colored'],
    img: 'https://picsum.photos/seed/agencylp/600/400.jpg',
    problem: "Agency had a generic template site with 2% conversion rate on their lead form.",
    solution: 'Designed and built a custom landing page with scroll-triggered animations, social proof section, and strategically placed CTAs.',
    results: 'Conversion rate jumped from 2% to 7.8%. Client booked 12 calls in the first week after launch.'
  },
  {
    title: 'Shopify Store — Fashion Brand',
    desc: 'Complete Shopify store setup with custom theme, product upload, and SEO foundation.',
    category: 'shopify',
    tags: [{ text: 'Shopify', color: '#95bf47' }, { text: 'Design', color: '#ff2fff' }],
    tools: ['devicon-shopify-plain colored', 'devicon-figma-plain colored', 'devicon-css3-plain colored'],
    img: 'https://picsum.photos/seed/fashionstore/600/400.jpg',
    problem: 'Fashion brand had no online presence and was losing customers to competitors with e-commerce.',
    solution: 'Set up a complete Shopify store with custom theme modifications, 50+ product uploads, collection structure, and SEO-optimized content.',
    results: 'Store went from $0 to $2,400/month in revenue within 90 days. Page load speed under 2 seconds.'
  }
];

const servicesData = [
  { num: '01', icon: 'fa-solid fa-globe', name: 'Business Website', desc: 'Full custom website — landing page, about, services, contact. Mobile-first, fast, conversion-focused. Your brand, live in 48 hours.', items: ['Responsive Design', 'SEO Basics Included', 'Contact Form + Map', 'Hosting + Domain Setup'], price: 'Starting at $99 – $299', badge: 'Most Popular' },
  { num: '02', icon: 'fa-solid fa-code', name: 'Full-Stack Web App', desc: 'Need a real product? Auth, database, APIs, dashboards — I build and deploy complete web apps with AI-enhanced speed.', items: ['Frontend + Backend', 'Database & Auth', 'API Integration', 'Deployed & Monitored'], price: 'Starting at $299 – $999', badge: null },
  { num: '03', icon: 'fa-solid fa-cart-shopping', name: 'Shopify & SEO', desc: 'E-commerce store setup, Google Ads campaigns, SEO optimization — everything to get your store found and converting.', items: ['Shopify Store Setup', 'Google Ads Campaigns', 'Keyword Research', 'Performance Tracking'], price: 'Starting at $199 – $699', badge: null }
];

const testimonialsData = [
  { text: 'Abdul delivered my business website in exactly 36 hours. The quality shocked me — it looked like it came from a $5K agency. My leads doubled in the first week.', name: 'Hassan R.', role: 'Business Owner, Lahore', initials: 'HR' },
  { text: 'I needed a Shopify store fast for my fashion brand. Abdul set everything up — products, SEO, the works. Made my first $2K within 60 days.', name: 'Ayesha M.', role: 'Fashion Brand Founder', initials: 'AM' },
  { text: 'The AI coding tutor Abdul built is incredible. It explains my bugs in Roman Urdu — finally something made for Pakistani students. 10/10 would recommend.', name: 'Bilal K.', role: 'CS Student, MNSUAM', initials: 'BK' }
];

const whyData = [
  { icon: 'fa-solid fa-bolt', title: 'Fast Delivery', desc: 'Most projects live in 48–72 hours.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Mobile-First', desc: 'Perfect on every device, always.' },
  { icon: 'fa-solid fa-robot', title: 'AI-Powered', desc: 'More output, less cost, same quality.' },
  { icon: 'fa-solid fa-magnifying-glass', title: 'SEO-Ready', desc: 'Clean code, fast load, optimized.' },
  { icon: 'fa-solid fa-comments', title: 'Clear Comms', desc: 'Updates every step. No ghosting.' },
  { icon: 'fa-solid fa-chart-line', title: 'Result Focused', desc: 'Built to convert, not just look pretty.' }
];

/* ===== CSS PARTICLES ===== */
function createCSSParticles() {
  const c = document.getElementById('cssParticles');
  if (!c) return;
  const colors = ['var(--accent-green)', 'var(--accent-cyan)', 'var(--accent-purple)'];
  for (let i = 0; i < 30; i++) {
    const s = document.createElement('span');
    const size = 2 + Math.random() * 3.5;
    s.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 100) + '%;background:' + colors[i % 3] + ';--o:' + (0.12 + Math.random() * 0.25) + ';--dur:' + (9 + Math.random() * 14) + 's;--delay:' + (Math.random() * -12) + 's;--ty:' + (-30 - Math.random() * 70) + 'px;--tx:' + (-25 + Math.random() * 50) + 'px;';
    c.appendChild(s);
  }
}

/* ===== THREE.JS ===== */
const canvas = document.getElementById('heroCanvas');
const isMobile = window.innerWidth < 768;
const isLowPerf = navigator.hardwareConcurrency < 4;
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let threeActive = false;

if (!isMobile && !isLowPerf && !prefersReduced) {
  try {
    const THREE = await import('three');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020208, 0.03);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 8;
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const greenLight = new THREE.PointLight(0x00ff88, 2, 20);
    greenLight.position.set(3, 2, 4);
    scene.add(greenLight);
    const cyanLight = new THREE.PointLight(0x00d4ff, 1.2, 20);
    cyanLight.position.set(-4, -2, 3);
    scene.add(cyanLight);
    const geoms = [
      function() { return new THREE.IcosahedronGeometry(Math.max(0.01, 0.7 + Math.random() * 0.5), 1); },
      function() { return new THREE.TorusKnotGeometry(Math.max(0.01, 0.4 + Math.random() * 0.3), Math.max(0.01, 0.12 + Math.random() * 0.08), 80, 12); },
      function() { return new THREE.OctahedronGeometry(Math.max(0.01, 0.6 + Math.random() * 0.4)); },
      function() { return new THREE.SphereGeometry(Math.max(0.01, 0.25 + Math.random() * 0.3), 24, 24); }
    ];
    const emColors = [0x00ff88, 0x00d4ff, 0x7b2fff, 0x00ff88, 0x00d4ff, 0x7b2fff, 0x00ff88];
    const meshes = [];
    for (var i = 0; i < 7; i++) {
      var mat = new THREE.MeshStandardMaterial({ color: 0x0a0a1a, emissive: emColors[i], emissiveIntensity: 0.25, metalness: 0.8, roughness: 0.25, transparent: true, opacity: 0.65 });
      var mesh = new THREE.Mesh(geoms[i % geoms.length](), mat);
      mesh.position.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6 - 2);
      mesh.userData = { rx: (Math.random() - 0.5) * 0.007, ry: (Math.random() - 0.5) * 0.007, fOff: Math.random() * Math.PI * 2, fAmp: 0.2 + Math.random() * 0.4, fSpd: 0.3 + Math.random() * 0.4 };
      scene.add(mesh);
      meshes.push(mesh);
    }
    var mouseX = 0, mouseY = 0, rafP = false;
    document.addEventListener('mousemove', function(e) {
      if (rafP) return; rafP = true;
      requestAnimationFrame(function() { mouseX = (e.clientX / window.innerWidth - 0.5) * 2; mouseY = (e.clientY / window.innerHeight - 0.5) * 2; rafP = false; });
    });
    var rszP = false;
    window.addEventListener('resize', function() {
      if (rszP) return; rszP = true;
      requestAnimationFrame(function() { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); rszP = false; });
    });
    var sY = 0, scrP = false;
    window.addEventListener('scroll', function() { if (scrP) return; scrP = true; requestAnimationFrame(function() { sY = window.scrollY; scrP = false; }); });
    var vis = true;
    document.addEventListener('visibilitychange', function() { vis = !document.hidden; if (vis) animate(); });
    var lookTarget = new THREE.Vector3();
    var clock = new THREE.Clock();
    function animate() {
      if (!vis) return;
      requestAnimationFrame(animate);
      var t = clock.getElapsedTime();
      meshes.forEach(function(m) {
        m.rotation.x += m.userData.rx;
        m.rotation.y += m.userData.ry;
        m.position.y += Math.sin(t * m.userData.fSpd + m.userData.fOff) * 0.002 * m.userData.fAmp;
      });
      greenLight.position.x += (mouseX * 5 - greenLight.position.x) * 0.04;
      greenLight.position.y += (-mouseY * 3 - greenLight.position.y) * 0.04;
      lookTarget.set(mouseX * 0.25, -mouseY * 0.25, 0);
      camera.lookAt(lookTarget);
      var tz = 8 + sY * 0.003;
      camera.position.z += (Math.min(tz, 14) - camera.position.z) * 0.04;
      renderer.render(scene, camera);
    }
    threeActive = true;
    animate();
  } catch (e) {
    threeActive = false;
    canvas.style.display = 'none';
  }
}
if (!threeActive) {
  canvas.style.display = 'none';
  createCSSParticles();
} else {
  document.getElementById('cssParticles').style.display = 'none';
}

/* ===== THEME TOGGLE ===== */
var themeToggle = document.getElementById('themeToggle');
var themeIcon = document.getElementById('themeIcon');
var html = document.documentElement;
var savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
themeIcon.className = savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
themeToggle.addEventListener('click', function() {
  var current = html.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeIcon.className = next === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
});

/* ===== TYPING ===== */
var typingPhrases = ['Vibecoding Expert', 'AI-Powered Builder', 'CS Student @ MNSUAM', '48hr Delivery Specialist'];
var typingEl = document.getElementById('typingText');
var pIdx = 0, cIdx = 0, isDel = false, lastT = 0;
function typeLoop(ts) {
  if (!lastT) lastT = ts;
  var d = ts - lastT;
  if (isDel) {
    if (d >= 35) { cIdx--; typingEl.textContent = typingPhrases[pIdx].substring(0, cIdx); lastT = ts;
      if (cIdx === 0) { isDel = false; pIdx = (pIdx + 1) % typingPhrases.length; } }
  } else {
    if (d >= 70) { cIdx++; typingEl.textContent = typingPhrases[pIdx].substring(0, cIdx); lastT = ts;
      if (cIdx === typingPhrases[pIdx].length) { isDel = true; lastT = 0; setTimeout(function() { requestAnimationFrame(typeLoop); }, 2000); return; } }
  }
  requestAnimationFrame(typeLoop);
}
requestAnimationFrame(typeLoop);

/* ===== NAVBAR ===== */
var navbar = document.getElementById('navbar');
var navCheck = document.getElementById('navCheck');
var mobileNav = document.getElementById('mobileNav');
var scrollIndicator = document.getElementById('scrollIndicator');
setTimeout(function() { navbar.classList.add('show'); }, 200);
var sThrottle = false;
window.addEventListener('scroll', function() {
  if (sThrottle) return; sThrottle = true;
  requestAnimationFrame(function() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    scrollIndicator.classList.toggle('hidden', window.scrollY > 120);
    sThrottle = false;
  });
});
document.querySelectorAll('.mobile-nav a').forEach(function(a) { a.addEventListener('click', function() { navCheck.checked = false; }); });
mobileNav.addEventListener('click', function(e) { if (e.target === mobileNav) navCheck.checked = false; });

var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('#navLinks a');
var secObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(en) {
    if (en.isIntersecting) {
      navLinks.forEach(function(l) { l.classList.remove('active'); });
      var al = document.querySelector('#navLinks a[href="#' + en.target.id + '"]');
      if (al) al.classList.add('active');
    }
  });
}, { threshold: 0.15, rootMargin: '-80px 0px -40% 0px' });
sections.forEach(function(s) { secObs.observe(s); });

/* ===== REVEALS ===== */
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(en) { if (en.isIntersecting) { en.target.classList.add('visible'); revealObs.unobserve(en.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(function(el) { revealObs.observe(el); });

/* ===== STATS ===== */
function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }
var cObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(en) {
    if (en.isIntersecting) {
      var el = en.target, target = parseInt(el.dataset.target), suffix = el.dataset.suffix || '';
      var dur = 2000, start = performance.now();
      function upd(now) {
        var p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(easeOutQuart(p) * target) + suffix;
        if (p < 1) requestAnimationFrame(upd);
      }
      requestAnimationFrame(upd);
      cObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(function(el) { cObs.observe(el); });

/* ===== SKILLS ===== */
var skillsGrid = document.getElementById('skillsGrid');
skillsData.forEach(function(sk) {
  var card = document.createElement('div');
  card.className = 'skill-card glass reveal';
  card.setAttribute('tabindex', '0');
  card.innerHTML = '<div class="skill-icon"><i class="' + sk.icon + '"></i></div><div class="skill-name">' + sk.name + '</div><div class="skill-sub">' + sk.sub + '</div><div class="skill-bar"><div class="skill-bar-fill" data-pct="' + sk.pct + '"></div></div>';
  skillsGrid.appendChild(card);
  revealObs.observe(card);
});
var sbObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(en) {
    if (en.isIntersecting) {
      var fill = en.target.querySelector('.skill-bar-fill');
      if (fill) fill.style.width = fill.dataset.pct + '%';
      sbObs.unobserve(en.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-card').forEach(function(c) { sbObs.observe(c); });

if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.skill-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = 'perspective(800px) rotateX(' + (-y * 12).toFixed(1) + 'deg) rotateY(' + (x * 12).toFixed(1) + 'deg)';
    });
    card.addEventListener('mouseleave', function() { card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)'; });
  });
}

/* ===== PROJECTS ===== */
var projectsGrid = document.getElementById('projectsGrid');
projectsData.forEach(function(p, i) {
  var card = document.createElement('article');
  card.className = 'project-card glass reveal';
  card.dataset.category = p.category;
  card.innerHTML = '<div class="project-img"><img src="' + p.img + '" alt="' + p.title + '" loading="lazy" decoding="async" width="600" height="400"></div><div class="project-tags">' + p.tags.map(function(t) { return '<span class="project-tag" style="background:' + t.color + '18;color:' + t.color + ';border:1px solid ' + t.color + '30">' + t.text + '</span>'; }).join('') + '</div><div class="project-body"><h3 class="project-title">' + p.title + '</h3><p class="project-desc">' + p.desc + '</p><p class="project-result">\uD83D\uDCC8 ' + p.results.split('.')[0] + '.</p><div class="project-tools">' + p.tools.map(function(t) { return '<i class="' + t + '"></i>'; }).join('') + '</div><div class="project-btns"><a href="#" class="btn btn-primary" style="padding:8px 16px;font-size:12px" onclick="event.preventDefault()">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a><button class="btn btn-outline" style="padding:8px 16px;font-size:12px" data-modal="' + i + '">Case Study</button></div></div>';
  projectsGrid.appendChild(card);
  revealObs.observe(card);
});

document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var f = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(function(card) {
      card.classList.toggle('hidden', f !== 'all' && card.dataset.category !== f);
    });
  });
});

/* ===== MODAL ===== */
var modalOverlay = document.getElementById('modalOverlay');
var modalContent = document.getElementById('modalContent');
var modalClose = document.getElementById('modalClose');
var lastFocused = null;

function openModal(idx) {
  var p = projectsData[idx];
  if (!p) return;
  lastFocused = document.activeElement;
  modalContent.innerHTML = '<img src="' + p.img + '" alt="' + p.title + '" class="modal-img" loading="lazy" decoding="async"><div style="margin-bottom:14px">' + p.tags.map(function(t) { return '<span class="modal-tag" style="background:' + t.color + '18;color:' + t.color + '">' + t.text + '</span>'; }).join('') + '</div><h3 class="modal-title" id="modalTitle">' + p.title + '</h3><div class="modal-tools-row">' + p.tools.map(function(t) { return '<i class="' + t + '"></i>'; }).join('') + '</div><div class="modal-section"><h4>Problem</h4><p>' + p.problem + '</p></div><div class="modal-section"><h4>Solution</h4><p>' + p.solution + '</p></div><div class="modal-section"><h4>Results</h4><p>' + p.results + '</p></div>';
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(function() { modalClose.focus(); }, 100);
}
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}
document.querySelectorAll('[data-modal]').forEach(function(btn) { btn.addEventListener('click', function() { openModal(parseInt(btn.dataset.modal)); }); });
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
  if (e.key === 'Tab' && modalOverlay.classList.contains('open')) {
    var foc = modalOverlay.querySelectorAll('button,[href],[tabindex]:not([tabindex="-1"])');
    if (foc.length) {
      var first = foc[0], last = foc[foc.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
});

/* ===== SERVICES ===== */
var servicesGrid = document.getElementById('servicesGrid');
servicesData.forEach(function(s) {
  var card = document.createElement('div');
  card.className = 'service-card glass reveal';
  card.innerHTML = (s.badge ? '<span class="service-badge">' + s.badge + '</span>' : '') + '<div class="service-num">' + s.num + '</div><div class="service-icon"><i class="' + s.icon + '"></i></div><h3 class="service-name">' + s.name + '</h3><p style="font-size:13px;color:var(--text-secondary);line-height:1.7;margin-bottom:16px">' + s.desc + '</p><ul>' + s.items.map(function(it) { return '<li>' + it + '</li>'; }).join('') + '</ul><p class="service-price">' + s.price + '</p><button class="service-cta" onclick="document.getElementById(\'contact\').scrollIntoView({behavior:\'smooth\'})">Get Started <i class="fa-solid fa-arrow-right"></i></button>';
  servicesGrid.appendChild(card);
  revealObs.observe(card);
});

/* ===== TESTIMONIALS ===== */
var testimonialsGrid = document.getElementById('testimonialsGrid');
testimonialsData.forEach(function(t) {
  var card = document.createElement('div');
  card.className = 'testimonial-card glass reveal';
  card.innerHTML = '<div class="testimonial-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div><p class="testimonial-text">"' + t.text + '"</p><div class="testimonial-author"><div class="testimonial-avatar">' + t.initials + '</div><div><div class="testimonial-name">' + t.name + '</div><div class="testimonial-role">' + t.role + '</div></div></div>';
  testimonialsGrid.appendChild(card);
  revealObs.observe(card);
});

/* ===== WHY ===== */
var whyGrid = document.getElementById('whyGrid');
whyData.forEach(function(w, i) {
  var card = document.createElement('div');
  card.className = 'why-card glass';
  card.dataset.delay = i * 80;
  card.innerHTML = '<div class="why-icon"><i class="' + w.icon + '"></i></div><h4 class="why-title">' + w.title + '</h4><p class="why-desc">' + w.desc + '</p>';
  whyGrid.appendChild(card);
});
var whyObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(en) {
    if (en.isIntersecting) {
      setTimeout(function() { en.target.classList.add('visible'); }, parseInt(en.target.dataset.delay) || 0);
      whyObs.unobserve(en.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.why-card').forEach(function(c) { whyObs.observe(c); });

/* ===== PROCESS ===== */
var processTimeline = document.getElementById('processTimeline');
var processLineFill = document.getElementById('processLineFill');
var processSteps = document.querySelectorAll('.process-step');
var procObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(en) {
    if (en.isIntersecting) {
      if (window.innerWidth < 768) { processLineFill.style.height = '100%'; }
      else { processLineFill.style.width = '100%'; }
      processSteps.forEach(function(s, i) { setTimeout(function() { s.classList.add('active'); }, i * 400); });
      procObs.unobserve(en.target);
    }
  });
}, { threshold: 0.3 });
procObs.observe(processTimeline);

/* ===== CONTACT FORM ===== */
var contactForm = document.getElementById('contactForm');
var formSubmit = document.getElementById('formSubmit');
function showErr(id, show) { var el = document.getElementById(id); if (el) el.classList.toggle('show', show); }
function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var ok = true;
  var name = document.getElementById('formName');
  var email = document.getElementById('formEmail');
  var type = document.getElementById('formType');
  var msg = document.getElementById('formMessage');
  showErr('nameError', !name.value.trim()); if (!name.value.trim()) ok = false;
  showErr('emailError', !validEmail(email.value.trim())); if (!validEmail(email.value.trim())) ok = false;
  showErr('typeError', !type.value); if (!type.value) ok = false;
  showErr('messageError', !msg.value.trim()); if (!msg.value.trim()) ok = false;
  if (!ok) return;

  formSubmit.classList.add('loading');
  formSubmit.disabled = true;

  fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ name: name.value.trim(), email: email.value.trim(), type: type.value, budget: document.getElementById('formBudget').value, message: msg.value.trim() })
  }).then(function(res) {
    formSubmit.classList.remove('loading');
    if (res.ok) {
      formSubmit.classList.add('success');
      formSubmit.querySelector('.btn-text').innerHTML = '&#10003; Message Sent!';
      contactForm.querySelectorAll('input,select,textarea').forEach(function(f) { f.disabled = true; });
      setTimeout(function() {
        contactForm.reset();
        contactForm.querySelectorAll('input,select,textarea').forEach(function(f) { f.disabled = false; });
        formSubmit.classList.remove('success');
        formSubmit.querySelector('.btn-text').innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
        formSubmit.disabled = false;
      }, 5000);
    } else {
      formSubmit.classList.add('error-state');
      formSubmit.querySelector('.btn-text').innerHTML = '&#10007; Failed — Try Again';
      formSubmit.disabled = false;
      setTimeout(function() {
        formSubmit.classList.remove('error-state');
        formSubmit.querySelector('.btn-text').innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
      }, 3000);
    }
  }).catch(function() {
    formSubmit.classList.remove('loading');
    formSubmit.classList.add('error-state');
    formSubmit.querySelector('.btn-text').innerHTML = '&#10007; Failed — Try Again';
    formSubmit.disabled = false;
    setTimeout(function() {
      formSubmit.classList.remove('error-state');
      formSubmit.querySelector('.btn-text').innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
    }, 3000);
  });
});

['formName', 'formEmail', 'formType', 'formMessage'].forEach(function(id) {
  var el = document.getElementById(id);
  if (el) el.addEventListener('input', function() { showErr(id.replace('form', '').toLowerCase() + 'Error', false); });
});