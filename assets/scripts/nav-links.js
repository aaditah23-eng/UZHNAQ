(function () {
  var routes = {
    "About Us": "about.html",
    Products: "products.html"
  };

  function normalizeText(value) {
    return (value || "").replace(/\s+/g, " ").trim();
  }

  function decorateTrigger(trigger, href) {
    if (!trigger || !href) {
      return;
    }

    trigger.dataset.headerNavFixed = "true";
    trigger.style.cursor = "pointer";
    trigger.setAttribute("role", "link");

    if (!trigger.hasAttribute("tabindex")) {
      trigger.setAttribute("tabindex", "0");
    }
  }

  function getMatch(target) {
    if (!(target instanceof Element)) {
      return null;
    }

    var trigger = target.closest('[data-highlight="true"]');
    if (!trigger) {
      return null;
    }

    var label = normalizeText(trigger.textContent);
    var href = routes[label];

    if (!href) {
      return null;
    }

    decorateTrigger(trigger, href);

    return {
      href: href
    };
  }

  function navigate(event) {
    var match = getMatch(event.target);
    if (!match) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (typeof event.stopImmediatePropagation === "function") {
      event.stopImmediatePropagation();
    }

    window.location.assign(match.href);
  }

  function decorateExistingTriggers() {
    document.querySelectorAll('[data-highlight="true"]').forEach(function (trigger) {
      decorateTrigger(trigger, routes[normalizeText(trigger.textContent)]);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", decorateExistingTriggers, { once: true });
  } else {
    decorateExistingTriggers();
  }

  window.addEventListener("load", decorateExistingTriggers, { once: true });
  document.addEventListener("click", navigate, true);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      navigate(event);
    }
  }, true);
})();
