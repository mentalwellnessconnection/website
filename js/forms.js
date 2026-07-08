/* ==========================================================================
   Mental Wellness Connection — forms.js
   Vanilla JS only.

   FORM BACKEND: Get Help, Volunteer, Internship, Contact, and Donate forms
   are built as embedded Google Forms (see form-embed-frame containers in
   each page). To connect a real form:
     1. Build the form at forms.google.com under info@mentalwellnessconnection.com
     2. Click Send > Embed (<>) and copy the src URL from the <iframe>
     3. Replace the matching PASTE_GOOGLE_FORM_EMBED_URL_HERE placeholder
        in that page's <iframe src="..."> attribute.
   No JavaScript changes are required to wire up a Google Form embed.
   ========================================================================== */

(function () {
  "use strict";

  function initNewsletterForm() {
    var form = document.getElementById("newsletter-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var emailInput = form.querySelector('input[type="email"]');
      var confirmation = form.querySelector(".newsletter-confirmation");
      if (!emailInput || !emailInput.value) return;

      // Placeholder behavior until this is wired to a real Google Form /
      // Jotform / email service endpoint. Swap this block for a fetch()
      // POST to your chosen provider when ready.
      form.querySelector('button[type="submit"]').setAttribute("disabled", "true");
      if (confirmation) {
        confirmation.textContent = "Thanks for subscribing! Watch your inbox for updates from Mental Wellness Connection.";
        confirmation.classList.remove("d-none");
      }
      form.reset();
    });
  }

  function initFormEmbedFallbacks() {
    // If a Google Form embed URL hasn't been set yet, show a friendly
    // notice instead of a broken iframe.
    var frames = document.querySelectorAll(".form-embed-frame");
    frames.forEach(function (frame) {
      var src = frame.getAttribute("src") || "";
      if (src.indexOf("PASTE_GOOGLE_FORM_EMBED_URL_HERE") !== -1) {
        var wrapper = frame.closest(".form-embed-wrapper");
        frame.classList.add("d-none");
        if (wrapper) {
          var notice = wrapper.querySelector(".form-embed-note");
          if (notice) notice.classList.remove("d-none");
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNewsletterForm();
    initFormEmbedFallbacks();
  });
})();
