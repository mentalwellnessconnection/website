/* ==========================================================================
   Mental Wellness Connection — main.js

   This file handles small interactive behaviors shared by every page:
     - Highlighting the current page's link in the navigation menu
     - Updating the copyright year in the footer automatically
     - The "back to top" button
     - Fade-in animations as you scroll down the page
     - Animated counting-up numbers (used in the homepage stats)

   Note for non-developers: the navigation menu and footer are no longer
   loaded dynamically — each page now has its own complete copy of the
   menu and footer HTML directly in the file. That means this script does
   NOT insert any HTML; it only adds small behaviors to HTML that is
   already on the page. See EDITING-GUIDE.md for how to edit page content.
   ========================================================================== */

(function () {
  "use strict";

  // Adds the "active" underline to whichever nav link matches the
  // current page (based on the data-page attribute on <body> and the
  // matching data-nav attribute on each nav link). Pages that live
  // inside the "Get Involved" dropdown (rather than as a top-level
  // link) fall back to highlighting that dropdown's toggle instead.
  function highlightActiveNav() {
    var current = document.body.getAttribute("data-page");
    if (!current) return;

    var link = document.querySelector('.mwc-navbar [data-nav="' + current + '"]');
    if (link) {
      link.classList.add("active");
      return;
    }

    var dropdownParents = {
      "volunteer": "get-involved",
      "internships": "get-involved",
      "provider-partners": "get-involved"
    };
    var parentKey = dropdownParents[current];
    if (parentKey) {
      var parentLink = document.querySelector('.mwc-navbar [data-nav="' + parentKey + '"]');
      if (parentLink) parentLink.classList.add("active");
    }
  }

  // Keeps the footer's copyright year current without manual edits.
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
    highlightActiveNav();
    setFooterYear();
    initBackToTop();
    initScrollReveal();
    initCounters();
  });
})();
