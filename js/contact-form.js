/**
 * Mona Sayed Mohamed Emba - Contact Form Validation & Mailto Fallback
 * Honest, transparent client-side validation with zero false server claims.
 */

(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const statusBanner = document.getElementById('contactStatusBanner');

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  function showError(inputEl, message) {
    const errorEl = document.getElementById(`${inputEl.id}Error`);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('visible');
    }
    inputEl.setAttribute('aria-invalid', 'true');
  }

  function clearError(inputEl) {
    const errorEl = document.getElementById(`${inputEl.id}Error`);
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
    inputEl.removeAttribute('aria-invalid');
  }

  // Live input validation
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length >= 2) clearError(nameInput);
  });

  emailInput.addEventListener('input', () => {
    if (emailRegex.test(emailInput.value.trim())) clearError(emailInput);
  });

  subjectInput.addEventListener('input', () => {
    if (subjectInput.value.trim().length >= 3) clearError(subjectInput);
  });

  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim().length >= 10) clearError(messageInput);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (name.length < 2) {
      showError(nameInput, 'Please enter your full name (minimum 2 characters).');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    if (!emailRegex.test(email)) {
      showError(emailInput, 'Please enter a valid email address (e.g., name@example.com).');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    if (subject.length < 3) {
      showError(subjectInput, 'Please enter a message subject (minimum 3 characters).');
      isValid = false;
    } else {
      clearError(subjectInput);
    }

    if (message.length < 10) {
      showError(messageInput, 'Please enter a message with at least 10 characters.');
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (!isValid) return;

    // Compose formatted mailto link
    const mailtoRecipient = 'monaemba196@gmail.com';
    const emailSubject = `[Portfolio Inquiry] ${subject} - from ${name}`;
    const emailBody = `Hello Mona,\n\nMy name is ${name} (${email}).\n\nSubject: ${subject}\n\nMessage:\n${message}\n\nBest regards,\n${name}`;

    const mailtoUrl = `mailto:${mailtoRecipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Display honest confirmation banner
    if (statusBanner) {
      statusBanner.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <strong>Preparing your message to Mona Sayed Mohamed Emba:</strong>
          <p style="margin: 0; color: #a7f3d0; font-size: 0.88rem;">
            Opening your default email client with your message pre-filled. You can also reach Mona directly at 
            <a href="mailto:monaemba196@gmail.com" style="color: #ffffff; text-decoration: underline; font-weight: 700;">monaemba196@gmail.com</a>.
          </p>
          <div style="margin-top: 6px;">
            <button type="button" id="copyMsgBtn" class="btn btn-secondary btn-sm" style="font-size: 0.8rem; padding: 6px 12px;">
              Copy Message to Clipboard
            </button>
          </div>
        </div>
      `;
      statusBanner.className = 'form-status-banner success';

      const copyBtn = document.getElementById('copyMsgBtn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(emailBody).then(() => {
            copyBtn.textContent = 'Message Copied!';
            setTimeout(() => {
              copyBtn.textContent = 'Copy Message to Clipboard';
            }, 3000);
          }).catch(() => {
            copyBtn.textContent = 'Please copy text manually';
          });
        });
      }
    }

    // Trigger user's mail client
    window.location.href = mailtoUrl;
  });
})();
