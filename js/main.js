/**
 * Akash Vashista - Profile Portfolio
 * Micro-interactions & iOS Toast Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  // Toast element reference
  const toast = document.getElementById('ios-toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout = null;

  function showToast(message, duration = 2800) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // Copy-to-clipboard buttons (e.g. email, phone)
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Copied to clipboard';
      
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`✓ ${label}`);
        }).catch(() => {
          fallbackCopy(textToCopy, label);
        });
      } else {
        fallbackCopy(textToCopy, label);
      }
    });
  });

  function fallbackCopy(text, label) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`✓ ${label}`);
    } catch (err) {
      showToast('Could not copy text');
    }
    document.body.removeChild(tempInput);
  }

  // Subtle ambient parallax tracking on mouse move for desktop
  const ambientOrbs = document.querySelectorAll('.ambient-orb');
  if (ambientOrbs.length > 0 && window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
      const xRatio = (e.clientX / window.innerWidth) - 0.5;
      const yRatio = (e.clientY / window.innerHeight) - 0.5;
      
      ambientOrbs.forEach((orb, idx) => {
        const factor = (idx + 1) * 15;
        orb.style.transform = `translate(${xRatio * factor}px, ${yRatio * factor}px)`;
      });
    }, { passive: true });
  }

  // Track resume download click
  const resumeBtn = document.querySelector('.ios-btn-resume');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      showToast('Opening Akash Vashista Resume (PDF)...', 2000);
    });
  }
});
