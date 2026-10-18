/**
 * Mona Sayed Mohamed Emba - Accessible Project Gallery & Image Lightbox
 * Full keyboard navigation (Esc, Arrow Left/Right), touch friendly, ARIA attributes.
 */

(function () {
  let activeGallery = [];
  let currentIndex = 0;
  let previousActiveElement = null;

  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxMainImg');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalCaption = document.getElementById('lightboxCaption');
  const modalCounter = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!modal) return;

  function updateModalContent() {
    if (!activeGallery || activeGallery.length === 0) return;

    const item = activeGallery[currentIndex];
    modalImg.src = item.src;
    modalImg.alt = item.title || 'Project Preview Screenshot';
    modalTitle.textContent = item.title || '';
    modalCaption.textContent = item.caption || '';
    modalCounter.textContent = `Image ${currentIndex + 1} of ${activeGallery.length}`;

    // Hide navigation arrows if there's only 1 image (e.g. certificate)
    if (activeGallery.length <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      modalCounter.style.display = 'none';
    } else {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
      modalCounter.style.display = 'block';
    }
  }

  function openGallery(items, startIndex = 0) {
    if (!items || items.length === 0) return;
    previousActiveElement = document.activeElement;
    activeGallery = items;
    currentIndex = Math.max(0, Math.min(startIndex, items.length - 1));

    updateModalContent();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => {
      closeBtn.focus();
    }, 50);
  }

  function closeGallery() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeGallery = [];
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

  function nextImage() {
    if (!activeGallery || activeGallery.length <= 1) return;
    currentIndex = (currentIndex + 1) % activeGallery.length;
    updateModalContent();
  }

  function prevImage() {
    if (!activeGallery || activeGallery.length <= 1) return;
    currentIndex = (currentIndex - 1 + activeGallery.length) % activeGallery.length;
    updateModalContent();
  }

  // Event Listeners
  closeBtn.addEventListener('click', closeGallery);
  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  // Click outside image to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-content-wrap')) {
      closeGallery();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeGallery();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  });

  // Expose global gallery trigger
  window.Lightbox = {
    openProject: function (projectId, startIndex = 0) {
      if (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.projects[projectId]) {
        openGallery(window.PORTFOLIO_DATA.projects[projectId].gallery, startIndex);
      }
    },
    openSingle: function (src, title, caption) {
      openGallery([{ src, title, caption }], 0);
    },
    close: closeGallery
  };
})();
