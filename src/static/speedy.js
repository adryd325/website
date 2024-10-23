// speedy.js - prefetch pages on hover for static html sites for browsers without speculationrules
// Might just be placebo, idk
(() => {
  if (navigator.userAgent.includes("Chrome")) {
    // Chromium has support for speculationrules
    return;
  }
  const HOVER_LOAD_TIMEOUT = 20;
  const FOCUS_LOAD_TIMEOUT = 200;
  // Unfortunately there's not really a metric for connection speed on firefox/safari
  const origin = window.location.origin;

  // TODO: Does this really need to be a map, can nested A elements cause this to eve be needed? research!
  let hoverTimeouts = new Map();
  let focusTimeouts = new Map();

  function onRealInterest(event) {
    const targetEl = event.target;
    hoverTimeouts.delete(targetEl);
    focusTimeouts.delete(targetEl);

    targetEl.removeEventListener("mouseover", onMouseOver);
    targetEl.removeEventListener("mouseout", onMouseOut);
    targetEl.removeEventListener("focus", onFocus);
    targetEl.removeEventListener("unfocus", onUnfocus);

    const prefetchEl = document.createElement("link");
    prefetchEl.rel = "prefetch";
    prefetchEl.href = targetEl.href;
    document.head.appendChild(prefetchEl);
  }
  function onMouseOver(event) {
    hoverTimeouts.set(
      event.target,
      setTimeout(onRealInterest, HOVER_LOAD_TIMEOUT, event),
    );
  }
  function onMouseOut(event) {
    if (hoverTimeouts.has(event.target)) {
      clearTimeout(hoverTimeouts.get(event.target));
      hoverTimeouts.delete(event.target);
    }
  }
  function onFocus(event) {
    focusTimeouts.set(
      event.target,
      setTimeout(onRealInterest, FOCUS_LOAD_TIMEOUT, event),
    );
  }
  function onUnfocus(event) {
    if (focusTimeouts.has(event.target)) {
      clearTimeout(focusTimeouts.get(event.target));
      focusTimeouts.delete(event.target);
    }
  }
  [...document.getElementsByTagName("a")].forEach((linkEl) => {
    if (linkEl.href) {
      if (new URL(linkEl.href).origin == origin) {
        linkEl.addEventListener("mouseover", onMouseOver);
        linkEl.addEventListener("mouseout", onMouseOut);
        linkEl.addEventListener("focus", onFocus);
        linkEl.addEventListener("unfocus", onUnfocus);
      }
    }
  });
})();
