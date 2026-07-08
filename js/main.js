/* ==========================================================================
   Mental Wellness Connection — main.js
   Vanilla JS only. Handles shared nav/footer injection, active-link
   highlighting, scroll-reveal animation, animated stat counters, and the
   back-to-top control.

   NOTE: Partial injection uses fetch(), which requires the site to be served
   over http(s) (GitHub Pages, Firebase Hosting, Cloudflare Pages, or a local
   dev server). Opening index.html directly via file:// will block fetch()
   in most browsers — see README.md for a one-line local server command.
   ========================================================================== */

(function () {
  "use strict";

  function injectPartial(url, targetId, afterInject) {
    var target = document.getElementById(targetId);
    if (!target) return;
    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load " + url);
        return res.text();
      })
      .then(function (html) {
        target.innerHTML = html;
        if (typeof afterInject === "function") afterInject();
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  function highlightActiveNav() {
    var current = document.body.getAttribute("data-page");
    if (!current) return;
    var link = document.querySelector('.mwc-navbar [data-nav="' + current + '"]');
    if (link) link.classList.add("active");
  }

  function setFooterYear() {
    var el = document.getElementById("footer-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  function initBackToTop() {
    var btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        btn.classList.add("is-visible");
      } else {
        btn.classList.remove("is-visible");
      }
    });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initScrollReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  function initCounters() {
    var counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;

    function animateCounter(el) {
      var target = parseFloat(el.getAttribute("data-counter"));
      var suffix = el.getAttribute("data-counter-suffix") || "";
      var duration = 1400;
      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var value = Math.floor(progress * target);
        el.textContent = value.toLocaleString() + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString() + suffix;
        }
      }
      window.requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (el) { observer.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectPartial("partials/nav.html", "site-nav", highlightActiveNav);
    injectPartial("partials/footer.html", "site-footer", setFooterYear);
    initBackToTop();
    initScrollReveal();
    initCounters();
  });
})();
