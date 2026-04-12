/* ============================================================
   MUBEED.COM — Main JavaScript
   Static site — vanilla JS only
   ============================================================ */

(function () {
  'use strict';

  /* ----- CONFIGURATION (edit these values) ----- */
  // <!-- EDITABLE: Update these contact details -->
  const CONFIG = {
    whatsappNumber: '966555435986',  // Without + sign
    phoneNumber: '+966555435986',
    phonDisplay: '0555435986',
  };

  /* ----- STICKY HEADER ----- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----- MOBILE NAV ----- */
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeMobileNav = () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  /* ----- FAQ ACCORDION ----- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');
    if (!trigger || !answer) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items
      faqItems.forEach(other => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = '0';
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });

    // Keyboard accessibility
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });

  // Open first FAQ item by default
  const firstFaq = document.querySelector('.faq-item');
  if (firstFaq) {
    firstFaq.classList.add('open');
    const firstAnswer = firstFaq.querySelector('.faq-answer');
    if (firstAnswer) firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
  }

  /* ----- WHATSAPP MESSAGE BUILDER ----- */
  function buildWhatsAppMessage(city, service, property) {
    let msg = 'السلام عليكم، أرغب في طلب خدمة مكافحة حشرات من مبيد.';

    if (city) msg += '\nالمدينة: ' + city;
    if (service) msg += '\nنوع الخدمة: ' + service;
    if (property) msg += '\nنوع العقار: ' + property;

    msg += '\nأرجو تزويدي بالتفاصيل والسعر.';
    return msg;
  }

  function openWhatsApp(message) {
    const encoded = encodeURIComponent(message || 'السلام عليكم، أرغب في الاستفسار عن خدمات مكافحة الحشرات من مبيد.');
    window.open('https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encoded, '_blank');
  }

  // Quick selector form
  const selectorBtn = document.getElementById('selectorBtn');
  if (selectorBtn) {
    selectorBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const city = document.getElementById('selectCity')?.value || '';
      const service = document.getElementById('selectService')?.value || '';
      const property = document.getElementById('selectProperty')?.value || '';
      const msg = buildWhatsAppMessage(city, service, property);
      openWhatsApp(msg);
    });
  }

  // All WhatsApp links with data-wa attribute
  document.querySelectorAll('[data-wa]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const service = el.getAttribute('data-wa-service') || '';
      const msg = buildWhatsAppMessage('', service, '');
      openWhatsApp(msg);
    });
  });

  // Generic WhatsApp links (class-based)
  document.querySelectorAll('.wa-link').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp();
    });
  });

  /* ----- SERVICE CARD → SELECTOR PRESELECT ----- */
  document.querySelectorAll('[data-select-service]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceValue = el.getAttribute('data-select-service');
      const selectService = document.getElementById('selectService');
      if (selectService && serviceValue) {
        selectService.value = serviceValue;
      }
      // Scroll to hero selector
      const selectorEl = document.querySelector('.hero-selector');
      if (selectorEl) {
        selectorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  /* ----- SMOOTH SCROLL FOR ANCHOR LINKS ----- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = header ? header.offsetHeight + 16 : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ----- IMAGE ERROR HANDLER ----- */
  document.querySelectorAll('img[data-placeholder]').forEach(img => {
    img.addEventListener('error', function () {
      this.style.display = 'none';
      const placeholder = this.parentElement.querySelector('.img-placeholder');
      if (placeholder) placeholder.style.display = 'flex';
    });
  });

  /* ----- EXPOSE CONFIG FOR CTA BAR ----- */
  window.MUBEED = {
    openWhatsApp: openWhatsApp,
    phoneNumber: CONFIG.phoneNumber,
  };

})();
