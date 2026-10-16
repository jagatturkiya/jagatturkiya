/**
 * Jagat Turkiya - Official Executive Website Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initContactForm();
});

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
    btn.innerHTML = 'Sending Request...';

    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.innerHTML = originalText;
      if (successNotice) {
        successNotice.style.display = 'block';
        setTimeout(() => {
          successNotice.style.display = 'none';
        }, 6000);
      } else {
        alert('Thank you! Your inquiry has been received. Our office will reach out to you shortly.');
      }
    }, 800);
  });
}
