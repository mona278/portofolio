/**
 * Mona Sayed Mohamed Emba - Main Application Script
 * Orchestrates navigation, scroll animations, project preview switching, and UX interactions.
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Dynamic Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Sticky Header Scrolled State
  const header = document.querySelector('.site-header');
  function handleHeaderScroll() {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // 3. Mobile Navigation Menu
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    function toggleMobileMenu() {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        `;
        document.body.style.overflow = '';
      } else {
        navMenu.classList.add('open');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
        document.body.style.overflow = 'hidden';
      }
    }

    navToggle.addEventListener('click', toggleMobileMenu);

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMobileMenu();
        }
      });
    });
  }

  // 4. ScrollSpy Active Section Indicator
  const sections = document.querySelectorAll('section[id]');
  function highlightActiveNav() {
    const scrollY = window.scrollY + 120;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        if (navLink) navLink.classList.add('active');
      } else {
        if (navLink) navLink.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', highlightActiveNav, { passive: true });
  highlightActiveNav();

  // 5. Scroll Reveal with Intersection Observer
  const revealElements = document.querySelectorAll('.reveal-init');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach((el) => el.classList.add('reveal-active'));
  }

  // 6. Interactive Project Card Thumbnail Switchers
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    const projectId = card.dataset.project;
    const mainImg = card.querySelector('.main-preview-img');
    const mainFrame = card.querySelector('.main-preview-frame');
    const thumbButtons = card.querySelectorAll('.thumb-btn');

    thumbButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const fullSrc = btn.dataset.fullSrc;
        const imgTitle = btn.dataset.title;

        if (mainImg && fullSrc) {
          mainImg.src = fullSrc;
          mainImg.alt = imgTitle || 'Project Preview';
        }

        thumbButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        mainFrame.dataset.activeIdx = index;
      });
    });

    // Clicking main preview opens lightbox at currently selected thumbnail
    if (mainFrame) {
      mainFrame.addEventListener('click', () => {
        const activeIdx = parseInt(mainFrame.dataset.activeIdx || '0', 10);
        if (window.Lightbox) {
          window.Lightbox.openProject(projectId, activeIdx);
        }
      });
    }

    // "View Project Gallery" button
    const viewGalleryBtn = card.querySelector('.btn-view-gallery');
    if (viewGalleryBtn) {
      viewGalleryBtn.addEventListener('click', () => {
        if (window.Lightbox) {
          window.Lightbox.openProject(projectId, 0);
        }
      });
    }
  });

  // 7. ITI Certificate Preview Lightbox Trigger
  const certThumbnail = document.getElementById('certThumbnail');
  if (certThumbnail) {
    certThumbnail.addEventListener('click', () => {
      if (window.Lightbox && window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.certificate) {
        const cert = window.PORTFOLIO_DATA.certificate;
        window.Lightbox.openSingle(
          cert.image,
          `${cert.title} - ${cert.institution}`,
          `Official completion certificate (${cert.duration}, ${cert.dates}). Issued by ${cert.issuer}.`
        );
      }
    });
  }

  // 8. CV Action Behavior
  const cvButtons = document.querySelectorAll('.btn-download-cv');
  cvButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      // Check if CV file exists or fallback to contact inquiry
      const cvPath = 'assets/docs/Mona-Sayed-CV.pdf';
      fetch(cvPath, { method: 'HEAD' })
        .then((res) => {
          if (res.ok) {
            window.open(cvPath, '_blank');
          } else {
            // Friendly prompt to contact Mona for her CV
            alert('Mona Sayed Mohamed Emba\'s comprehensive CV is available upon request. Please feel free to reach out directly via the contact form or email at monaemba196@gmail.com!');
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        })
        .catch(() => {
          alert('Mona\'s updated CV is available upon request via monaemba196@gmail.com.');
        });
    });
  });
});
