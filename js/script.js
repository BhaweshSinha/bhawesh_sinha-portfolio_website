(function () {
  "use strict";

  var cells = Array.prototype.slice.call(document.querySelectorAll("[data-cell]"));
  var kernelStatus = document.getElementById("kernelStatus");
  var yearEl = document.getElementById("year");
  var runAllBtn = document.getElementById("runAllBtn");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Assign execution numbers to cells in document order and reveal them,
     either instantly (reduced motion / no IntersectionObserver) or via a
     staggered "kernel running" animation triggered on scroll / Run All. */

  function setExecLabel(cell, n) {
    var label = cell.querySelector("[data-exec]");
    if (label) label.textContent = "In [" + n + "]:";
  }

  function markVisible(cell, index) {
    if (cell.dataset.done === "true") return;
    cell.dataset.done = "true";
    setTimeout(function () {
      cell.classList.add("is-visible");
      setExecLabel(cell, index + 1);
    }, prefersReduced ? 0 : index * 90);
  }

  if (prefersReduced || !("IntersectionObserver" in window)) {
    cells.forEach(function (cell, i) {
      cell.classList.add("is-visible");
      setExecLabel(cell, i + 1);
      cell.dataset.done = "true";
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var index = cells.indexOf(entry.target);
            markVisible(entry.target, index);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    cells.forEach(function (cell) {
      observer.observe(cell);
    });
  }

  /* "Run All" replays the execution animation from the top of the page. */
  function runAll() {
    if (kernelStatus) {
      kernelStatus.textContent = "Kernel: busy";
      kernelStatus.classList.add("busy");
      kernelStatus.classList.remove("idle-done");
    }

    cells.forEach(function (cell) {
      cell.dataset.done = "false";
      cell.classList.remove("is-visible");
      setExecLabel(cell, " ");
    });

    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });

    cells.forEach(function (cell, i) {
      markVisible(cell, i);
    });

    var totalDelay = prefersReduced ? 0 : cells.length * 90 + 400;
    setTimeout(function () {
      if (kernelStatus) {
        kernelStatus.textContent = "Kernel: idle";
        kernelStatus.classList.remove("busy");
        kernelStatus.classList.add("idle-done");
      }
    }, totalDelay);
  }

  if (runAllBtn) {
    runAllBtn.addEventListener("click", runAll);
  }

  /* Initial kernel status settles to idle shortly after load. */
  window.addEventListener("load", function () {
    setTimeout(function () {
      if (kernelStatus) kernelStatus.textContent = "Kernel: idle";
    }, prefersReduced ? 0 : cells.length * 90 + 300);
  });
})();
