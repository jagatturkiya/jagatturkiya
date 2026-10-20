/**
 * Jagat Turkiya - Official Executive Website Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initContactForm();
  prefillFromQuery();
  initFaqAccordions();
});

/* Executive Interactive FAQ Accordion */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isCurrentlyOpen = item.classList.contains('active');

      // Close other items in the same container
      const container = item.closest('.faq-accordion');
      if (container) {
        container.querySelectorAll('.faq-item.active').forEach(activeItem => {
          if (activeItem !== item) {
            activeItem.classList.remove('active');
            const activeBtn = activeItem.querySelector('.faq-question');
            const activeAns = activeItem.querySelector('.faq-answer');
            if (activeBtn) activeBtn.setAttribute('aria-expanded', 'false');
            if (activeAns) activeAns.style.maxHeight = null;
          }
        });
      }

      // Toggle current item
      if (isCurrentlyOpen) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}


/* Mobile Navigation Drawer */
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawer = document.getElementById('mobileDrawer');

  if (!drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* Consultation & Contact Form Submission */
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  const successNotice = document.getElementById('formSuccessNotice');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = 'Scheduling Call...';

    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.innerHTML = originalText;
      if (successNotice) {
        successNotice.style.display = 'block';
        setTimeout(() => {
          successNotice.style.display = 'none';
        }, 7000);
      } else {
        alert('Thank you! Your request has been received. Jagat Turkiya’s executive desk will reach out to you shortly.');
      }
    }, 750);
  });
}

/* Pre-fill message based on query parameters */
function prefillFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject');
  const type = params.get('type');
  const messageEl = document.getElementById('clientMessage');

  if (!messageEl) return;

  if (subject === 'MastermindCall') {
    messageEl.value = 'Hello Jagat, I would like to schedule a 1-on-1 discovery call regarding the Financial Transformation Mastermind.';
  } else if (subject === '6MonthMastermind') {
    messageEl.value = 'Hello Jagat, I would like to inquire about enrolling in the 6-Month Mastermind Program.';
  } else if (subject) {
    messageEl.value = `Hello Jagat, I would like to inquire about your book: "${subject.replace(/([A-Z])/g, ' $1').trim()}". Please share details.`;
  } else if (type === 'keynote') {
    messageEl.value = 'Hello Jagat, I would like to invite you for a Keynote Speaking / Corporate Seminar engagement.';
  }
}
